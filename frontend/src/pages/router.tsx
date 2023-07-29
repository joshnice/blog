import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlogPage } from "./blog";
import { AboutPage } from "./about";
import { NavigationBarComponent } from "../components/navigation-bar";
import { aboutPage, blogPage, experiencePage, homePage, menuPage, pages, projectsPage } from "../constants-and-types/constants";
import { HomePage } from "./home";
import { BlogPostPage } from "./blog-post";
import { MenuPage } from "./menu";
import { PreviousPageClass, PreviousPageContext } from "../context/page-context";
import { ProjectPage } from "./project";
import { ProjectsPage } from "./projects";
import { ExperiencePage } from "./experience";

export const RouterComponent = () => {

    return (
        <PreviousPageContext.Provider value={new PreviousPageClass(homePage.path)}>
            <BrowserRouter>
                <NavigationBarComponent pages={pages} />
                <Routes>
                    <Route path={homePage.path} element={<HomePage />} />
                    <Route path={aboutPage.path} element={<AboutPage />} />
                    <Route path={blogPage.path} element={<BlogPage />} />
                    <Route path={projectsPage.path} element={<ProjectsPage />} />
                    <Route path={`${projectsPage.path}/:id`} element={<ProjectPage />}  />
                    <Route path={`${blogPage.path}/:id`} element={<BlogPostPage />} />     
                    <Route path={experiencePage.path} element={<ExperiencePage />} />
                    <Route path={menuPage.path} element={<MenuPage />} />                       
                    <Route path="*" element={<p>Oops something has gone wrong!</p>} />
                </Routes>
            </BrowserRouter>
        </PreviousPageContext.Provider>
      )
}