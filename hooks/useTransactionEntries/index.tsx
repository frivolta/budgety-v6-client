import {createContext, useCallback, useContext, useEffect, useState} from "react";
import {expenses as apiExpenses} from "../../data-structures/data/expenses/expenses";
import {Transaction} from "../../data-structures/definitions/transactions";
import {incomes as apiIncomes} from "../../data-structures/data/incomes/incomes";
import {savings as apiSavings} from "../../data-structures/data/savings/savings";
import {compose} from "ramda";
import {
    applyTransactionsToFilter,
    filterByCategoryIds,
    getFilteredTransactionsIds,
    getMonthlyTransactions,
    getTransactionIds,
    getTransactionsByIds,
    orderByDate
} from "../../utils/helpers/transactions/filters";
import {ProviderProps, State, TransactionFilters, TransactionFilterTypes} from "./interface";

const initialState: State = {
    filteredTransactions: [],
    applyFilterByCategoriesIds: () => console.warn("not in hook"),
    resetFilters: () => console.warn("not in hook"),
    setDate: () => console.warn("not in hook"),
}

const initialFilters: TransactionFilters = {
    [TransactionFilterTypes.CATEGORY]: null,
    [TransactionFilterTypes.DATE]: null
}

const TransactionEntriesContext = createContext<State>(initialState)

const TransactionEntriesProvider = ({children}: ProviderProps) => {
    const [date, setDate] = useState<Date>(new Date())
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([])
    const [filters, setFilters] = useState<TransactionFilters>(initialFilters)
    const fakeApi = [...apiExpenses, ...apiIncomes, ...apiSavings]

    // Curried apply transactions to any filter
    const applyTransactionsToCategoryFilter = applyTransactionsToFilter(TransactionFilterTypes.CATEGORY)(filters);
    const applyTransactionsToDateFilter = applyTransactionsToFilter(TransactionFilterTypes.DATE)(filters);

    // Category Filter
    const applyFilterByCategoriesIds = useCallback((categoryIds: number[]) => {
        const updatedFilters = compose(applyTransactionsToCategoryFilter, getTransactionIds)(filterByCategoryIds(transactions, categoryIds))
        const filteredTransactions = compose(getTransactionsByIds(transactions), getFilteredTransactionsIds)(updatedFilters)
        setFilters(updatedFilters)
        setFilteredTransactions(filteredTransactions)
    }, [setFilters, setFilteredTransactions, applyTransactionsToCategoryFilter])

    // Init state
    const initTransactionsAndFilter = useCallback((date) => {
        const orederedMonthlyTransactions = orderByDate(getMonthlyTransactions(date, fakeApi))
        const transactionsIds = getTransactionIds(orederedMonthlyTransactions)
        setFilters({ [TransactionFilterTypes.CATEGORY]: [...transactionsIds], [TransactionFilterTypes.DATE]:[...transactionsIds]})
        setTransactions(orederedMonthlyTransactions)
        setFilteredTransactions(orederedMonthlyTransactions)
    }, [date])

    const resetFilters = () => {
    }

    // When a new date is received
    useEffect(() => {
        if (date) initTransactionsAndFilter(date)
    }, [date])


    return (
        <TransactionEntriesContext.Provider
            value={{applyFilterByCategoriesIds, resetFilters, filteredTransactions, setDate}}>
            {children}
        </TransactionEntriesContext.Provider>)
}

const useTransactionEntries = () => useContext(TransactionEntriesContext)

export {useTransactionEntries, TransactionEntriesProvider}