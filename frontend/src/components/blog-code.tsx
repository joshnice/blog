import Gist from "super-react-gist";

interface BlogCodeProps {
    gistUrl: string;
}

export const BlogCodeComponent = ({ gistUrl }: BlogCodeProps) => (
    <Gist className="w-full" url={gistUrl} />
)