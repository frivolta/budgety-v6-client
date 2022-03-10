import { Category_Income} from "./categories";
import {TransactionType} from "./transactions";

export interface Income{
    id: number;
    transactionType: TransactionType.income;
    createdAt: string;
    updatedAt: string;
    category: Category_Income;
    amount: number;
    description: string;
    date: string;
}