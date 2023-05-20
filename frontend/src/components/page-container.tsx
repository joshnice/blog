import { ComponentProps, PropsWithChildren } from "react";

export const PageContainer = (props: PropsWithChildren<ComponentProps<"div">>) => (
    <div {...props} className={`${props.className} w-11/12 sm:w-10/12 md:w-2/3 max-w-[1000px]`} >
        {props.children}
    </div>
)