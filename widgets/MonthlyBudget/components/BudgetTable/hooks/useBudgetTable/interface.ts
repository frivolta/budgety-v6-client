import {MonthlyBudget} from "../../../../../../data-structures/definitions/monthlyBudget";

export interface UseBudgetTable{
    budget:MonthlyBudget;
    budgetDataType: "expenses" | "incomes" | "savings"
}

export type Datasource = {budgetLeft: number, category: any, key: any, budget: number}[]