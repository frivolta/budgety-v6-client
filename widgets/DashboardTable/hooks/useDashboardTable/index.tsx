import {compose} from "ramda";
import {Category_WithBudget, Category_WithGoal} from "../../../../data-structures/definitions/categories";
import {useEffect, useState} from "react";
import {Datasource, UseDashboardTable} from "./interface";

const dataTypeToKey = () => ({
    expenses: "expenseCategories",
    incomes: "incomeCategories",
    savings: "savingCategories"
})

// Rows builder
const budgetToRows = (budgetCategories: any) => budgetCategories.map(buildBudgetToRow);

// Row bulilder
const buildBudgetToRow = (cat: any) => cat.budget
    ? compose(withBudgetRow, withDefaultValues)(cat)
    : compose(withSavingRow, withDefaultValues)(cat)

const withDefaultValues: any = (cat: Category_WithBudget<any, any> | Category_WithGoal<any, any>) => ({
    ...cat,
    key: cat.id,
    category: cat.category,
    currentAmount: cat.currentAmount
})

const withBudgetRow = (cat: Category_WithBudget<any, any>) => ({
    ...cat,
    budget: cat.budget,
})

const withSavingRow = (cat: Category_WithGoal<any, any>) => ({
    ...cat,
    goal: cat.goal,
})

export const useDashboardTable = ({budget, budgetDataType}: UseDashboardTable) => {
    const [datasource, setDatasource] = useState<null | Datasource>(null)
    useEffect(() => {
        if (budget && budgetDataType) {
            const entriesToMap = budget[dataTypeToKey()[budgetDataType]]
            setDatasource(budgetToRows(entriesToMap))
        }
    }, [budget, budgetDataType])

    return {datasource}
}