import {NextPage} from "next";
import {MonthSelector} from "../components/MonthSelector";
import {formatMonth} from "../utils/helpers/dates";
import PageLayout from "../widgets/PageLayout";
import {useState} from "react";
import {addMonths} from "date-fns";
import {useTransactionEntries} from "../hooks/useTransactionEntries";
import {TransactionsTable} from "../widgets/TransactionsTable";
import {useTransactionsDrawer} from "../widgets/TransactionsDrawer/hooks/userTransactionsDrawer";
import {TransactionsDrawer} from "../widgets/TransactionsDrawer";
import {useTransactionsDate} from "../widgets/TransactionsFilters/hooks/useTransactionsDate";
import {CategoriesFilter} from "../widgets/CategoriesFilter";
import categories from "./categories";
import {expenseCategories} from "../data-structures/data/expense_categories/expense_categories";
import {useCategoryEntries} from "../hooks/useCategoryEntries";

const TransactionsPage: NextPage = () => {
    //const {categories} = useCategoryEntries()

    // Drawer
    const {isDrawerOpen, currentTransaction, selectAndOpenDrawer, closeDrawer} = useTransactionsDrawer()
    //Main Data
    const {date, nextMonth, previousMonth} = useTransactionsDate()
    // Transaction filters
    const {filteredTransactions} = useTransactionEntries(date)

    // categories filter

    //Sorter
    // date, amount, alphabetically





    return (
        <>
            <TransactionsDrawer closeDrawer={closeDrawer} transaction={currentTransaction} isDrawerOpen={isDrawerOpen}/>
            <PageLayout title="Transactions" subtitle="Manage your entries" noPaper>
                <MonthSelector
                    date={date}
                    previousMonth={previousMonth}
                    nextMonth={nextMonth}
                    formatMonth={formatMonth}
                />
                {/*<CategoriesFilter categories={expenseCategories}/>*/}
                <TransactionsTable transactions={filteredTransactions}/>
            </PageLayout>
        </>
    )
}
export default TransactionsPage