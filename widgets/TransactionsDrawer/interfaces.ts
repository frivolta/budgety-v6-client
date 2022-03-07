import {Transaction} from "../../data-structures/definitions/transactions";

export interface TransactionsDrawerProps{
    isDrawerOpen: boolean;
    closeDrawer: ()=>void;
    transaction: Transaction | null;
}

export type DrawerData = Transaction;