import { Post, PostList, Project, ProjectList } from "@joshnice/types";
import { apiUrl } from "./api";

export async function getPosts(): Promise<PostList[]> {
    const response = await fetch(`${apiUrl}/posts/8`, { method: "get" });
    const posts = await response.json();
    return posts;
} 

export async function getPost(postId: string): Promise<Post> {
    const response = await fetch(`${apiUrl}/post/${postId}`, { method: "get" });
    const post = await response.json();
    return post;
}

export async function getProjects(): Promise<ProjectList[]> {
    const response = await fetch(`${apiUrl}/projects`, { method: "get" });
    const projects = await response.json();
    return projects;
}

export async function getProject(id?: string): Promise<Project> {
    const response = await fetch(`${apiUrl}/project/${id}`, { method: "get" });
    const project = await response.json();
    return project;
}