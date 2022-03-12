import {Expense} from "../../definitions/expense";
import {expenseCategories} from "../expense_categories/expense_categories";
import {TransactionType} from "../../definitions/transactions";
import {Saving} from "../../definitions/saving";
import {savingCategories} from "../saving_categories/saving_categories";

export const savings: Saving[] = new Array(50).fill(null).map((_,i)=>({
    id: i*43222,
    transactionType: TransactionType.saving,
    createdAt: "23/02/2022",
    updatedAt: "23/02/2022",
    date: `${Math.floor(Math.random()*30).toString()}/${Math.floor(Math.random()*4).toString()}/2022`,
    category: savingCategories[22],
    amount: 50,
    description: "Gas fuel"
}))
