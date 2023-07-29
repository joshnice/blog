import express from "express";
import { getProjectLimit, rateLimitCheck } from "../redis/rate-limits";
import { getProject } from "../models/project";
import { urlToBucketAndKey } from "@joshnice/helpers";
import { s3Connection } from "../aws/connection";

export const router = express.Router();

router.get("/:id", async (req, res) => {

    const isAllowed = await rateLimitCheck( getProjectLimit, res, req);

    if (!isAllowed) {
        return;
    }

    const projectJson = await getProject(req.params.id);

    if (projectJson == null) {
        res.status(500);
        return;
    }

    const url = projectJson.project_json; 

    const { bucketName, key } = urlToBucketAndKey(url);

    const s3Params = {
        "Bucket": bucketName,
        "Key": key,   
    }

    const object = await s3Connection.getObject(s3Params).promise();


    if (object == null || object.Body == null) {
        res.status(500)
        return;
    }   
    
    const projectContent = object.Body.toString('utf-8');

    res.json(JSON.parse(projectContent));
});
