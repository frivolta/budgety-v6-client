import {CategoryType, CategoryTypesById} from "../../data-structures/definitions/categories";
import {Col, Row, Select} from "antd";
import {FC} from "react";
import {useTransactionEntries} from "../../hooks/useTransactionEntries";

interface CategoriesFilterProps {
    categories: CategoryTypesById
}

const getValues = (cs: CategoryTypesById)=>Object.keys(cs).map(c=>({
    value: cs[c]["id"],
    label: cs[c]["category_name"]
}))

export const CategoriesFilter:FC<CategoriesFilterProps> = ({categories}) => {
    const {applyFilterByCategoriesIds} = useTransactionEntries()
    const onChange = (value)=>{
        applyFilterByCategoriesIds(value)
    }
    return (
        <Row className="site-layout-background" style={{padding: 8, marginTop: 16}}>
            <Col span={24}>
                <Select style={{width: 300}} mode={"multiple"} onChange={onChange}>
                    {getValues(categories).map(c=> <Select.Option value={c.value} key={c.value}>{c.label}</Select.Option>)}
                </Select>
            </Col>
        </Row>
    )
}