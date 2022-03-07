import {useEffect, useState} from "react";
import {Expense} from "../data-structures/definitions/expense";
import {expenses as apiExpenses} from "../data-structures/data/expenses/expenses";
import {endOfMonth, isAfter, isBefore, startOfMonth, toDate} from "date-fns";
import {convertToDate} from "../utils/helpers/dates";

const getMonthlyExpenses = (date: Date) => apiExpenses.filter(expense =>
    isAfter(convertToDate(expense.date), startOfMonth(date))
    && isBefore(convertToDate(expense.date), endOfMonth(date)))


export const useTransactionsExpenses = (date: Date) =>{
    const [expenses, setExpenses] = useState<Expense[]>([])
    useEffect(()=>{
        if(date) setExpenses(getMonthlyExpenses(date))
    },[date])

    return {expenses}
}