import express from "express";
import serverless from "serverless-http";
import { APIGatewayEvent, Context } from "aws-lambda";
import { connection } from "./db/pool";
import dotenv from "dotenv";
import { MysqlError } from "mysql";

dotenv.config();

const app = express();


app.get("/health_check", (req, res) => {
    res.send("Success!");
});

app.get("/data", async (req, res) => {

    connection.connect();

    connection.query("select * from users", (error: MysqlError, results: { id: string, name: string }[]) => {
        if (error) {
            console.error(error.message);
        }
        res.send(results);
    });

    connection.end();
});

app.use(express.json());

const handler = serverless(app);

if (process.env.LOCAL === "true") {
    const port = 3001;
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
} else {
    exports.handler = async (event: APIGatewayEvent, context: Context) => {
        const result = await handler(event, context);
        return result;
    };  
}
