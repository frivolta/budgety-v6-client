import {MonthlyBudget} from "../../definitions/monthlyBudget";
import {expenseCategories} from "../expense_categories/expense_categories";
import {savingCategories} from "../saving_categories/saving_categories";
import {expenses} from "../expenses/expenses";
import {savings} from "../savings";

export const monthlyBudget: MonthlyBudget = {
    userId:1,
    startDate: "01/02/2022",
    endDate: "28/02/2022",
    expenseCategories: [
        {
            id: 1,
            category: expenseCategories[1],
            budget: 100,
            currentAmount: 0,
            items: [expenses[0]]
        }
    ],
    savingCategories: [
        {
            id: 1,
            category: savingCategories[1],
            goal: 50,
            currentAmount: 0,
            items: [savings[0]]
        }
    ]
}