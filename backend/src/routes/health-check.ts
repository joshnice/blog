import express from "express";
import { getUsers } from "../models/user";
import { healthCheckLimit, rateLimitCheck } from "../redis/rate-limits";
import { version } from "../index";

export const router = express.Router();

router.get("/", async (req, res) => {

    const isAllowed = await rateLimitCheck(healthCheckLimit, res, req);

    if (!isAllowed) {
        return;
    }

    const users = await getUsers();
    res.json({users, version});
});

router.post("/", async (req, res) => {
    const users = await getUsers();
    res.json({users, version});
});
