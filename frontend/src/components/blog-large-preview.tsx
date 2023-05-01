import { PostList } from "@joshnice/types";
import { TransitionPreviewButton } from "./preview-button-transition";
import { PreviewText } from "./preview-text";

export const BlogLargePreviewComponent = ({thumbnailUrl, title}: Omit<PostList, "id">) => {
    return (
        <TransitionPreviewButton className="col-start-1 col-end-3">
            <img className="block w-full h-60" src={thumbnailUrl} />
            <PreviewText title={title} />
        </TransitionPreviewButton>
    )
}