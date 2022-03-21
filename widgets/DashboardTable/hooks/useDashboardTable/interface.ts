import {MonthlyBudget} from "../../../../data-structures/definitions/monthlyBudget";
import {Category_WithBudget, Category_WithGoal} from "../../../../data-structures/definitions/categories";

export interface UseDashboardTable {
    budget: MonthlyBudget;
    budgetDataType: "expenses" | "incomes" | "savings"
}

export type Datasource = { amount: number, category: any, key: any, budget: number }[]

export type BudgetCategory = Category_WithBudget<any, any> | Category_WithGoal<any, any>