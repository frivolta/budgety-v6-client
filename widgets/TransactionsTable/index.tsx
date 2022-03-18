import React, {FC, useEffect} from "react";
import {LayoutRow} from "../../components/LayoutRow";
import {useTransactionTableDatasource} from "./hooks/useTransactionTableDatasource";
import {Col, Divider, Table} from "antd";
import {createTransactionColumns} from "./columns";
import {TransactionsTableProps} from "./interfaces";
import {useTransactionEntries} from "../../hooks/useTransactionEntries";
import {useMonthlyFilter} from "../TransactionsFilters/hooks/useTransactionsDate";
import {useTransactionsDrawer} from "../TransactionsDrawer/hooks/userTransactionsDrawer";
import {DeleteAction} from "./components/ActionsCell/interface";
import {StatisticCard} from "../TransactionsStatistics/components/StatisticCard";

export const TransactionsTable: FC<TransactionsTableProps> = () => {
    const {date} = useMonthlyFilter()
    const {filteredTransactions, setDate} = useTransactionEntries()
    const {selectAndOpenDrawer} = useTransactionsDrawer()
    const deleteAction:DeleteAction = (t) => {console.log("Deleting: ", t)}
    const {datasource} = useTransactionTableDatasource(filteredTransactions, selectAndOpenDrawer, deleteAction)
    useEffect(()=>{setDate(date)},[date])

    return (
        <LayoutRow>
            <Table dataSource={datasource} columns={createTransactionColumns} style={{width: "100%"}} pagination={false}/>
        </LayoutRow>
    )
}