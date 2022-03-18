import {CategoryTypesById} from "../../data-structures/definitions/categories";
import {Col, Row, Select, Typography} from "antd";
import {FC} from "react";
import {useTransactionEntries} from "../../hooks/useTransactionEntries";
import {pipe, replace, toLower, toUpper} from "ramda";
import {TransactionType} from "../../data-structures/definitions/transactions";

interface CategoriesFilterProps {
    categories: CategoryTypesById
}

const getCategoriesValues = (cs: CategoryTypesById) => Object.keys(cs).map(c => ({
    value: cs[c]["id"],
    label: cs[c]["category_name"]
}))

const getCategoryTypesValues = (cts: TransactionType[]) => cts.map(ct => ({
    value: ct,
    label: pipe(toLower, replace(/^./, toUpper))(ct),
}))

export const CategoriesFilter: FC<CategoriesFilterProps> = ({categories}) => {
    const {applyFilterByCategoriesIds} = useTransactionEntries()
    const onCategoryFilterChange = (value) => {
        applyFilterByCategoriesIds(value)
    }
    return (
        <Row className="site-layout-background" style={{padding: 16, marginTop: 16}}>
            <Col span={24}>
                <Typography.Text strong style={{marginRight: 8}}>Show Categories: </Typography.Text>
                <Select style={{width: 300}} mode={"multiple"} onChange={onCategoryFilterChange}>
                    {getCategoriesValues(categories).map(c => <Select.Option value={c.value}
                                                                             key={c.value}>{c.label}</Select.Option>)}
                </Select>
            </Col>
        </Row>
    )
}