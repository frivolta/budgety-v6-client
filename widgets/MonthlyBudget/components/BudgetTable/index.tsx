import {Col, Row, Table} from "antd";
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

export const BudgetTable: FC<BudgetTableProps> = ({budget, budgetDataType, columns}) => {
    const {datasource} = useBudgetTable({budget, budgetDataType})
    const {columns: mappedColumns} = useBudgetTableColumns(columns)
    return (
                <Table
                    rowClassName={() => "editable-row"}
                    columns={mappedColumns}
                    dataSource={datasource}
                    pagination={false}
                    components={components}
                />
    )
}