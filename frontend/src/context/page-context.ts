import { createContext } from "react";
import { menuPage } from "../constants-and-types/constants";

export class PreviousPageClass {

    constructor(initialPage: string) {
        this.previousPath = initialPage;
    }

    public previousPath: string;

    public setPreviousPath(path: string): void {
        if (path !== menuPage.path) {
            this.previousPath = path;            
        }
    }

}

export const PreviousPageContext = createContext<PreviousPageClass | null>(null);
