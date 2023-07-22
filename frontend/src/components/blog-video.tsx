export const BlogVideoComponent = ({ embedId }: { embedId: string }) => (
    <div className="flex items-center justify-center h-[500px] w-full">
        <iframe 
            className="w-4/5 h-full"
            src={`https://www.youtube.com/embed/${embedId}`} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen 
        />
    </div>
);