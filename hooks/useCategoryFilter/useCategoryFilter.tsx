import {Transaction} from "../../data-structures/definitions/transactions";
import {CategoryTypesById} from "../../data-structures/definitions/categories";
import {useEffect, useState} from "react";

export const useCategoryFilter = (transactions: Transaction[], categories: CategoryTypesById) => {
    const [transactionsByCategories, setTransactionsByCategories] = useState(transactions)
    const [categoryFilterIds, setCategoryFilterIds] = useState([])

    useEffect(()=>{
        if(transactions && categories){

        }
    },[transactions, categories])

    return {transactionsByCategories, setCategoryFilterIds}
}