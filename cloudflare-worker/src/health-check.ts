import { Hono } from "hono";
import { Bindings } from "./types";
import { VERSION } from "./index";

export const HealthCheckRoute = new Hono<{ Bindings: Bindings }>;

HealthCheckRoute.get("/", async (ctx) => {

    const SQL = "select * from users limit 3";

    const {results} = await ctx.env.DB.prepare(SQL).all();

    return ctx.json({results, VERSION});
});