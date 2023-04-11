import express from "express";
import serverless from "serverless-http";
import { APIGatewayEvent, Context } from "aws-lambda";
import { pool } from "./db/pool";

const app = express();

app.get("/health_check", (req, res) => {
    res.send("Success!");
});

app.get("/data", async (req, res) => {
    const client = await pool.connect();
    const response = await client.query("select * from users");
    res.send(response.rows);
    client.release();
});

app.use(express.json());

const handler = serverless(app);

exports.handler = async (event: APIGatewayEvent, context: Context) => {
    const result = await handler(event, context);
    return result;
};  
