import express from "express";
import { MysqlError } from "mysql";
import { connection } from "../db/pool";

export const router = express.Router();

router.get("/", (req, res) => {

    connection.connect();

    connection.query("select * from users", (error: MysqlError, results: { id: string, name: string }[]) => {
        if (error) {
            console.error(error.message);
        }
        res.send(results);
    });

    connection.end();
});
