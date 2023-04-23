import express from "express";
import { getPosts } from "../models/posts";
import { urlToBucketAndKey } from "@joshnice/helpers";
import { s3Connection } from "../aws/connection";
import { PostList } from "@joshnice/types";

export const router = express.Router();

router.get("/:limit?", async (req, res) => {

    const limit = req.params.limit ?? 8;

    const parsedLimit = Number(limit);

    const posts = await getPosts(parsedLimit);

    if (posts == null) {
        res.status(500);
        return;
    }

    const signedPosts: PostList[] = [];

    for await (const {id, title, thumbnail_url} of posts) {
        const { bucketName, key } = urlToBucketAndKey(thumbnail_url);
        const signedUrl = await s3Connection.getSignedUrlPromise("getObject", { Bucket: bucketName, Key: key, Expires: 3600 })
        signedPosts.push({ id, title, thumbnailUrl: signedUrl });
    }

    res.json(signedPosts);
});