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

export const projects: Project[] = [
    {
        id: "joshliamnice",
        title: "joshliamnice - blog & website",
        about: "Non ut enim sit sint. Consectetur consectetur deserunt tempor ea. Non cupidatat amet irure minim magna ut et. Consectetur enim elit voluptate aliquip fugiat. Reprehenderit laboris aliquip irure ea commodo nulla aute deserunt non cupidatat.Incididunt amet aliqua nostrud ullamco sunt. Consectetur Lorem id ut minim irure et tempor laboris sint nisi anim nisi dolore labore. Ut ipsum veniam ex est voluptate. Proident dolor dolor consectetur aliqua cupidatat dolore.",
        technologies: [{name: "react", type: "frontend"}, {name: "express", type: "backend"}, {name: "AWS Lambda", about: "Exercitation incididunt ipsum mollit exercitation. Cupidatat aute est do enim. Exercitation nisi sunt veniam deserunt eu. Consequat deserunt veniam tempor velit esse adipisicing occaecat eiusmod. Esse aliqua ad sit anim pariatur sint quis eu cillum ut. Labore duis aute laborum ad occaecat.", type: "infra"}, { name: "TailwindCSS", type: "frontend", about: "Sint laborum tempor cillum consequat nostrud nostrud laboris sit commodo incididunt. Officia consectetur anim id incididunt sit consequat proident id aliqua ipsum nisi occaecat. Nisi ipsum nostrud pariatur id ullamco exercitation minim ea officia laborum labore est velit Lorem. Ut cillum occaecat voluptate minim dolor labore exercitation culpa cillum tempor. Nostrud elit in adipisicing commodo amet voluptate voluptate velit cupidatat velit nostrud quis ad irure." }, { name: "PlanetScale", type: "infra" }, { name: "MySQL", type: "backend" }, { name: "Vite", type: "frontend" }, { name: "TypeScript", type: "frontend" }],
        features: [{name: "Feature 1", about: "Eiusmod elit adipisicing sit ipsum eu id cupidatat mollit sint. Sint quis cillum in ad ut non pariatur anim qui non ex laboris esse nostrud. Ullamco ex Lorem et consequat sint ipsum anim. Ex laboris velit adipisicing et quis aute est. Enim elit nostrud nostrud anim culpa aute. Incididunt ut pariatur incididunt ad Lorem enim enim ipsum est esse cillum consequat voluptate."}, {name: "Feature 2", about: "Eiusmod elit adipisicing sit ipsum eu id cupidatat mollit sint. Sint quis cillum in ad ut non pariatur anim qui non ex laboris esse nostrud. Ullamco ex Lorem et consequat sint ipsum anim. Ex laboris velit adipisicing et quis aute est. Enim elit nostrud nostrud anim culpa aute. Incididunt ut pariatur incididunt ad Lorem enim enim ipsum est esse cillum consequat voluptate."}],
        blogPosts: [{ id: "8580409a-0211-413e-a19f-2e8df752f8af", name: "Creation of my blog" }],
        links: { code: { link: "https://github.com/joshnice/blog", label: "Source code" }, project: { link: "https://www.joshliamnice.co.uk", label: "www.joshliamnice.co.uk" } }
    },
    {
        id: "castle",
        title: "Castle Damp and Timber",
        about: "Non ut enim sit sint. Consectetur consectetur deserunt tempor ea. Non cupidatat amet irure minim magna ut et. Consectetur enim elit voluptate aliquip fugiat. Reprehenderit laboris aliquip irure ea commodo nulla aute deserunt non cupidatat.Incididunt amet aliqua nostrud ullamco sunt. Consectetur Lorem id ut minim irure et tempor laboris sint nisi anim nisi dolore labore. Ut ipsum veniam ex est voluptate. Proident dolor dolor consectetur aliqua cupidatat dolore.",
        technologies: [{name: "react", type: "frontend"}, {name: "express", type: "backend"}, {name: "AWS Lambda", about: "Exercitation incididunt ipsum mollit exercitation. Cupidatat aute est do enim. Exercitation nisi sunt veniam deserunt eu. Consequat deserunt veniam tempor velit esse adipisicing occaecat eiusmod. Esse aliqua ad sit anim pariatur sint quis eu cillum ut. Labore duis aute laborum ad occaecat.", type: "infra"}, { name: "TailwindCSS", type: "frontend", about: "Sint laborum tempor cillum consequat nostrud nostrud laboris sit commodo incididunt. Officia consectetur anim id incididunt sit consequat proident id aliqua ipsum nisi occaecat. Nisi ipsum nostrud pariatur id ullamco exercitation minim ea officia laborum labore est velit Lorem. Ut cillum occaecat voluptate minim dolor labore exercitation culpa cillum tempor. Nostrud elit in adipisicing commodo amet voluptate voluptate velit cupidatat velit nostrud quis ad irure." }, { name: "PlanetScale", type: "infra" }, { name: "MySQL", type: "backend" }, { name: "Vite", type: "frontend" }, { name: "TypeScript", type: "frontend" }],
        features: [{name: "Feature 1", about: "Eiusmod elit adipisicing sit ipsum eu id cupidatat mollit sint. Sint quis cillum in ad ut non pariatur anim qui non ex laboris esse nostrud. Ullamco ex Lorem et consequat sint ipsum anim. Ex laboris velit adipisicing et quis aute est. Enim elit nostrud nostrud anim culpa aute. Incididunt ut pariatur incididunt ad Lorem enim enim ipsum est esse cillum consequat voluptate."}, {name: "Feature 2", about: "Eiusmod elit adipisicing sit ipsum eu id cupidatat mollit sint. Sint quis cillum in ad ut non pariatur anim qui non ex laboris esse nostrud. Ullamco ex Lorem et consequat sint ipsum anim. Ex laboris velit adipisicing et quis aute est. Enim elit nostrud nostrud anim culpa aute. Incididunt ut pariatur incididunt ad Lorem enim enim ipsum est esse cillum consequat voluptate."}],
        blogPosts: [],
        links: { code: { link: "https://github.com/joshnice/blog", label: "Source code" }, project: { link: "https://www.joshliamnice.co.uk", label: "www.joshliamnice.co.uk" } }
    }
]