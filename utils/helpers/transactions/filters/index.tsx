import {FilterByCategoryIds} from "../../../../widgets/CategoriesFilter/hooks/useCategoryFilter";
import {Transaction} from "../../../../data-structures/definitions/transactions";
import {compose, curry, filter, ifElse, includes, isEmpty} from "ramda";
import {compareDesc, endOfMonth, isAfter, isBefore, startOfMonth} from "date-fns";
import {convertToDate} from "../../dates";
import {TransactionFilters, TransactionFilterTypes} from "../../../../hooks/useTransactionEntries/interface";

// Get transactions by date month
export const getMonthlyTransactions = curry((date: Date, fakeApi: Transaction[]) => fakeApi.filter(expense =>
    isAfter(convertToDate(expense.date), startOfMonth(date))
    && isBefore(convertToDate(expense.date), endOfMonth(date))))

// Get transactions by  a given category list
export const filterByCategoryList = curry((transactions: Transaction[], categoryList: FilterByCategoryIds,) =>
    ifElse(() => isEmpty(categoryList),
        () => transactions,
        () => filter((t) => includes(t.category.id, categoryList), transactions))
)

// Get transactions with defined list of category ids
// If categoryIds array is empty means nothing is selected, return all the transactions
export const filterByCategoryIds = curry((transactions: Transaction[], categoryIds: number[]) => isEmpty(categoryIds) ? transactions :
    transactions.filter(t => categoryIds.includes(t.category.id)))


/* Apply Filters */
// Apply Ids to all filters
export const applyTransactionsToAllFilters = curry((prevFilters: TransactionFilters, ids: number[]) =>
    Object.keys(prevFilters).reduce((acc, filterKey) => {
        return {...acc, [filterKey]: [...ids]}
    }, {}))

// Apply Ids to a single filter
export const applyTransactionsToFilter = curry((filterType: TransactionFilterTypes, filters: TransactionFilters, ids: number[]) =>
    ({...filters, [filterType]: [...ids]}))

export const applyFiltersToTransactions = (filters: TransactionFilters, transactions: Transaction[]) =>
    compose(getTransactionsByIds(transactions), getFilteredTransactionsIds)(filters)

/*Helpers*/

// Get ids from a transaction list
export const getTransactionIds = (transactionList: Transaction[]) => transactionList.map(t => t.id)

// Get transactions by ids
export const getTransactionsByIds = curry((transactionList: Transaction[], ids: number[]) =>
    transactionList.filter(t => ids.includes(t.id)))

/* Operations with applied filters, intersecting all filters */
export const getFilteredTransactionsIds = (filters: TransactionFilters) => {
    const f = Object.values(filters).reduce((a, b) => a.filter(i => b.includes(i)))
    console.log(f, filters)
    return f
}

// Order transactions by desc date
export const orderByDate = (transactions: Transaction[]) => transactions.sort((a, b) =>
    compareDesc(convertToDate(a.date), convertToDate(b.date)));