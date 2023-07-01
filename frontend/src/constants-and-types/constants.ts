import { Page } from "../components/navigation-bar";

export const homePage: Page = { path: "/", name: "Home", selected: false, show: false };
export const menuPage: Page = { path: "/menu", name: "Menu", selected: false, show: false };
export const aboutPage: Page = { path: "/about", name: "About", selected: false, show: true };
export const blogPage: Page = { path: "/blog", name: "Blog", selected: false, show: true };
export const experiencePage: Page = { path: "/experience", name: "Experience", selected: false, show: true };
export const projectsPage: Page =  { path: "/projects", name: "Projects", selected: false, show: true };
export const socialPage: Page = { path: "/socials", name: "Socials", selected: false, show: true };


export const pages: Page[] = [
    homePage,
    menuPage,
    aboutPage,
    blogPage,
    // experiencePage,
    projectsPage,
    // socialPage
];