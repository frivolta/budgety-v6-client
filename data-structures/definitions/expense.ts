import {Category_Expense} from "./categories";

export interface Expense{
    id: number;
    createdAt: string;
    updatedAt: string;
    category: Category_Expense;
    amount: number;
    description: string;
    date: string;
}