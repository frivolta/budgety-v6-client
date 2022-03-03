import {MonthlyBudget} from "../../definitions/monthlyBudget";
import {expenseCategories} from "../expense_categories/expense_categories";
import {savingCategories} from "../saving_categories/saving_categories";
import {expenses} from "../expenses/expenses";
import {savings} from "../savings";
import {incomeCategories} from "../income_categories/income_categories";

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
            items: [expenses[0]],
        },
        {
            id: 2,
            category: expenseCategories[2],
            budget: 100,
            currentAmount: 0,
            items: [expenses[0]],
        },
        {
            id: 3,
            category: expenseCategories[3],
            budget: 100,
            currentAmount: 0,
            items: [expenses[0]],
        },
        {
            id: 4,
            category: expenseCategories[4],
            budget: 100,
            currentAmount: 0,
            items: [expenses[0]],
        },
        {
            id: 5,
            category: expenseCategories[5],
            budget: 100,
            currentAmount: 0,
            items: [expenses[0]],
        },
        {
            id: 6,
            category: expenseCategories[6],
            budget: 100,
            currentAmount: 0,
            items: [expenses[0]],
        },
        {
            id: 7,
            category: expenseCategories[7],
            budget: 100,
            currentAmount: 0,
            items: [expenses[0]],
        },
        {
            id: 8,
            category: expenseCategories[8],
            budget: 100,
            currentAmount: 0,
            items: [expenses[0]],
        },
        {
            id: 9,
            category: expenseCategories[9],
            budget: 100,
            currentAmount: 0,
            items: [expenses[0]],
        },
        {
            id: 10,
            category: expenseCategories[10],
            budget: 100,
            currentAmount: 0,
            items: [expenses[0]],
        },
        {
            id: 11,
            category: expenseCategories[11],
            budget: 100,
            currentAmount: 0,
            items: [expenses[0]],
        },
        {
            id: 12,
            category: expenseCategories[12],
            budget: 100,
            currentAmount: 0,
            items: [expenses[0]],
        },
        {
            id: 13,
            category: expenseCategories[13],
            budget: 100,
            currentAmount: 0,
            items: [expenses[0]],
        },
        {
            id: 14,
            category: expenseCategories[14],
            budget: 100,
            currentAmount: 0,
            items: [expenses[0]],
        },
        {
            id: 15,
            category: expenseCategories[15],
            budget: 100,
            currentAmount: 0,
            items: [expenses[0]],
        },
        {
            id: 16,
            category: expenseCategories[16],
            budget: 100,
            currentAmount: 0,
            items: [expenses[0]],
        },
        {
            id: 17,
            category: expenseCategories[17],
            budget: 100,
            currentAmount: 0,
            items: [expenses[0]],
        },

    ],
    savingCategories: [
        {
            id: 1,
            category: savingCategories[1],
            goal: 50,
            currentAmount: 0,
            items: [savings[0]]
        },
        {
            id: 2,
            category: savingCategories[2],
            goal: 50,
            currentAmount: 0,
            items: [savings[0]]
        },
        {
            id: 3,
            category: savingCategories[3],
            goal: 50,
            currentAmount: 0,
            items: [savings[0]]
        },
        {
            id: 4,
            category: savingCategories[4],
            goal: 50,
            currentAmount: 0,
            items: [savings[0]]
        },
        {
            id: 5,
            category: savingCategories[5],
            goal: 50,
            currentAmount: 0,
            items: [savings[0]]
        }
    ],
    incomeCategories: [
        {
            id: 1,
            category: incomeCategories[1],
            goal: 50,
            currentAmount: 0,
            items: []
        },
        {
            id: 2,
            category: incomeCategories[2],
            goal: 50,
            currentAmount: 0,
            items: []
        },
        {
            id: 3,
            category: incomeCategories[3],
            goal: 50,
            currentAmount: 0,
            items: []
        },
        {
            id: 4,
            category: incomeCategories[4],
            goal: 50,
            currentAmount: 0,
            items: []
        }
    ]
}