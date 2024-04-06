import { Hono } from 'hono'
import { cors } from 'hono/cors';
import { Bindings } from "./types";
import { PostsRoute } from './posts';
import { PostRoute } from './post';
import { ProjectsRoute } from './projects';
import { ProjectRoute } from './project';
import { HealthCheckRoute } from './health-check';

const app = new Hono<{ Bindings: Bindings }>();

export const VERSION = 2.0;

app.use(cors());
app.route("/health-check", HealthCheckRoute);
app.route("/posts", PostsRoute);
app.route("/post", PostRoute);
app.route("/projects", ProjectsRoute);
app.route("/project", ProjectRoute);

export default app
