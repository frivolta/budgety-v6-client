import {ReactNode} from "react";

export interface PageLayoutProps{
    children: ReactNode;
    title: string;
    subtitle?: string;
}