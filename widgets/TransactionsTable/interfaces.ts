import {Transaction} from "../../data-structures/definitions/transactions";
import {Category_Expense} from "../../data-structures/definitions/categories";

export interface TranasctionColumn {
    title: string;
    dataIndex: string;
    key: string | number;
    width?: string;
    editable?: boolean;
    render?:any;
}

export interface TransactionRow{
    id: number;
    key: string;
    category: Category_Expense;
    amount: number;
    description: string;
    date: string;
}


export interface TransactionsTableProps {
}

