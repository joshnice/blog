import { Hono } from "hono";
import { DbPost } from "@joshnice/types";
import { addSignatureToS3Assets, combinePostAndPostContent, postContentJsonToTyped, urlToBucketAndKey } from "@joshnice/helpers";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Bindings } from "./types";
import { createS3Client } from "./s3";

export const PostRoute = new Hono<{ Bindings: Bindings }>()

PostRoute.get("/:id", async (ctx) => {

    const id = ctx.req.param("id");
    
    const sql = `
        SELECT posts.id, posts.title, posts.post_url, posts.thumbnail_url, posts.date, users.first_name, users.last_name  
        FROM posts
        INNER JOIN users ON users.id = posts.author_id
        WHERE posts.id = ?
    `;

    const result = await ctx.env.DB.prepare(sql).bind(id).first<DbPost>();

    if (result == null) {
        return ctx.status(500);
    }

    const { bucketName: postContentBucketName, key: postContentBucketKey } = urlToBucketAndKey(result.post_url)


    const {AWS_S3_ACCESS_KEY, AWS_S3_REGION, AWS_S3_SECRET_ACCESS_KEY} = ctx.env;
    const s3Client = createS3Client(AWS_S3_ACCESS_KEY, AWS_S3_SECRET_ACCESS_KEY, AWS_S3_REGION);

    const command = new GetObjectCommand({
        "Bucket": postContentBucketName,
        "Key": postContentBucketKey,   
    });

    const response = await s3Client.send(command);

    if (response?.Body == null) {
        return ctx.status(500);
    }

    const responseBody = await response.Body.transformToString();

    const typedPostContent = postContentJsonToTyped(responseBody);

    const typedPostContentWithSignatures = await addSignatureToS3Assets(typedPostContent, async (url: string) => {
        const { bucketName, key } = urlToBucketAndKey(url);
        const command = new GetObjectCommand({
            "Bucket": bucketName,
            "Key": key,   
        });
        return await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    });
    
    return ctx.json({ ...combinePostAndPostContent({...result, thumbnail_url: ""}, typedPostContentWithSignatures) });
})