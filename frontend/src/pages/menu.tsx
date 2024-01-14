import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { pages } from "../constants-and-types/constants";
import { PreviousPageContext } from "../context/page-context";

export const MenuPage = () => {

    const navigate = useNavigate()

    const previousPageContext = useContext(PreviousPageContext);

    const handlePageClicked = (path: string) => {
        previousPageContext?.setPreviousPath(path);
        navigate(path);
    }
    
    return (
        <div className="flex flex-col justify-start w-full h-full">
            {pages.filter(({show}) => show).map((page) => 
                (
                    <div key={page.path} className="flex flex-col justify-start items-start w-full h-full max-h-32">
                        <div className="h-px bg-slate-400 w-full" />
                        <button className="text-white pl-4 pr-4 h-28 w-full text-left" onClick={() => handlePageClicked(page.path)}>
                            {page.name}
                        </button>
                    </div>
                )
            )}
            <div className="h-px bg-slate-400 w-full" />
        </div>
    )
}