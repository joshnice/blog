import express from "express";
import { urlToBucketAndKey } from "@joshnice/aws-helpers";
import { getPost } from "../models/post";
import { s3Connection } from "../aws/connection";
import { addSignatureToS3Assets, postContentJsonToTyped } from "@joshnice/helpers";

export const router = express.Router();

router.get("/:id", async (req, res) => {
    const post = await getPost(req.params.id);

    if (post == null) {
        res.status(500);
        return;
    }

    const { bucketName, key } = urlToBucketAndKey(post.post_url)

    const s3Params = {
        "Bucket": bucketName,
        "Key": key,   
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

    res.send(typedPostContentWithSignatures);
});
