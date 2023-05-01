import { PostList } from "@joshnice/types"
import { TransitionPreviewButton } from "./preview-button-transition";
import { PreviewText } from "./preview-text";

interface BlogSmallPreviewProps {
    columnStartNumber: number;
};

export const BlogSmallPreviewComponent = ({columnStartNumber, thumbnailUrl, title}: BlogSmallPreviewProps & Omit<PostList, "id">) => {
    return (
        <TransitionPreviewButton className={`col-start-${columnStartNumber} col-end-${columnStartNumber + 1}`}>
            <img className="block w-full h-60" src={thumbnailUrl} />
            <PreviewText title={title} />
        </TransitionPreviewButton>
    )
}