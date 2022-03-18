import {Transaction, TransactionType} from "../../../../data-structures/definitions/transactions";
import {useEffect, useMemo, useState} from "react";
import {State} from "./interface";
import {compose, curry} from "ramda";

const initialState: State = {
    expenses: {
        total: 0,
        relative: 0,
    },
    incomes: {
        total: 0,
        relative: 0,
    },
    savings: {
        total: 0,
        relative: 0,
    },
}

// Get all the transactions by type
const transactionsByType = curry((type: TransactionType, transactions: Transaction[]) => transactions.filter(t => t.transactionType === type));

// Defining types
const expensesByType = transactionsByType(TransactionType.expense)
const incomeByType = transactionsByType(TransactionType.income)
const savingByType = transactionsByType(TransactionType.saving)

const getTotalSum = (ts: Transaction[]) => ts.reduce<number>((tot, t) => tot + t.amount, 0)

export const useTransactionStatistics = (transactions: Transaction[], filteredTransactions: Transaction[]) => {
    const [statistics, setStatistics] = useState({...initialState})

    const createState = () => {
        setStatistics({
            expenses: {
                relative: compose(getTotalSum, expensesByType)(filteredTransactions),
                total: compose(getTotalSum, expensesByType)(transactions)
            },
            incomes: {
                relative: compose(getTotalSum, incomeByType)(filteredTransactions),
                total: compose(getTotalSum, incomeByType)(transactions)
            },
            savings: {
                relative: compose(getTotalSum, savingByType)(filteredTransactions),
                total: compose(getTotalSum, savingByType)(transactions)
            },
        })
    }

    useEffect(() => {
        createState()
    }, [JSON.stringify(transactions), JSON.stringify(filteredTransactions)])

    const {expenses, incomes, savings} = useMemo(() => statistics, [JSON.stringify(statistics)])
    
    return {expenses, incomes, savings}
}