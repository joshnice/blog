import { ComponentProps, useState }  from "react";

export const ImageComponent = (props: ComponentProps<"img">) => {
    const [loading, setLoading] = useState(true);
    // const loading = true;
    return (
        <div className={props.className}>
            {loading && <img className={"w-full h-full bg-slate-50 animate-pulse"} /> }
            <img {...props} className={`w-full h-full ${loading ? "hidden": "block"}`} onLoad={() => setLoading(false)} />
        </div>
    )
}