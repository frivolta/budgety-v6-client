import {useMonthlyFilter} from "../../widgets/TransactionsFilters/hooks/useTransactionsDate";
import {useMonthlyBudgetApi} from "../../widgets/MonthlyBudget/hooks/useMonthlyBudgetApi";
import {useState} from "react";

export const useTransactionStatistics = () => {
    const {date} = useMonthlyFilter()
    const {budget} = useMonthlyBudgetApi({date})
    const [transactionsTotal, setTransactionsTotal] = useState({})
    console.log("Budget", budget)
}