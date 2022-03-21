import {expenses} from "../../data-structures/data/expenses/expenses";
import {incomes} from "../../data-structures/data/incomes/incomes";
import {savings} from "../../data-structures/data/savings/savings";
import {useEffect, useState} from "react";
import {Transaction, TransactionType} from "../../data-structures/definitions/transactions";
import {add, compose, converge, filter, juxt, prop, propEq, reduce, subtract} from "ramda";

const fetchAllTransactions = new Promise((resolve) => {
    setTimeout(() => {
        return resolve([...expenses, ...incomes, ...savings])
    }, 5000)
})

const sumTransactions = reduce<Transaction, number>(
    (sum, t) => add(sum, prop("amount")(t)),
    0)

// "transactionType" -> TransactionType -> Transaction
const isOfTransactionType = propEq("transactionType");

// (expenses, incomes, savings) -> (incomes+savings)-expenses
const calculateTotal = (e, i, s) => subtract(add(i, s), e)

const getIncomeTotal = compose(sumTransactions, filter(isOfTransactionType(TransactionType.income)))
const getSavingTotal = compose(sumTransactions, filter(isOfTransactionType(TransactionType.saving)))
const getExpensesTotal = compose(sumTransactions, filter(isOfTransactionType(TransactionType.expense)))

//  Transaction[] -> [(a->Transaction[]->number)...c] -> (a,b,c)-> number
const getAccountAmount = compose(converge(calculateTotal, [getExpensesTotal, getIncomeTotal, getSavingTotal]))

export const useAllTransactions = () => {
    const [apiState, setApiState] = useState({fetching: false, error: false})
    const [transactions, setTransactions] = useState([])
    const [total, setTotal] = useState(null)

    const setApiLoading = (v: boolean) => setApiState({...apiState, error: false, fetching: v})
    const setError = () => setApiState({...apiState, fetching: false, error: true})

    const fetch = () => fetchAllTransactions
        .then(juxt([compose(setTotal, getAccountAmount), setTransactions]))
        .then(() => setApiLoading(false))
        .catch(setError)

    useEffect(() => {
        setApiLoading(true)
        void fetch()
    }, [])
    
    return {transactions, apiState, total}
}