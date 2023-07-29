import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { Request, Response} from "express";
import "isomorphic-fetch";

const rateLimitPrefix = "@upstash/ratelimit";

export const getBlogPostsLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "60 s"),
    analytics: true,
    prefix: `${rateLimitPrefix}-getBlogPosts`,
});

export const getBlogPostLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(20, "60 s"),
    analytics: true,
    prefix: `${rateLimitPrefix}-getBlogPost`,
});

export const healthCheckLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(1, "10 s"),
    analytics: true,
    prefix: `${rateLimitPrefix}-healthCheck`,
});

export const getProjectsLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "60s"),
    analytics: true,
    prefix: `${rateLimitPrefix}-getProjects`
});

export async function rateLimitCheck(rateLimit: Ratelimit, res: Response<any,any>, req: Request): Promise<boolean> {

    const ip = req.clientIp;

    if (ip == null) {
        res.status(500).send("Ip address was not recongised");
        return false;
    }

    const { success } = await rateLimit.limit(ip);

    if (!success) {
        res.status(429).send("Hit the rate limit");
        return false;
    }

    return true;
}