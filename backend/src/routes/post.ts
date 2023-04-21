import express from "express";
import { urlToBucketAndKey } from "@joshnice/aws-helpers";
import { getPost } from "../models/post";
import { s3Connection } from "../aws/connection";
import { postContentJsonToTyped } from "@joshnice/helpers";

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

    const postContentJson = object.Body.toString('utf-8');

    const typedPostContent = postContentJsonToTyped(postContentJson);

    console.log(typedPostContent);

    res.send(post);
});
