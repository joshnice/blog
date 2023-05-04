import { PostList } from "@joshnice/types";
import { TransitionPreviewButton } from "./preview-button-transition";
import { PreviewText } from "./preview-text";

interface BlogLargePreviewProps extends PostList {
    onBlogClicked: (id: string) => void;
}

export const BlogLargePreviewComponent = ({id, thumbnailUrl, title, onBlogClicked}: BlogLargePreviewProps) => {
    return (
        <TransitionPreviewButton className="col-start-1 col-end-3" onClick={() => onBlogClicked(id)}>
            <img className="block w-full h-60" src={thumbnailUrl} />
            <PreviewText title={title} />
        </TransitionPreviewButton>
    )
}