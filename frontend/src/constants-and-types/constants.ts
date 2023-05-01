import { Page } from "../components/navigation-bar";

export const aboutPage: Page = { id: "about", name: "About", selected: false };
export const blogPage: Page = { id: "blog", name: "Blog", selected: false };
export const experiencePage: Page = { id: "exp", name: "Experience", selected: false };
export const projectsPage: Page =  { id: "projects", name: "Projects", selected: false };
export const socialPage: Page = { id: "social", name: "Socials", selected: false };


export const pages: Page[] = [
    aboutPage,
    blogPage,
    experiencePage,
    projectsPage,
    socialPage
];