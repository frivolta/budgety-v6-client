import {MonthlyBudget} from "../../data-structures/definitions/monthlyBudget";

export type BudgetDataType = "expenses" | "incomes" | "savings"
export type Column = MonthlyBudgetColumn

export interface DashboardTableProps {
    budget: MonthlyBudget;
    budgetDataType: BudgetDataType;
    columns: Column[];
    title: string;
    helper?: string;
}

export interface MonthlyBudgetColumn {
    title: string;
    dataIndex: string;
    key: string | number;
    width?: string;
    editable?: boolean;
    render?: any;
}