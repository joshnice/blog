import express from "express";
import { MysqlError } from "mysql";
import { pool } from "../db/connection";
import { getUsers } from "../models/user";
import { healthCheckLimit, rateLimitCheck } from "../redis/rate-limits";

export const router = express.Router();

router.get("/", async (req, res) => {

    const isAllowed = await rateLimitCheck(healthCheckLimit, res, req);

    if (!isAllowed) {
        return;
    }

    const users = await getUsers();
    res.json(users);
});
