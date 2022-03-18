import {FC} from "react";
import {ActionsCellProps} from "./interface";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Button, Space} from "antd";

export const ActionsCell: FC<ActionsCellProps> = ({editAction, deleteAction}) => {
    return (
        <Space>
            <Button
                icon={<EditOutlined/>}
                onClick={editAction}
            />
            <Button
                icon={<DeleteOutlined/>}
                onClick={deleteAction}
            />
        </Space>)
}