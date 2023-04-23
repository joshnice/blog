import express from "express";
import serverless from "serverless-http";
import { APIGatewayEvent, Context } from "aws-lambda";
import dotenv from "dotenv";
import { router as healthCheckRouter } from "./routes/health-check";
import { router as postRouter } from "./routes/post";
import { router as postsRouter } from "./routes/posts";

dotenv.config();

export const app = express();

app.use("/health_check", healthCheckRouter);
app.use("/post", postRouter);
app.use("/posts", postsRouter);

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