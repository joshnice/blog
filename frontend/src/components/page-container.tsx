import { PropsWithChildren } from "react";
import { Footer } from "./footer";

export const PageContainer = (props: PropsWithChildren) => (
    <div className="flex flex-col justify-between flex-grow w-11/12 sm:w-10/12 max-w-[1000px]">
        {props.children}
        <Footer /> 
    </div>
)