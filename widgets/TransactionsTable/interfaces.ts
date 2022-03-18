import {Transaction} from "../../data-structures/definitions/transactions";
export interface TransactionColumn {
    title: string;
    dataIndex: string;
    key: string | number;
    width?: string;
    editable?: boolean;
    render?:any;
    sorter?: any;
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


import {Category_Expense} from "../../data-structures/definitions/categories";


