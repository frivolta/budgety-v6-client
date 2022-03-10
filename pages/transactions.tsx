import {NextPage} from "next";
import {MonthSelector} from "../components/MonthSelector";
import {formatMonth} from "../utils/helpers/dates";
import PageLayout from "../widgets/PageLayout";
import {TransactionsTable} from "../widgets/TransactionsTable";
import {useTransactionsDrawer} from "../widgets/TransactionsDrawer/hooks/userTransactionsDrawer";
import {TransactionsDrawer} from "../widgets/TransactionsDrawer";
import {MonthlyFilterProvider} from "../widgets/TransactionsFilters/hooks/useTransactionsDate";

const TransactionsPage: NextPage = () => {
    //const {categories} = useCategoryEntries()
    const {isDrawerOpen, currentTransaction, selectAndOpenDrawer, closeDrawer} = useTransactionsDrawer()

    //Filters


    //Sorter
    // date, amount, alphabetically


    return (
        <MonthlyFilterProvider>
            <TransactionsDrawer closeDrawer={closeDrawer} transaction={currentTransaction}
                                isDrawerOpen={isDrawerOpen}/>
            <PageLayout title="Transactions" subtitle="Manage your entries" noPaper>
                <MonthSelector formatMonth={formatMonth}/>
                {/*<CategoriesFilter categories={expenseCategories}/>*/}
                <TransactionsTable/>
            </PageLayout>
        </MonthlyFilterProvider>
    )
}
export default TransactionsPage