import {useEffect, useState} from "react";
import {UseBudgetTable} from "./interface";
import {compose} from "ramda";
import {Category_WithBudget, Category_WithGoal} from "../../../../../../data-structures/definitions/categories";


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
})

const withBudgetRow = (cat: Category_WithBudget<any, any>) => ({
    ...cat,
    budget: cat.budget,
    budgetLeft: cat.budget - cat.currentAmount
})

const withSavingRow = (cat: Category_WithGoal<any, any>) => ({
    ...cat,
    goal: cat.goal,
    currentAmount: cat.currentAmount
})

export const useBudgetTable = ({budget, budgetDataType}: UseBudgetTable) => {
    const [datasource, setDatasource] = useState<any>(null)
    useEffect(() => {
        if (budget && budgetDataType) {
            const entriesToMap = budget[dataTypeToKey()[budgetDataType]]
            setDatasource(budgetToRows(entriesToMap))
        }
    }, [budget, budgetDataType])

    return {datasource}
}