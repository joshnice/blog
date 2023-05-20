import { PostList } from "@joshnice/types"
import { TransitionPreviewButton } from "./preview-button-transition";
import { PreviewText } from "./preview-text";
import { ImageComponent } from "./image";

interface BlogSmallPreviewProps extends PostList {
    index: number;
    onBlogClicked: (id: string) => void;
};

export const BlogPreviewComponent = ({ thumbnailUrl, title, onBlogClicked, id, index}: BlogSmallPreviewProps) => {
    return (
        <TransitionPreviewButton className="flex gap-4 max-w-[1000px] h-[250px] w-full p-3 lg:p-0" onClick={() => onBlogClicked(id)}>
            <ImageComponent className="w-full h-full hidden lg:block" src={thumbnailUrl}/>
            <PreviewText title={title} description="Let's clear up some misconceptions surrounding EU privacy laws and look at why your privacy-friendly analytics is probably violating them." date="2 January" />
        </TransitionPreviewButton>
    )
}