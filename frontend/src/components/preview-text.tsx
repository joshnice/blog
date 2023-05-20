export const PreviewText = ({ title, description, date }: { title: string, description: string, date: string }) => (
    <div className="flex justify-start items-start flex-col gap-3">
        <h4 className="text-white text-4xl">{title}</h4>
        <p className="text-white text-start text-lg">{description}</p>
        <p className="text-white">{date}</p>
    </div>
);
