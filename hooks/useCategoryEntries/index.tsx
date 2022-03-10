import {useEffect, useState} from "react";
import {expenseCategories} from "../../data-structures/data/expense_categories/expense_categories";
import {incomeCategories} from "../../data-structures/data/income_categories/income_categories";
import {savingCategories} from "../../data-structures/data/saving_categories/saving_categories";
import {CategoryTypesById} from "../../data-structures/definitions/categories";

export const useCategoryEntries=()=>{
    const [categories, setCategories]=useState<CategoryTypesById>({})
    const fakeApi = {...expenseCategories, ...incomeCategories, ...savingCategories}
    useEffect(()=>{
        setCategories(fakeApi)
    },[])
    return {categories}
}