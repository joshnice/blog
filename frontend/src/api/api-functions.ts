import { PostList } from "@joshnice/types";
import { apiUrl } from "./api";

export async function getPosts(): Promise<PostList[]> {
    const response = await fetch(`${apiUrl}/posts/8`, { method: "get" });
    const posts = await response.json();
    return posts;
} 