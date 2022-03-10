import {TransactionType} from "../../../data-structures/definitions/transactions";
import {CategoryType} from "../../../data-structures/definitions/categories";
import {expenseCategories} from "../../../data-structures/data/expense_categories/expense_categories";
import {incomeCategories} from "../../../data-structures/data/income_categories/income_categories";
import {savingCategories} from "../../../data-structures/data/saving_categories/saving_categories";

export interface TransactionTypeSelect {
    value: TransactionType;
    label: string;
}

export const transactionTypeOptions: TransactionTypeSelect[] = [
    {
        value: TransactionType.expense,
        label: "Expense"
    },
    {
        value: TransactionType.income,
        label: "Income"
    },
    {
        value: TransactionType.saving,
        label: "Saving"
    }
]


export interface TransactionCategorySelect {
    value: CategoryType["id"];
    label: string;
}

const categoriesByTransactionType = {
    [TransactionType.expense]: expenseCategories,
    [TransactionType.income]: incomeCategories,
    [TransactionType.saving]: savingCategories,
}

export function getSelectCategoriesValues(transactionType: TransactionTypeSelect["value"])
    : TransactionCategorySelect[] {
    return Object.keys(categoriesByTransactionType[transactionType]).map((catKey) => ({
        value: categoriesByTransactionType[transactionType][catKey]["id"],
        label: categoriesByTransactionType[transactionType][catKey]["category_name"]
    }))
}