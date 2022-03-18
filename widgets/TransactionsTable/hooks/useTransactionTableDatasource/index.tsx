import {Transaction} from "../../../../data-structures/definitions/transactions";
import {useEffect, useState} from "react";
import {Datasource} from "./interface";
import {DeleteAction, EditAction} from "../../components/ActionsCell/interface";

const transactionsToRowBuilder = (transactions: Transaction[], editAction: EditAction, deleteAction:DeleteAction): Datasource => transactions.map(tran => ({
    date: tran.date,
    key: tran.id,
    category: tran.category,
    description: tran.description,
    amount: tran.amount,
    actions: {
        editAction: () => editAction(tran),
        deleteAction: () => deleteAction(tran)
    }
}))


export const useTransactionTableDatasource = (transactions: Transaction[], editAction: EditAction, deleteAction: DeleteAction) => {
    const [datasource, setDatasource] = useState<Datasource | null>(null)

    useEffect(() => {
        if (transactions) setDatasource(transactionsToRowBuilder(transactions, editAction, deleteAction))
    }, [transactions])

    return {datasource}
}

