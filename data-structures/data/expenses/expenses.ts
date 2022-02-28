import {Expense} from "../../definitions/expense";
import {expenseCategories} from "../expense_categories/expense_categories";

export const expenses: Expense[] = [
    {
        id: 1,
        createdAt: "23/02/2022",
        updatedAt: "23/02/2022",
        date: "23/02/2022",
        category: expenseCategories[1],
        amount: 50,
        description: "Gas fuel"
    }
]