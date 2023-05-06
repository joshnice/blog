interface BlogTextProps {
    text: string;
}

export const BlogTextComponent = ({ text }: BlogTextProps) => (
    <p className="text-white text-justify">{text}</p>
)