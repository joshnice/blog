import { Page } from "../components/navigation-bar";

export const homePage: Page = { id: "home", path: "/", name: "Home", selected: false, show: false } as const;
export const aboutPage: Page = { id: "about", name: "About", selected: false, show: true };
export const blogPage: Page = { id: "blog", name: "Blog", selected: false, show: true };
export const experiencePage: Page = { id: "exp", name: "Experience", selected: false, show: true };
export const projectsPage: Page =  { id: "projects", name: "Projects", selected: false, show: true };
export const socialPage: Page = { id: "social", name: "Socials", selected: false, show: true };


export const pages: Page[] = [
    homePage,
    aboutPage,
    blogPage,
    experiencePage,
    projectsPage,
    socialPage
];