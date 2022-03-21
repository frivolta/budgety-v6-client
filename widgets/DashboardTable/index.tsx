import {FC} from "react";
import {DashboardTableProps} from "./interface";
import {useBudgetTable} from "../MonthlyBudget/components/BudgetTable/hooks/useBudgetTable/useBudgetTable";
import {
    useBudgetTableColumns
} from "../MonthlyBudget/components/BudgetTable/hooks/useBudgetTableColumns/useBudgetTableColumns";
import {Col, Row, Table, Typography} from "antd";

export const DashboardTable: FC<DashboardTableProps> = ({budget, title, helper, budgetDataType, columns}) => {
    const {datasource} = useBudgetTable({budget, budgetDataType})
    const {columns: mappedColumns} = useBudgetTableColumns(columns)

    return (
        <>
            <Row style={{width: "100%", marginTop: 16}}>
                <Col span={24}>
                    <Typography.Title level={5}>{title}</Typography.Title>
                    <Typography.Text type="secondary">{helper}</Typography.Text>
                </Col>
            </Row>
            <Row style={{width: "100%", marginTop: 24}}>
                <Table
                    columns={mappedColumns}
                    dataSource={datasource}
                    pagination={false}
                    style={{width: "100%"}}
                />
            </Row>
        </>
    )
}