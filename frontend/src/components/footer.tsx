import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si/index";

export const Footer = () => (
    <div className="w-full flex flex-grow-1 justify-center gap-8 m-4">
        <a className="cursor-pointer" href="https://github.com/joshnice" target="_blank">
            <SiGithub className="text-slate-300 hover:text-white  text-3xl transition-colors duration-500" />
        </a>
        <a className="cursor-pointer" href="https://www.linkedin.com/in/josh-nice-496a71162/" target="_blank">
            <SiLinkedin className="text-slate-300 hover:text-white  text-3xl transition-colors duration-500" />
        </a>
        <a className="cursor-pointer" href="https://twitter.com/joshnicee" target="_blank">
            <SiTwitter className="text-slate-300 hover:text-white  text-3xl transition-colors duration-500" />
        </a>
    </div>
);