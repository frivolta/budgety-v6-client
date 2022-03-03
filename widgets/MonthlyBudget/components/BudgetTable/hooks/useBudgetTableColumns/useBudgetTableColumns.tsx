import {useEffect, useState} from "react";
import {compose} from 'ramda'
import {BudgetRecordDataType, Column} from "../../interface";

const mapLayoutToColumns = (cols: Column[]) => cols.map(mapLayoutToColumn)
const mapLayoutToColumn = (col: Column) => col.editable
    ? compose(withEditableLayout)(col)
    : compose(withNotEditableLayout)(col)

// Helpers
const withNotEditableLayout = (col: Column) => col
const withEditableLayout = (col: Column) => (
    {
        ...col,
        onCell: (record: BudgetRecordDataType) => ({
            record,
            editable: col.editable,
            title: col.title,
            dataIndex: col.dataIndex
        })
    }
)


export const useBudgetTableColumns = (columnsLayout: Column[]) => {
    const [columns, setColumns] = useState([])

    useEffect(() => {
        if (columnsLayout) {
            setColumns(mapLayoutToColumns(columnsLayout))
        }
    }, [columnsLayout])
    return {columns}
}