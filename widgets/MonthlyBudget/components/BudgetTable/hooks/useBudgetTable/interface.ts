import {MonthlyBudget} from "../../../../../../data-structures/definitions/monthlyBudget";
import {Category_WithBudget, Category_WithGoal} from "../../../../../../data-structures/definitions/categories";
import {Expense} from "../../../../../../data-structures/definitions/expense";
import {Income} from "../../../../../../data-structures/definitions/income";
import {Saving} from "../../../../../../data-structures/definitions/saving";

export interface UseBudgetTable{
    budget:MonthlyBudget;
    budgetDataType: "expenses" | "incomes" | "savings"
}

export type Datasource = {budgetLeft: number, category: any, key: any, budget: number}[]

export type BudgetCategory = Category_WithBudget<any, any> | Category_WithGoal<any, any>