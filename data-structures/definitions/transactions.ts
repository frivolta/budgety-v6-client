import {Expense} from "./expense";
import {Saving} from "./saving";
import {Income} from "./income";

export type Transaction = Expense | Saving | Income

export enum TransactionType {
    expense = "expense",
    income = "income",
    saving = "saving",
}