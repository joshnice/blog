import express from "express";
import { getProjectsLimit, rateLimitCheck } from "../redis/rate-limits";
import { getProjects } from "../models/projects";

export const router = express.Router();

router.get("", async (req, res) => {

    const isAllowed = await rateLimitCheck( getProjectsLimit, res, req);

    if (!isAllowed) {
        return;
    }

    const projects = await getProjects();

    if (projects == null) {
        res.status(500);
        return;
    }

    res.json(projects);
});
