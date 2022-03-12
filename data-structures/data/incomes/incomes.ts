import {Expense} from "../../definitions/expense";
import {expenseCategories} from "../expense_categories/expense_categories";
import {TransactionType} from "../../definitions/transactions";
import {Income} from "../../definitions/income";
import {incomeCategories} from "../income_categories/income_categories";

export const incomes: Income[] = new Array(50).fill(null).map((_,i)=>({
    id: i*993,
    transactionType: TransactionType.income,
    createdAt: "23/02/2022",
    updatedAt: "23/02/2022",
    date: `${Math.floor(Math.random()*30).toString()}/${Math.floor(Math.random()*4).toString()}/2022`,
    category: incomeCategories[18],
    amount: 50,
    description: "Gas fuel"
}))
