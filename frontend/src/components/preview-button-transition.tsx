import { ReactNode } from "react";

interface TransitionPreviewButtonProps {
    children: ReactNode;
    className: string;
    onClick: () => void;
}

export const TransitionPreviewButton = ({ children, className, onClick }: TransitionPreviewButtonProps) => <button className={`relative rounded-sm border-0  md:border-4 border-transparent hover:border-slate-300 hover:transition-[border] duration-500 hover:duration-500 hover:ease-[ease-out] ${className}`} onClick={onClick
}>{children}</button>