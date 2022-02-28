import React, {FC, useState} from "react";
import {CategoryCardsProps} from "./interface";
import {Col, Row} from "antd";
import CategoryCard from "./components/CategoryCard";
import EmptyCategoryCard from "./components/EmptyCategoryCard";

const CategoryCards: FC<CategoryCardsProps> = ({categories, handleEditCategory}) => {
    const [hoverIndexQueue, setHoverIndexQueue] = useState<number[]>([])

    const enqueue = (index: number) => setHoverIndexQueue(prev => prev ? [index, ...prev] : [index])
    const dequeue = () => setHoverIndexQueue(prev => [...prev.slice(0, hoverIndexQueue.length - 2)])
    const peek = () => hoverIndexQueue[hoverIndexQueue.length - 1]

    return (
        <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, 24]}>
            <Col span={4}>
                <EmptyCategoryCard handleCreateCategory={handleEditCategory}/>
            </Col>
            {Object.values(categories).map(category => (
                <Col span={4} key={category.id}>
                    <CategoryCard
                        handleEditCategory={handleEditCategory}
                        category={category}
                        enqueue={enqueue}
                        dequeue={dequeue}
                        peek={peek}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default CategoryCards