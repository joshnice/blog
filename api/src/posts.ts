import { Hono } from "hono";
import { DbPostList } from "@joshnice/types";
import { urlToBucketAndKey } from "@joshnice/helpers";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Bindings } from "./types";
import { createS3Client } from "./s3";

export const PostsRoute = new Hono<{ Bindings: Bindings, NAME: string }>();

PostsRoute.get("/:limit?", async c => {
    const { limit } = c.req.param();
    const parsedLimit = limit != null ? Number.parseInt(limit) : 8;

    const sql = `SELECT posts.id, posts.title, posts.thumbnail_url, posts.description, posts.date FROM posts ORDER BY posts.date desc LIMIT ?`;

    const { results } = await c.env.DB.prepare(sql).bind(parsedLimit).all<DbPostList>();


    const {AWS_S3_ACCESS_KEY, AWS_S3_REGION, AWS_S3_SECRET_ACCESS_KEY} = c.env;
    const s3Client = createS3Client(AWS_S3_ACCESS_KEY, AWS_S3_SECRET_ACCESS_KEY, AWS_S3_REGION);

    const postRequests = results.map(async ({id, title, thumbnail_url, description, date}) => {
        const { bucketName, key } = urlToBucketAndKey(thumbnail_url);
        const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
        const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
      return { id, title, thumbnailUrl: url, description, date: new Date(date) };
    })

    const signedPostsResponse = await Promise.all(postRequests);

    return c.json(signedPostsResponse);
});