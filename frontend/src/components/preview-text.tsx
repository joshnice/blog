export const PreviewText = ({ title }: { title: string }) => (
    <div className="absolute bottom-0 h-10 w-full bg-slate-500/70 flex justify-start items-center">
        <p className="absolute text-white pl-1">{title}</p>
    </div>
);
