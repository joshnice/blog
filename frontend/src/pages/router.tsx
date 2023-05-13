import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlogPage } from "./blog";
import { AboutPage } from "./about";
import { NavigationBarComponent } from "../components/navigation-bar";
import { aboutPage, blogPage, homePage, menuPage, pages } from "../constants-and-types/constants";
import { HomePage } from "./home";
import { BlogPostPage } from "./blog-post";
import { MenuPage } from "./menu";

export const RouterComponent = () => {
    return (
        <BrowserRouter>
            <NavigationBarComponent pages={pages} />
            <div className="w-full flex justify-center">
                <Routes>
                    <Route path={homePage.path} element={<HomePage />} />
                    <Route path={aboutPage.path} element={<AboutPage />} />
                    <Route path={blogPage.path} element={<BlogPage />} />
                    <Route path={`${blogPage.path}/:id`} element={<BlogPostPage />} />     
                    <Route path={menuPage.path} element={<MenuPage />} />                       
                    <Route path="*" element={<p>Oops something has gone wrong!</p>} />
                </Routes>
            </div>

        </BrowserRouter>
      )
}