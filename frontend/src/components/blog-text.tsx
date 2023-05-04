interface BlogTextProps {
    text: string;
}

export const BlogTextComponent = ({ text }: BlogTextProps) => (
    <p>{text}</p>
)