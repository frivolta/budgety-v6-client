import {FC} from "react";
import {AmountDisplayProps} from "./interface";
import {Tooltip, Typography} from "antd";
import {InfoCircleOutlined} from "@ant-design/icons";
import {DEFAULT_COLOR} from "../../utils/constants/StyleConstants";

export const AmountDisplay: FC<AmountDisplayProps> = ({text, amount, tooltip}) => (
    <Typography.Paragraph style={{marginBottom: 0}}>{text} <strong>{amount}</strong>
        {tooltip &&
            <Tooltip placement={"top"} title={tooltip}>
                <InfoCircleOutlined style={{color: DEFAULT_COLOR, marginLeft: 8}}/>
            </Tooltip>
        }
    </Typography.Paragraph>
)