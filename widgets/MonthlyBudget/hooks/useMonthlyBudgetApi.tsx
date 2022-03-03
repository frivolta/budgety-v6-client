import {FC, useEffect, useState} from "react";
import {UseMonthlyBudgetApiProps} from "./interfaces";
import {MonthlyBudget} from "../../../data-structures/definitions/monthlyBudget";
import {monthlyBudget} from "../../../data-structures/data/budget/monthlyBudget";

export const useMonthlyBudgetApi = ({date}: UseMonthlyBudgetApiProps)=>{
    const [budget, setBudget] = useState<MonthlyBudget|null>(null)

    useEffect(()=>{
        setBudget(monthlyBudget)
    },[date])

    return {budget}
}