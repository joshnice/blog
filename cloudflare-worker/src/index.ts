import { D1Database } from '@cloudflare/workers-types';
import { Hono } from 'hono'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

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
