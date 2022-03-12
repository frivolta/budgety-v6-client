import React, {FC, useEffect} from "react";
import {LayoutRow} from "../../components/LayoutRow";
import {useTransactionTableDatasource} from "./hooks/useTransactionTableDatasource";
import {Table} from "antd";
import {transactionColumns} from "./columns";
import {TransactionsTableProps} from "./interfaces";
import {useTransactionEntries} from "../../hooks/useTransactionEntries";
import {useMonthlyFilter} from "../TransactionsFilters/hooks/useTransactionsDate";

export const TransactionsTable: FC<TransactionsTableProps> = () => {
    const {date} = useMonthlyFilter()
    const {filteredTransactions, setDate} = useTransactionEntries()
    const {datasource} = useTransactionTableDatasource(filteredTransactions)
    useEffect(()=>{setDate(date)},[date])
    useEffect(()=>{console.log("transactions changed", filteredTransactions)},[filteredTransactions])

    return (
        <LayoutRow>
            <Table dataSource={datasource} columns={transactionColumns} style={{width: "100%"}} pagination={false}/>
        </LayoutRow>
    )
}