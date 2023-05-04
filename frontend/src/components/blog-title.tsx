interface BlogTitleProps {
    title: string;
}

export const BlogTitleComponent = ({ title }: BlogTitleProps) => (
    <h4>{title}</h4>
)