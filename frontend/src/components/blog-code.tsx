import Gist from "super-react-gist";
import "./gist.css";

interface BlogCodeProps {
    gistUrl: string;
    caption: string;
}

export const BlogCodeComponent = ({ gistUrl, caption }: BlogCodeProps) => {

    return (
        <div className="w-full md:w-11/12 flex flex-col items-center">
            <Gist className="w-full" url={gistUrl} />
            {caption && (<span className="text-white text-sm w-fit italic mt-1">{caption}</span>)}
        </div>
    )
}
