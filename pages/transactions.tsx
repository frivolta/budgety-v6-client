import {NextPage} from "next";
import {MonthSelector} from "../components/MonthSelector";
import {formatMonth} from "../utils/helpers/dates";
import PageLayout from "../widgets/PageLayout";
import {useState} from "react";
import {addMonths} from "date-fns";
import {useTransactionsExpenses} from "../hooks/useTransactionsExpenses";
import {TransactionsTable} from "../widgets/TransactionsTable";
import {useTransactionsDrawer} from "../widgets/TransactionsDrawer/hooks/userTransactionsDrawer";
import {TransactionsDrawer} from "../widgets/TransactionsDrawer";

const TransactionsPage: NextPage = () => {
    const {isDrawerOpen, currentTransaction, selectAndOpenDrawer, closeDrawer} = useTransactionsDrawer()

    // Month selector
    const [date, setDate] = useState(new Date())
    const nextMonth = () => setDate(addMonths(date, 1))
    const previousMonth = () => setDate(addMonths(date, -1))
    const {expenses} = useTransactionsExpenses(date)

    return (
        <>
            <TransactionsDrawer closeDrawer={closeDrawer} transaction={currentTransaction} isDrawerOpen={isDrawerOpen}/>
            <PageLayout title="Transactions" subtitle="Manage your entries" noPaper>
                <MonthSelector date={date} previousMonth={previousMonth} nextMonth={nextMonth}
                               formatMonth={formatMonth}/>
                <TransactionsTable transactions={expenses}/>
            </PageLayout>
        </>
    )
}
export default TransactionsPage