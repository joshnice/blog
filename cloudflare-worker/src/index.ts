import { Hono } from 'hono'
import { cors } from 'hono/cors';
import { Bindings } from "./types";
import { PostsRoute } from './posts';

const app = new Hono<{ Bindings: Bindings }>();

app.use(cors());
app.route("/posts", PostsRoute);

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
