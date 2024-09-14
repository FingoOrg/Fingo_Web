import { ReactNode } from "react";

export type Route = {
    path: string;
    name?: string;
    element: ReactNode
}