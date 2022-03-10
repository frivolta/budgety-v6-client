import {Category_Expense} from "./categories";
import {TransactionType} from "./transactions";

export interface Expense{
    id: number;
    transactionType: TransactionType.expense;
    createdAt: string;
    updatedAt: string;
    category: Category_Expense;
    amount: number;
    description: string;
    date: string;
}