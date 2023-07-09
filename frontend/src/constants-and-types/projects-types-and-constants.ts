export type ProjectId = "joshliamnice" | "castle";

export type TechnologyType = "frontend" | "backend" | "infra";

export type Technology = {name: string, about?: string, type: TechnologyType }; 

export interface Project {
    id: ProjectId;
    title: string;
    about: string;
    technologies: Technology[];
    features: string[];
}

export const projects: Project[] = [
    {
        id: "joshliamnice",
        title: "joshliamnice - blog & website",
        about: "Non ut enim sit sint. Consectetur consectetur deserunt tempor ea. Non cupidatat amet irure minim magna ut et. Consectetur enim elit voluptate aliquip fugiat. Reprehenderit laboris aliquip irure ea commodo nulla aute deserunt non cupidatat.Incididunt amet aliqua nostrud ullamco sunt. Consectetur Lorem id ut minim irure et tempor laboris sint nisi anim nisi dolore labore. Ut ipsum veniam ex est voluptate. Proident dolor dolor consectetur aliqua cupidatat dolore.",
        technologies: [{name: "react", type: "frontend"}, {name: "express", type: "backend"}, {name: "AWS Lambda", about: "allowed the blog to serverless, ran in nodejs environment with express server. Cold starts was an issue so solved by doing", type: "infra"}, { name: "TailwindCSS", type: "frontend" }, { name: "PlanetScale", type: "infra" }, { name: "MySQL", type: "backend" }, { name: "Vite", type: "frontend" }, { name: "TypeScript", type: "frontend" }],
        features: ["read blog posts", "customisable"]
    }
]