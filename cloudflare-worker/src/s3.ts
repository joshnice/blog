import { S3Client } from "@aws-sdk/client-s3";

export function createS3Client(accessKey: string, secretAccessKey: string, region: string) {
  const client = new S3Client({
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretAccessKey,
    },
    region: region
  });
  return client;
}