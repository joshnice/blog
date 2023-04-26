import { PostList } from "@joshnice/types";
import axios from "axios";

export async function getPosts(): Promise<PostList[]> {
    const response = await axios.get("/api/posts")
    return response.data;
} 