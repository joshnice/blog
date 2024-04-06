import { Hono } from "hono";
import { DbProjectList } from "@joshnice/types";
import { Bindings } from "./types";

export const ProjectsRoute = new Hono<{ Bindings: Bindings }>()

ProjectsRoute.get("", async (ctx) => {
    const SQL = `select * from projects order by display_order`;

    const { results } = await ctx.env.DB.prepare(SQL).bind().all<DbProjectList>();

    if (results == null) {
        return ctx.status(500);
    }

    return ctx.json(results);
});