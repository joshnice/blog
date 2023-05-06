import { ComponentProps, useState }  from "react";

export const ImageComponent = (props: ComponentProps<"img">) => {
    const [loading, setLoading] = useState(true);
    return (
        <>
            {loading && <img className={`${props.className} bg-slate-50 animate-pulse`} /> }
            <img {...props} className={`${props.className} ${loading ? "hidden": "block"}`} onLoad={() => setLoading(false)} />
        </>
    )
}