import { ReactNode } from "react"

export const Header = ({ children }: { children: ReactNode }) => (
    <h3 className="text-white text-3xl self-start">{children}</h3>
)

export const SubHeader = ({ children }: { children: ReactNode }) => (
    <h4 className="text-white text-2xl self-start">{children}</h4>
)

export const Text = ({ children }: { children: ReactNode }) => (
    <p className="text-slate-300 text-justify">{children}</p>
)

export const Link = ({ children, onClick, href, newTab }: { children: ReactNode, onClick?: () => void, href?: string, newTab?: boolean }) => (
    <a className="text-sky-400 hover:underline hover:cursor-pointer" target={newTab ? "_blank" : undefined} href={href} onClick={onClick}>{children}</a>
)
