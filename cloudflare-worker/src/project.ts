import { Hono } from "hono";
import { urlToBucketAndKey } from "@joshnice/helpers";
import { Bindings } from "./types";
import { ProjectsDb } from "@joshnice/types";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { createS3Client } from "./s3";

export const ProjectRoute = new Hono<{ Bindings: Bindings }>();

ProjectRoute.get(":id", async(ctx) => {
    
    const id = ctx.req.param();

    const SQL = `select project_json from projects where id = ?`;
    const projectJson = await ctx.env.DB.prepare(SQL).bind(id).first<ProjectsDb>();

    if (projectJson == null) {
        return ctx.status(500);
    }

    const url = projectJson.project_json; 

    const { bucketName, key } = urlToBucketAndKey(url);

    const command = new GetObjectCommand({
        "Bucket": bucketName,
        "Key": key,   
    });

    const { AWS_S3_ACCESS_KEY, AWS_S3_SECRET_ACCESS_KEY, AWS_S3_REGION } = ctx.env;
    const s3Client = createS3Client(AWS_S3_ACCESS_KEY, AWS_S3_SECRET_ACCESS_KEY, AWS_S3_REGION)

    const response = await s3Client.send(command);

    if (response?.Body == null) {
        return ctx.status(500);
    }

    const projectContent = await response.Body.transformToString();

    return ctx.json(projectContent);
});