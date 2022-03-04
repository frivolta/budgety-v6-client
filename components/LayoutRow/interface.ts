import {ReactNode} from "react";
import {RowProps} from "antd";

export interface LayoutRowProps extends RowProps{
    children: ReactNode
}