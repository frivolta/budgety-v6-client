import {Expense} from "../../definitions/expense";
import {expenseCategories} from "../expense_categories/expense_categories";
import {TransactionType} from "../../definitions/transactions";
import {Saving} from "../../definitions/saving";
import {savingCategories} from "../saving_categories/saving_categories";

export const savings: Saving[] = new Array(50).fill(null).map(()=>({
    id: 1,
    transactionType: TransactionType.saving,
    createdAt: "23/02/2022",
    updatedAt: "23/02/2022",
    date: `${Math.floor(Math.random()*30).toString()}/${Math.floor(Math.random()*4).toString()}/2022`,
    category: savingCategories[1],
    amount: 50,
    description: "Gas fuel"
}))
