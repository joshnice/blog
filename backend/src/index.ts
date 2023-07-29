import express from "express";
import serverless from "serverless-http";
import { APIGatewayEvent, Context } from "aws-lambda";
import dotenv from "dotenv";
import { mw } from "request-ip";
import { router as healthCheckRouter } from "./routes/health-check";
import { router as postRouter } from "./routes/post";
import { router as postsRouter } from "./routes/posts";
import { router as projectsRouter } from "./routes/projects";
import { router as projectRouter } from "./routes/project";
import cors from "cors";

dotenv.config();

export const app = express();

app.use(cors());
app.use(mw());

app.use("/health_check", healthCheckRouter);
app.use("/post", postRouter);
app.use("/posts", postsRouter);
app.use("/projects", projectsRouter);
app.use("/project", projectRouter);

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
