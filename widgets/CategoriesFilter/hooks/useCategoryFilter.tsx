import {CategoryType, CategoryTypesById} from "../../../data-structures/definitions/categories";
import {useEffect, useState} from "react";
import {Transaction} from "../../../data-structures/definitions/transactions";
import {filterByCategoryList} from "../../../utils/helpers/transactions/filters";
import {compose} from "ramda";

export type FilterByCategoryIds = CategoryType["id"][]

export interface UseCategoryFilterProps{
    transactions: Transaction[]
    categoryIdList: FilterByCategoryIds;
}


export const useCategoryFilter = ({transactions, categoryIdList}:UseCategoryFilterProps)=>{
    const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>(transactions)
    const applyFilter = filterByCategoryList(transactions)

    useEffect(()=>{
        if(categoryIdList && transactions) {
            compose(setFilteredTransactions, applyFilter)(categoryIdList)
        }
    },[categoryIdList, transactions])

    return {filteredTransactions}
}