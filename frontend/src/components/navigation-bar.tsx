import { useNavigate } from "react-router";
import { useEffect, useState, useMemo, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Fade as MenuIcon } from "hamburger-react";
import { homePage, menuPage } from "../constants-and-types/constants";
import { PreviousPageContext } from "../context/page-context";

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

    const previousPageContext = useContext(PreviousPageContext);

    const isMenuSelected = useMemo(() => location.pathname === menuPage.path, [location.pathname]);

    useEffect(() => {
        previousPageContext?.setPreviousPath(location.pathname);

        const initialPage = initialPages
            .filter(({ show }) => show)
            .find(({ path }) => location.pathname.includes(path));

        if (initialPage != null) {
            setPages(pages.map((page) => ({...page, selected: page.path === initialPage.path})));
        }
    }, []);

    const handlePageChange = (path: string) => {        
        previousPageContext?.setPreviousPath(path);
        setPages(pages.map((page) => ({...page, selected: page.path === path})));
        navigate(path);
    }

    const handleMenuClicked = () => {
        const perviousPath = previousPageContext?.previousPath ?? homePage.path;
        handlePageChange(isMenuSelected ? perviousPath : menuPage.path);
    }
    
    return (
        <div className="flex items-center justify-start p-5 text-white min-h-24 h-24 w-full">
            <button onClick={() => handlePageChange(homePage.path)}><h4 className="flex-0">Josh Nice</h4></button>
            <div className="hidden sm:flex justify-center flex-grow gap-8">
                {pages.filter(({ show }) => show).map((page) => (
                    <button className={`${page.selected ? "underline text-white" : "hover:underline hover:text-white text-slate-400 transition-colors duration-500"}`} key={page.path} onClick={() => handlePageChange(page.path)}>{page.name}</button>
                ))}
            </div>

            <div className="flex sm:hidden justify-end flex-grow mr-3">
                <button onClick={handleMenuClicked}>
                    <MenuIcon size={20} toggled={isMenuSelected} />
                </button>
            </div>
        </div>
    )
}