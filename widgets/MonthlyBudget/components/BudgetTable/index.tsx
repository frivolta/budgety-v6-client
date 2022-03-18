import {Col, Row, Table, Typography} from "antd";
import {FC} from "react";
import {BudgetTableProps} from "./interface";
import {useBudgetTable} from "./hooks/useBudgetTable/useBudgetTable";
import {EditableRow} from "./components/EditableRow";
import {EditableCell} from "./components/EditableCell";
import {useBudgetTableColumns} from "./hooks/useBudgetTableColumns/useBudgetTableColumns";

const components = {
    body: {
        row: EditableRow,
        cell: EditableCell
    }
}

export const BudgetTable: FC<BudgetTableProps> = ({budget, budgetDataType, columns, title, helper}) => {
    const {datasource} = useBudgetTable({budget, budgetDataType})
    const {columns: mappedColumns} = useBudgetTableColumns(columns)
    console.log(datasource)
    return (
        <>
        <Row style={{width: "100%", marginTop: 24}}>
            <Col span={24}>
                <Typography.Title level={5}>{title}</Typography.Title>
                <Typography.Text type="secondary">{helper}</Typography.Text>
            </Col>
        </Row>
        <Row style={{width: "100%", marginTop: 24}}>
            <Table
                rowClassName={() => "editable-row"}
                columns={mappedColumns}
                dataSource={datasource}
                pagination={false}
                components={components}
                style={{width: "100%"}}
            />
        </Row>
        </>
    )
}