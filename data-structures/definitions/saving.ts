import {Category_Saving} from "./categories";
import {TransactionType} from "./transactions";

export interface Saving{
    id: number;
    transactionType: TransactionType.saving;
    createdAt: string;
    updatedAt: string;
    category: Category_Saving;
    amount: number;
    description: string;
    date: string;
}