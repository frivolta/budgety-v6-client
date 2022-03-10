import {createContext, ReactChild, useCallback, useEffect, useMemo, useState} from "react";
import {expenses as apiExpenses} from "../../data-structures/data/expenses/expenses";
import {Transaction} from "../../data-structures/definitions/transactions";
import {incomes as apiIncomes} from "../../data-structures/data/incomes/incomes";
import {savings as apiSavings} from "../../data-structures/data/savings/savings";
import {compose, curry} from "ramda";
import {filterByCategoryIds, getMonthlyTransactions, orderByDate} from "../../utils/helpers/transactions/filters";

export const useTransactionEntries = (date: Date) => {
    const [transactions, setTransaction] = useState<Transaction[]>([])
    const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([])
    const fakeApi = [...apiExpenses, ...apiIncomes, ...apiSavings]

    // Clear filters and reset filtered transactions to original transactions
    const resetFilters = useCallback(() =>
        compose(setFilteredTransactions)(transactions), [transactions])

    // Set filtered transactions to only the one selected
    const applyFilterByCategoriesIds = useCallback((categoryIds: number[]) =>
            compose(setFilteredTransactions, filterByCategoryIds(filteredTransactions))(categoryIds),
        [transactions, filteredTransactions])


    useEffect(() => {
        if (date) {
            setTransaction(orderByDate(getMonthlyTransactions(date, fakeApi)))
            setFilteredTransactions(orderByDate(getMonthlyTransactions(date, fakeApi)))
        }
    }, [date])


    return {applyFilterByCategoriesIds, resetFilters, filteredTransactions}
}