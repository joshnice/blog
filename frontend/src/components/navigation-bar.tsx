import { useState } from "react";
import { useNavigate } from "react-router";

export interface Page {
    id: string; 
    name: string;
    selected: boolean;
}

interface NavigationBarProps {
    pages: Page[];
}

export const NavigationBarComponent = ({ pages: initialPages }: NavigationBarProps) => {
    const navigate = useNavigate();

    const [pages, setPages] = useState(initialPages);

    const handlePageChange = (pageId: string) => {
        setPages(pages.map((page) => ({...page, selected: page.id === pageId})));
        navigate(pageId);
    }
    
    return (
        <div className="flex items-center justify-start p-5 text-white h-24 w-full">
            <h4 className="flex-0">Josh Nice</h4>
            <div className="flex justify-center flex-grow gap-8">
                {pages.map((page) => (
                    <button className={`${page.selected ? "underline text-white" : "hover:underline hover:text-white text-slate-400 transition-colors duration-500"}`} key={page.id} onClick={() => handlePageChange(page.id)}>{page.name}</button>
                ))}
            </div>
        </div>
    )
}