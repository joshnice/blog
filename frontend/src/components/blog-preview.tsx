import { PostList } from "@joshnice/types"
import { TransitionPreviewButton } from "./preview-button-transition";
import { PreviewText } from "./preview-text";
import { ImageComponent } from "./image";
import { useMemo } from "react";

interface BlogSmallPreviewProps extends PostList {
    index: number;
    onBlogClicked: (id: string) => void;
};

const columnValues = [
    "col-start-1 col-end-3",
    "col-start-1 col-end-2",
    "col-start-2 col-end-3",
    "col-start-1 col-end-2",
    "col-start-2 col-end-3"
] as const;

export const BlogPreviewComponent = ({ thumbnailUrl, title, onBlogClicked, id, index}: BlogSmallPreviewProps) => {
    const gridValues = useMemo(() => columnValues[index], [index])
    return (
        <TransitionPreviewButton className={gridValues} onClick={() => onBlogClicked(id)}>
            <ImageComponent className="block w-full h-full" src={thumbnailUrl}/>
            <PreviewText title={title} />
        </TransitionPreviewButton>
    )
}