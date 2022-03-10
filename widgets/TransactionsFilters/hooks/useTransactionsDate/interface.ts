import {ReactChild} from "react";

export interface State {
    date: Date;
    nextMonth: () => void;
    previousMonth: () => void
}

export interface ProviderProps {
    children: ReactChild | ReactChild[]
}