export const PreviewText = ({ title, description, date }: { title: string, description: string, date: string }) => (
    <div className="flex justify-start items-start flex-col gap-3 h-full">
        <h4 className="text-white text-3xl text-start">{title}</h4>
        <p className="text-white text-start text-lg">{description}</p>
        <div className="flex flex-1 items-end mb-1"><p className="text-white">{date}</p></div>
    </div>
);
