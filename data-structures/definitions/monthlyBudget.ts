import {Category_Expense, Category_Income, Category_Saving, Category_WithBudget, Category_WithGoal} from "./categories";
import {Expense} from "./expense";
import {Saving} from "./saving";


export interface MonthlyBudget {
    userId: number;
    startDate: string;
    endDate: string;
    expenseCategories: Category_WithBudget<Category_Expense, Expense>[];
    savingCategories: Category_WithGoal<Category_Saving, Saving>[];
    incomeCategories: Category_WithGoal<Category_Income, Saving>[];
}