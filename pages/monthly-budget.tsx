import PageLayout from "../widgets/PageLayout";
import {useState} from "react";
import {addMonths} from 'date-fns'
import {MonthSelector} from "../components/MonthSelector";
import {formatMonth} from "../utils/helpers/dates";
import MonthlyBudget from "../widgets/MonthlyBudget";


const BudgetPage = () => {
    // Month selector
    const [date, setDate] = useState(new Date())
    const nextMonth = () => setDate(addMonths(date, 1))
    const previousMonth = () => setDate(addMonths(date, -1))


    return (
        <PageLayout title="Monthly Budget" subtitle="Setup your budget" noPaper>
            <MonthSelector formatMonth={formatMonth}/>
            <MonthlyBudget date={date}/>
        </PageLayout>
    )
}
export default BudgetPage