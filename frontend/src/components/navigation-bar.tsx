import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { homePage } from "../constants-and-types/constants";

export interface Page {
    id: string; 
    name: string;
    selected: boolean;
    show: boolean;
    path?: string;
}

interface NavigationBarProps {
    pages: Page[];
}

export const NavigationBarComponent = ({ pages: initialPages }: NavigationBarProps) => {
    const navigate = useNavigate();

    const location = useLocation();

    const [pages, setPages] = useState(initialPages);

    useEffect(() => {
        const initialPage = initialPages.find(({ id }) => location.pathname.includes(id));
        if (initialPage != null) {
            setPages(pages.map((page) => ({...page, selected: page.id === initialPage.id})));
        }
    }, []);

    const handlePageChange = (pageId: string) => {
        setPages(pages.map((page) => ({...page, selected: page.id === pageId})));
        navigate(pageId);
    }
    
    return (
        <div className="flex items-center justify-start p-5 text-white h-24 w-full">
            <button onClick={() => handlePageChange(homePage.path ?? homePage.id)}><h4 className="flex-0">Josh Nice</h4></button>
            <div className="flex justify-center flex-grow gap-8">
                {pages.filter(({ show }) => show).map((page) => (
                    <button className={`${page.selected ? "underline text-white" : "hover:underline hover:text-white text-slate-400 transition-colors duration-500"}`} key={page.id} onClick={() => handlePageChange(page.id)}>{page.name}</button>
                ))}
            </div>
        </div>
    )
}