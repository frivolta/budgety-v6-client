import {Transaction} from "../../data-structures/definitions/transactions";
import {Dispatch, ReactChild, SetStateAction} from "react";

export enum TransactionFilterTypes {
    CATEGORY = "CATEGORY",
    DATE = "DATE"
}

export type TransactionFilters = Record<TransactionFilterTypes, number[] | null>

// Context
export interface State {
    filteredTransactions: Transaction[];
    transactions: Transaction[];
    resetFilters: () => void;
    applyFilterByCategoriesIds: (categoryIds: number[]) => void;
    setDate: Dispatch<SetStateAction<Date>>;
}

export interface ProviderProps {
    children: ReactChild | ReactChild[]
}