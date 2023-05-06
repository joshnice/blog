interface BlogImageProps {
    imgUrl: string;
    alt: string;
    caption?: string;
}

export const BlogImageComponent = ({ imgUrl, alt, caption }: BlogImageProps) => (
    <div className="flex flex-col items-center max-w-xl">
        <img src={imgUrl} alt={alt} />
        {caption && (<span className="text-white text-sm w-fit italic mt-1">{caption}</span>)}
    </div>
) 