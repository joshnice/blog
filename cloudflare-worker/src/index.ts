import { Hono } from 'hono'
import { cors } from 'hono/cors';
import { Bindings } from "./types";
import { PostsRoute } from './posts';
import { PostRoute } from './post';
import { ProjectsRoute } from './projects';
import { ProjectRoute } from './project';

const app = new Hono<{ Bindings: Bindings }>();

app.use(cors());
app.route("/posts", PostsRoute);
app.route("/post", PostRoute);
app.route("/projects", ProjectsRoute);
app.route("/project", ProjectRoute);

app.get("/users", async (c) => {

  if (c.env == null) {
    return c.json({ err: "Env is null" }, 500)
  }

  try {
    const response = await c.env.DB.prepare("SELECT * FROM users").all();
    return c.json(response.results)
  } catch (e) {
    return c.json({ err: e }, 500)
  }


});

export default app
