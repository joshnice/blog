export interface Project {
    id: string;
    title: string;
    about: string;
    technologies: Technology[];
    features: Feature[];
    links: { code: { label: string, link: string }, project: { label: string, link: string } }
    blogPosts: { id: string, name: string }[];
}

type TechnologyType = "frontend" | "backend" | "infra";

type Technology = {name: string, about?: string, type: TechnologyType };

type Feature = { name: string, about: string };