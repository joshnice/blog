import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { Fade as MenuIcon } from "hamburger-react";
import { homePage, menuPage } from "../constants-and-types/constants";
import { MenuPage } from "../pages/menu";

export interface Page {
    name: string;
    selected: boolean;
    show: boolean;
    path: string;
}

interface NavigationBarProps {
    pages: Page[];
}

export const NavigationBarComponent = ({ pages: initialPages }: NavigationBarProps) => {
    const navigate = useNavigate();

    const location = useLocation();

    const [pages, setPages] = useState(initialPages);

    const [previouslySelectedPage, setPreviouslySelectedPage] = useState(homePage);

    useEffect(() => {
        const initialPage = initialPages.find(({ path }) => location.pathname.includes(path));
        if (initialPage != null) {
            setPages(pages.map((page) => ({...page, selected: page.path === initialPage.path})));
        }
    }, []);

    const handlePageChange = (path: string) => {
        const previousPage = pages.find(({ selected }) => selected);
        if (previousPage == null) {
            throw new Error("Previous page could not be found");
        }
        setPreviouslySelectedPage(previousPage);
        
        setPages(pages.map((page) => ({...page, selected: page.path === path})));
        navigate(path);
    }

    const handleMenuClicked = () => {
        const isMenuSelected = location.pathname === menuPage.path;
        handlePageChange(isMenuSelected ? previouslySelectedPage.path : menuPage.path);
    }
    
    return (
        <div className="flex items-center justify-start p-5 text-white h-24 w-full">
            <button onClick={() => handlePageChange(homePage.path)}><h4 className="flex-0">Josh Nice</h4></button>
            <div className="hidden sm:flex justify-center flex-grow gap-8">
                {pages.filter(({ show }) => show).map((page) => (
                    <button className={`${page.selected ? "underline text-white" : "hover:underline hover:text-white text-slate-400 transition-colors duration-500"}`} key={page.path} onClick={() => handlePageChange(page.path)}>{page.name}</button>
                ))}
            </div>

            <div className="flex sm:hidden justify-end flex-grow mr-3">
                <button onClick={handleMenuClicked}>
                    <MenuIcon size={20} />
                </button>
            </div>
        </div>
    )
}