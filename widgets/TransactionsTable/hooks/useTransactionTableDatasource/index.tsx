import {Transaction} from "../../../../data-structures/definitions/transactions";
import {useEffect, useState} from "react";
import {Datasource} from "./interface";

const transactionsToRowBuilder = (transactions: Transaction[]): Datasource => transactions.map(tran => ({
    date: tran.date,
    key: tran.id,
    category: tran.category,
    description: tran.description,
    amount: tran.amount
}))


export const useTransactionTableDatasource = (transactions: Transaction[]) => {
    const [datasource, setDatasource] = useState<Datasource | null>(null)

    useEffect(() => {
        if (transactions) setDatasource(transactionsToRowBuilder(transactions))
    }, [transactions])

    return {datasource}
}