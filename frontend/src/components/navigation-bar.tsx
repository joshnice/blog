import React from "react";

export interface Page {
    id: string; 
    name: string;
}

interface NavigationBarProps {
    pages: Page[];
}

export const NavigationBarComponent = ({ pages }: NavigationBarProps) => {
    return (
        <div className="h-24 w-screen border-solid border-4 border-green-600">
            <span>Josh Nice</span>
            <div>
                {pages.map((page) => (
                    <button key={page.id}>{page.name}</button>
                ))}
            </div>
        </div>
    )
}