import express from "express";
import { getPost } from "../models/post";
import { s3Connection } from "../aws/connection";
import { addSignatureToS3Assets, postContentJsonToTyped, combinePostAndPostContent, urlToBucketAndKey } from "@joshnice/helpers";
import { getBlogPostLimit, rateLimitCheck } from "../redis/rate-limits";

export const router = express.Router();

router.get("/:id", async (req, res) => {

    const isAllowed = await rateLimitCheck(getBlogPostLimit, res, req);

    if (!isAllowed) {
        return;
    }

    const post = await getPost(req.params.id);

    if (post == null) {
        res.status(500);
        return;
    }

    const { bucketName: postContentBucketName, key: postContentBucketKey } = urlToBucketAndKey(post.post_url)

    const s3Params = {
        "Bucket": postContentBucketName,
        "Key": postContentBucketKey,   
    }

    const object = await s3Connection.getObject(s3Params).promise();

    if (object.Body == null) {
        res.status(500);
        return;
    }

    const typedPostContent = postContentJsonToTyped(object.Body.toString('utf-8'));

    const typedPostContentWithSignatures = await addSignatureToS3Assets(typedPostContent, async (url: string) => {
        const { bucketName, key } = urlToBucketAndKey(url);
        return await s3Connection.getSignedUrlPromise("getObject", { Bucket: bucketName, Key: key, Expires: 3600 });
    });

    const { bucketName: signedThumbnailBucketName, key: signedThumbnailKey } = urlToBucketAndKey(post.thumbnail_url);
    
    const signedThumbnail = await s3Connection.getSignedUrlPromise("getObject", { Bucket: signedThumbnailBucketName, Key: signedThumbnailKey, Expires: 3600 });

    res.send({ ...combinePostAndPostContent({...post, thumbnail_url: signedThumbnail}, typedPostContentWithSignatures) });
});
