import { config, S3 } from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

if (process.env.AWS_S3_ACCESS_KEY == null || process.env.AWS_S3_SECRET_ACCESS_KEY == null || process.env.AWS_S3_REGION == null) {
    throw new Error("S3 is missing configuration variables");
}

config.update({
    region: process.env.AWS_S3_REGION,
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY
});

export const s3Connection = new S3();
