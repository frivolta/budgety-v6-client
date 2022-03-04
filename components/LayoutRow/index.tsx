import {FC} from "react";
import {LayoutRowProps} from "./interface";
import {Row} from "antd";

export const LayoutRow: FC<LayoutRowProps> = ({children, ...props}) => {
    return (
        <Row className="site-layout-background" style={{padding: 16, marginTop: 16, width: "100%"}} {...props}>
            {children}
        </Row>
    )
}