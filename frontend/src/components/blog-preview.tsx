import { PostList } from "@joshnice/types"
import { TransitionPreviewButton } from "./preview-button-transition";
import { PreviewText } from "./preview-text";

interface BlogSmallPreviewProps extends PostList {
    onBlogClicked: (id: string) => void;
};

export const BlogPreviewComponent = ({ title, onBlogClicked, id, description, date}: BlogSmallPreviewProps) => {
    return (
        <TransitionPreviewButton className="flex gap-4 w-full h-[250px] p-3" onClick={() => onBlogClicked(id)}>
            <PreviewText title={title} description={description} date={new Date(date).toLocaleDateString()} />
        </TransitionPreviewButton>
    )
}