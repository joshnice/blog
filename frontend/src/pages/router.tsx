import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlogPage } from "./blog";
import { AboutPage } from "./about";
import { NavigationBarComponent } from "../components/navigation-bar";
import { aboutPage, blogPage, pages } from "../constants-and-types/constants";
import { HomePage } from "./home";
import { BlogPostPage } from "./blog-post";

export const RouterComponent = () => {
    return (
        <BrowserRouter>
            <NavigationBarComponent pages={pages} />
            <div className="flex justify-center">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path={aboutPage.id} element={<AboutPage />} />
                    <Route path={blogPage.id} element={<BlogPage />} />
                    <Route path={`${blogPage.id}/:id`} element={<BlogPostPage />} />                       
                    <Route path="*" element={<p>Oops something has gone wrong!</p>} />
                </Routes>
            </div>

        </BrowserRouter>
      )
}