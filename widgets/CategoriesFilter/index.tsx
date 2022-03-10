import {CategoryType, CategoryTypesById} from "../../data-structures/definitions/categories";
import {Col, Row, Select} from "antd";
import {FC} from "react";

interface CategoriesFilterProps {
    categories: CategoryTypesById
}

const getValues = (cs: CategoryTypesById)=>Object.keys(cs).map(c=>({
    value: cs[c]["id"],
    label: cs[c]["category_name"]
}))

export const CategoriesFilter:FC<CategoriesFilterProps> = ({categories}) => {

    return (
        <Row className="site-layout-background" style={{padding: 8, marginTop: 16}}>
            <Col span={24}>
                <Select style={{width: 300}}>
                    <Select.Option value={1}> TEst</Select.Option>
                </Select>
            </Col>
        </Row>
    )
}