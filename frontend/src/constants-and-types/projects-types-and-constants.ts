export type ProjectId = "joshliamnice" | "castle";

export type TechnologyType = "frontend" | "backend" | "infra";

export type Technology = {name: string, about?: string, type: TechnologyType }; 

export interface Project {
    id: ProjectId;
    title: string;
    about: string;
    technologies: Technology[];
    features: string[];
    links: { code: { label: string, link: string }, project: { label: string, link: string } }
    blogPosts: { id: string, name: string }[];
}

export const projects: Project[] = [
    {
        id: "joshliamnice",
        title: "joshliamnice - blog & website",
        about: "Non ut enim sit sint. Consectetur consectetur deserunt tempor ea. Non cupidatat amet irure minim magna ut et. Consectetur enim elit voluptate aliquip fugiat. Reprehenderit laboris aliquip irure ea commodo nulla aute deserunt non cupidatat.Incididunt amet aliqua nostrud ullamco sunt. Consectetur Lorem id ut minim irure et tempor laboris sint nisi anim nisi dolore labore. Ut ipsum veniam ex est voluptate. Proident dolor dolor consectetur aliqua cupidatat dolore.",
        technologies: [{name: "react", type: "frontend"}, {name: "express", type: "backend"}, {name: "AWS Lambda", about: "allowed the blog to serverless, ran in nodejs environment with express server. Cold starts was an issue so solved by doing", type: "infra"}, { name: "TailwindCSS", type: "frontend" }, { name: "PlanetScale", type: "infra" }, { name: "MySQL", type: "backend" }, { name: "Vite", type: "frontend" }, { name: "TypeScript", type: "frontend" }],
        features: ["Eiusmod elit adipisicing sit ipsum eu id cupidatat mollit sint. Sint quis cillum in ad ut non pariatur anim qui non ex laboris esse nostrud. Ullamco ex Lorem et consequat sint ipsum anim. Ex laboris velit adipisicing et quis aute est. Enim elit nostrud nostrud anim culpa aute. Incididunt ut pariatur incididunt ad Lorem enim enim ipsum est esse cillum consequat voluptate.", "Ea culpa adipisicing labore ullamco enim deserunt consequat commodo dolor occaecat nisi. Duis dolor aliqua sunt voluptate nostrud est laborum aliqua in. Magna dolore reprehenderit est cupidatat proident qui ipsum veniam ipsum pariatur dolor incididunt. Esse consectetur deserunt in eiusmod amet. Commodo nostrud veniam aliqua in excepteur ad veniam ullamco aute in amet veniam fugiat ea. Cillum reprehenderit qui qui id."],
        blogPosts: [{ id: "8580409a-0211-413e-a19f-2e8df752f8af", name: "Creation of my blog" }],
        links: { code: { link: "https://github.com/joshnice/blog", label: "Source code" }, project: { link: "https://www.joshliamnice.co.uk", label: "www.joshliamnice.co.uk" } }
    }
]