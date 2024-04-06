import { Hono } from "hono";
import { DbProjectList } from "@joshnice/types";
import { Bindings } from "./types";

const ProjectRoute = new Hono<{ Bindings: Bindings }>()

ProjectRoute.get("", async (ctx) => {
    const SQL = `select * from projects order by display_order`;

    const { results } = await ctx.env.DB.prepare(SQL).bind().all<DbProjectList>();

    if (results == null) {
        return ctx.status(500);
    }

    return ctx.json(results);
});