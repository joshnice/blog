export type ProjectId = "joshliamnice" | "castle";

export interface Project {
    id: ProjectId;
    title: string;
    about: string;
    technologies: {name: string, about?: string }[];
    features: string[];
}

export const projects: Project[] = [
    {
        id: "joshliamnice",
        title: "joshliamnice - blog & website",
        about: "A blog",
        technologies: [{name: "react"}, {name: "express"}, {name: "AWS Lambda", about: "allowed the blog to serverless, ran in nodejs environment with express server. Cold starts was an issue so solved by doing"}],
        features: ["read blog posts", "customisable"]
    }
]