import {Category_Expense, Category_Saving} from "./categories";

export interface Saving{
    id: number;
    createdAt: string;
    updatedAt: string;
    category: Category_Saving;
    amount: number;
    description: string;
    date: string;
}