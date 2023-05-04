interface BlogImageProps {
    imgUrl: string;
    alt: string;
    caption?: string;
}

export const BlogImageComponent = ({ imgUrl, alt, caption }: BlogImageProps) => (
    <div>
        <img src={imgUrl} alt={alt} />
        {caption && (<p>{caption}</p>)}
    </div>
) 