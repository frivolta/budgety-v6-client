import {useEffect, useState} from "react";
import {Datasource, UseBudgetTable} from "./interface";
import {Category_WithBudget} from "../../../../../../data-structures/definitions/categories";
import {Expense} from "../../../../../../data-structures/definitions/expense";
import {Income} from "../../../../../../data-structures/definitions/income";
import {Saving} from "../../../../../../data-structures/definitions/saving";


const dataTypeToKey = () => ({
    expenses: "expenseCategories",
    incomes: "incomeCategories",
    saving: "savingCategories"
})

const budgetToRows = (budgetCategories: Category_WithBudget<any, Expense[]|Income[]|Saving[]>[])=>{
    return budgetCategories.map(cat=>({
        key: cat.id,
        category: cat.category,
        budget: cat.budget,
        budgetLeft: cat.budget-cat.currentAmount
    }))
}

export const useBudgetTable = ({budget, budgetDataType}: UseBudgetTable) => {
    const [datasource, setDatasource] = useState<null|Datasource>(null)
    useEffect(() => {
        if(budget && budgetDataType) {
            const entriesToMap = budget[dataTypeToKey()[budgetDataType]]
            setDatasource(budgetToRows(entriesToMap))
        }
    }, [budget,budgetDataType])

    return {datasource}
}