import React, {FC} from "react";
import {CategoryCardProps} from "./interface";
import { Card, Col, Row, Space, Typography} from "antd";
import iconComponentFactory from "../../../../components/Factories/iconComponentFactory";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

const CategoryCard: FC<CategoryCardProps> = ({category, enqueue, dequeue, peek, handleEditCategory}) => {
    const onEditClick = () => handleEditCategory(category);

    return (
        <Card
            hoverable
            className="category-card"
            onMouseEnter={() => enqueue(category.id)}
            onMouseLeave={() => dequeue()}
            style={{maxWidth: 300, width: "100%", marginTop: 16, borderRadius: 8}}
            bordered
            onClick={onEditClick}
        >
            <Row justify="start" align="middle" gutter={24}>
                <Col>
                    {
                        iconComponentFactory(category.icon,
                            {
                                style: {
                                    backgroundColor: category.color,
                                    color: "#fff",
                                    fontSize: 24,
                                    padding: 8,
                                    borderRadius: 8
                                }
                            })
                    }
                </Col>
                <Col>
                    <Typography.Text type="secondary">{category.category_name}</Typography.Text>
                </Col>
            </Row>
            {peek() === category.id ?
                <Space className="category-badges">
                    <DeleteOutlined className="category-badge" style={{
                        padding: 4,
                        borderRadius: 16,
                        backgroundColor: "#f5222d",
                        color: "#fff"
                    }}/>
                    <EditOutlined className="category-badge" style={{
                        padding: 4,
                        borderRadius: 16,
                        backgroundColor: "#04f",
                        color: "#fff"
                    }}
                                  onClick={onEditClick}
                    />
                </Space> : null}
        </Card>
    )
}

export default CategoryCard