import express from "express";
import { pool } from "./db/pool";

const app = express();

const port = 3001;

app.get("/", (req, res) => {
    res.send("Default");
});

app.get("/health_check", (req, res) => {
    res.send("Success!");
});

app.get("/data", async (req, res) => {
    const client = await pool.connect();
    const response = await client.query("select * from users");
    res.send(response.rows);
    client.release();
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
 
