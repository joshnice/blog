import { PostList } from "@joshnice/types";

export async function getPosts(): Promise<PostList[]> {
    const response = await fetch("/api/posts", { method: "get" });
    const posts = await response.json();
    return posts;
} 