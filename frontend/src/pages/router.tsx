import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import { BlogPage } from "./blog";
import { AboutPage } from "./about";
import { NavigationBarComponent } from "../components/navigation-bar";
import { aboutPage, blogPage, pages } from "../constants-and-types/constants";
import { HomePage } from "./home";

export const RouterComponent = () => {

    return (
        <BrowserRouter>
            <NavigationBarComponent pages={pages} />
            <div className="p-3">
                <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path={aboutPage.id} element={<AboutPage />} />
                        <Route path={blogPage.id} element={<BlogPage />} />
                        <Route path="*" element={<p>Oops something has gone wrong!</p>} />
                </Routes>
            </div>

        </BrowserRouter>
      )
}