import {FilterByCategoryIds} from "../../../../widgets/CategoriesFilter/hooks/useCategoryFilter";
import {Transaction} from "../../../../data-structures/definitions/transactions";
import {curry, filter, ifElse, includes, isEmpty} from "ramda";
import {compareDesc, endOfMonth, isAfter, isBefore, startOfMonth} from "date-fns";
import {convertToDate} from "../../dates";

export const getMonthlyTransactions = curry((date: Date, fakeApi: Transaction[]) => fakeApi.filter(expense =>
    isAfter(convertToDate(expense.date), startOfMonth(date))
    && isBefore(convertToDate(expense.date), endOfMonth(date))))


export const filterByCategoryList = curry((transactions: Transaction[],categoryList: FilterByCategoryIds, ) =>
    ifElse(() => isEmpty(categoryList),
        () => transactions,
        () => filter((t) => includes(t.category.id, categoryList), transactions))
)

export const orderByDate=(transactions: Transaction[])=>transactions.sort((a,b)=>
    compareDesc(convertToDate(a.date), convertToDate(b.date)));

export const filterByCategoryIds=curry((transactions: Transaction[], categoryIds: number[])=>
    filter(t=>includes(t.category.id, categoryIds), transactions))
