export type ProjectId = "joshliamnice" | "castle";

export type TechnologyType = "frontend" | "backend" | "infra";

export type Technology = {name: string, about?: string, type: TechnologyType };

export type Feature = { name: string, about: string };

export interface Project {
    id: ProjectId;
    title: string;
    about: string;
    technologies: Technology[];
    features: Feature[];
    links: { code: { label: string, link: string }, project: { label: string, link: string } }
    blogPosts: { id: string, name: string }[];
}