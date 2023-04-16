import express from "express";
import { MysqlError } from "mysql";
import { pool } from "../db/connection";
import { getUsers } from "../models/user";

export const router = express.Router();

router.get("/", async (req, res) => {
    const users = await getUsers();
    res.json(users);
});
