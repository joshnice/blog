import { useLocation } from "react-router-dom";

export const MenuPage = () => {

    const location = useLocation();

    return (
        <div className={`bg-cyan-50 ${ location.pathname.includes("menu") ? "flex" : "hidden" }`}>
            Menu
        </div>
    )
}