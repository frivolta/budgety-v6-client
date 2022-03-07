import React, {FC} from "react";
import {LayoutRow} from "../../components/LayoutRow";
import {useTransactionTableDatasource} from "./hooks/useTransactionTableDatasource";
import {Table} from "antd";
import {transactionColumns} from "./columns";
import {TransactionsTableProps} from "./interfaces";

export const TransactionsTable: FC<TransactionsTableProps> = ({transactions}) => {
    const {datasource} = useTransactionTableDatasource(transactions)

    return (
        <LayoutRow>
            <Table dataSource={datasource} columns={transactionColumns} style={{width: "100%"}} pagination={false}/>
        </LayoutRow>
    )
}