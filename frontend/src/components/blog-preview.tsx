import { PostList } from "@joshnice/types"
import { TransitionPreviewButton } from "./preview-button-transition";
import { PreviewText } from "./preview-text";
import { ImageComponent } from "./image";

interface BlogSmallPreviewProps extends PostList {
    columnStart: number;
    columnEnd: number;
    onBlogClicked: (id: string) => void;
};

export const BlogPreviewComponent = ({columnStart, columnEnd, thumbnailUrl, title, onBlogClicked, id}: BlogSmallPreviewProps) => {
    console.log(title, columnStart, columnEnd)
    return (
        <TransitionPreviewButton className={`col-start-${columnStart} col-end-${columnEnd}`} onClick={() => onBlogClicked(id)}>
            <ImageComponent className="block w-full h-full" src={thumbnailUrl}/>
            <PreviewText title={title} />
        </TransitionPreviewButton>
    )
}