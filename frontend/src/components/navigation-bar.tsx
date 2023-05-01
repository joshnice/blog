export interface Page {
    id: string; 
    name: string;
    selected: boolean;
}

interface NavigationBarProps {
    pages: Page[];
    onPageChange: (id: string) => void;
}

export const NavigationBarComponent = ({ pages, onPageChange }: NavigationBarProps) => {
    return (
        <div className="flex items-center justify-start p-5 text-white h-24 w-screen">
            <h4 className="flex-0">Josh Nice</h4>
            <div className="flex justify-center flex-grow gap-8">
                {pages.map((page) => (
                    <button className={`${page.selected ? "underline text-white" : "hover:underline hover:text-white text-slate-400"}`} key={page.id} onClick={() => onPageChange(page.id)}>{page.name}</button>
                ))}
            </div>
        </div>
    )
}