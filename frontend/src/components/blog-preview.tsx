import { PostList } from "@joshnice/types"
import { TransitionPreviewButton } from "./preview-button-transition";
import { PreviewText } from "./preview-text";
import { ImageComponent } from "./image";

interface BlogSmallPreviewProps extends PostList {
    onBlogClicked: (id: string) => void;
};

export const BlogPreviewComponent = ({ thumbnailUrl, title, onBlogClicked, id, description, date}: BlogSmallPreviewProps) => {
    return (
        <TransitionPreviewButton className="flex gap-4 max-w-[1000px] h-[250px] w-full p-3 lg:p-0" onClick={() => onBlogClicked(id)}>
            <ImageComponent className="w-full h-full hidden lg:block" src={thumbnailUrl}/>
            <PreviewText title={title} description={description} date={new Date(date).toLocaleDateString()} />
        </TransitionPreviewButton>
    )
}