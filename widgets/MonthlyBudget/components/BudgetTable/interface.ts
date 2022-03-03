import {MonthlyBudget} from "../../../../data-structures/definitions/monthlyBudget";
import {ExpenseColumn} from "./columns";

export type BudgetDataType = "expenses" | "incomes" | "savings"
export type Column = ExpenseColumn

export interface BudgetTableProps {
    budget: MonthlyBudget;
    budgetDataType: BudgetDataType;
    columns: Column[]
}

export interface BudgetRecordDataType {
    budgetLeft: number,
    category: any,
    key: any,
    budget: number
}