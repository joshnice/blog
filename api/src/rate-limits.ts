import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis/cloudflare";
import "isomorphic-fetch";
import { Bindings } from "./types";
import { Context } from "hono";

const rateLimitPrefix = "@upstash/ratelimit";

const createHealthCheckLimit = (env: Bindings) => new Ratelimit({
    redis: Redis.fromEnv(env),
    limiter: Ratelimit.slidingWindow(1, "10 s"),
    analytics: true,
    prefix: `${rateLimitPrefix}-healthCheck`,
});

const createGetBlogPostsLimit = (env: Bindings) => new Ratelimit({
    redis: Redis.fromEnv(env),
    limiter: Ratelimit.slidingWindow(10, "60 s"),
    analytics: true,
    prefix: `${rateLimitPrefix}-getBlogPosts`,
});

const createGetBlogPostLimit = (env: Bindings) => new Ratelimit({
    redis: Redis.fromEnv(env),
    limiter: Ratelimit.slidingWindow(20, "60 s"),
    analytics: true,
    prefix: `${rateLimitPrefix}-getBlogPost`,
});

const createGetProjectsLimit = (env: Bindings) => new Ratelimit({
    redis: Redis.fromEnv(env),
    limiter: Ratelimit.slidingWindow(10, "60s"),
    analytics: true,
    prefix: `${rateLimitPrefix}-getProjects`
});

const createGetProjectLimit = (env: Bindings) => new Ratelimit({
    redis: Redis.fromEnv(env),
    limiter: Ratelimit.slidingWindow(5, "60s"),
    analytics: true,
    prefix: `${rateLimitPrefix}-getProject`
});


export async function allowRequestRateLimit(ctx: Context<{ Bindings: Bindings }>) {
    const url = ctx.req.path;
    const ip = ctx.req.raw.headers.get("CF-Connecting-IP");

    if (ip == null) {
        return false;
    }


    const check = getRateLimitCheck(url, ctx);

    const {success} = await check.limit(ip);

    return success;
}


function getRateLimitCheck(url: string, ctx: Context<{ Bindings: Bindings }>) {
    switch (true) {
        case url === "/health-check":
            return createHealthCheckLimit(ctx.env);
        case url ==="/projects":
            return createGetProjectsLimit(ctx.env);
        case url.includes("project"):
            return createGetProjectLimit(ctx.env);
        case url.includes("posts"):
            return createGetBlogPostsLimit(ctx.env);
        case url.includes("post"):
            return createGetBlogPostLimit(ctx.env);
        default:
            return createHealthCheckLimit(ctx.env);
    }
}