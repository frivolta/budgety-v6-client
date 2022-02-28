import {Currencies} from "./currencies";
import {expenseCategories} from "./expense_categories/expense_categories";
import {incomeCategories} from "./income_categories/income_categories";
import {savingCategories} from "./saving_categories/saving_categories";
import {expenses} from "./expenses/expenses";
import {savings} from "./savings";
import {monthlyBudget} from "./budget/monthlyBudget";

export const User = {
    email: "user@email.com",
    setup_complete: true,
    initial_balance: "9546",
    currency: Currencies.EUR,
    expense_categories: expenseCategories,
    income_categories: incomeCategories,
    savingCategories: savingCategories,
    incomes: [],
    expenses: expenses,
    savings: savings,
    budgets: [monthlyBudget]
}