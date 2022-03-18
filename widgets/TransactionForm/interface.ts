import {Transaction, TransactionType} from "../../data-structures/definitions/transactions";
import {CategoryType} from "../../data-structures/definitions/categories";
import {Moment} from "moment";

export interface TransactionFormProps{
    transaction: Transaction|null;
}

export interface TransactionFormFields{
    id: number | null;
    transactionType: TransactionType | null;
    category: number | null;
    amount: number;
    description: string;
    date: Date | string | Moment | null;
}