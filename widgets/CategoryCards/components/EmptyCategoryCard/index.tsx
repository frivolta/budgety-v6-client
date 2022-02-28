import {Card, Col, Row, Typography} from "antd";
import React, {FC} from "react";
import {EmptyCategoryCardProps} from "./interface";
import {PlusCircleOutlined} from "@ant-design/icons";
import {blue,grey} from "@ant-design/colors";
const EmptyCategoryCard: FC<EmptyCategoryCardProps> = ({handleCreateCategory}) => {
    return (
        <Card
            hoverable
            className="category-card"
            style={{maxWidth: 300, width: "100%", marginTop: 16, borderRadius: 8, borderStyle: "dashed"}}
            bordered
            onClick={()=>handleCreateCategory(null)}
        >
            <Row justify="start" align="middle" gutter={24}>
                <Col>
                    <PlusCircleOutlined style={{ backgroundColor: blue[1],
                        color: "#fff",
                        fontSize: 24,
                        padding: 8,
                        borderRadius: 8}}/>
                </Col>
                <Col>
                    <Typography.Text style={{color: grey[0]}}>New Category</Typography.Text>
                </Col>
            </Row>

        </Card>
    )
}

export default  EmptyCategoryCard;