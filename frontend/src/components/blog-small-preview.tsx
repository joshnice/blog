import { PostList } from "@joshnice/types"
import { TransitionPreviewButton } from "./preview-button-transition";
import { PreviewText } from "./preview-text";

interface BlogSmallPreviewProps extends PostList {
    columnStartNumber: number;
    onBlogClicked: (id: string) => void;
};

export const BlogSmallPreviewComponent = ({columnStartNumber, thumbnailUrl, title, onBlogClicked, id}: BlogSmallPreviewProps) => {
    return (
        <TransitionPreviewButton className={`col-start-${columnStartNumber} col-end-${columnStartNumber + 1}`} onClick={() => onBlogClicked(id)}>
            <img className="block w-full h-60" src={thumbnailUrl}/>
            <PreviewText title={title} />
        </TransitionPreviewButton>
    )
}