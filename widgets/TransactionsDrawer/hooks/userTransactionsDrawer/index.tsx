import {Transaction} from "../../../../data-structures/definitions/transactions";
import {createContext, ReactChild, useContext, useState} from "react";
import {CategoryType} from "../../../../data-structures/definitions/categories";

interface State {
    isDrawerOpen: boolean;
    closeDrawer: ()=>void;
    currentTransaction: Transaction | null;
    selectAndOpenDrawer: (transaction: Transaction)=>void;
}

interface ProviderProps{
    children: ReactChild
}

const initialState: State = {
    isDrawerOpen: false,
    closeDrawer: () => console.warn("not in hook"),
    selectAndOpenDrawer: () => console.warn("not in hook"),
    currentTransaction: null
}

const TransactionsDrawerContext = createContext<State>(initialState);


const TransactionDrawerProvider = ({children}: ProviderProps)=>{
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true)
    const [currentTransaction, setCurrentTransaction] = useState<Transaction | null>(null)

    // close drawer and reset category
    const closeDrawer = () => {
        setIsDrawerOpen(false)
        setCurrentTransaction(null)
    }

    // select category and open drawer
    const selectAndOpenDrawer = (transaction: Transaction|null)=>{
        setCurrentTransaction(transaction)
        setIsDrawerOpen(true)
    }

    return (
        <TransactionsDrawerContext.Provider value={{isDrawerOpen, closeDrawer, selectAndOpenDrawer, currentTransaction}}>
            {children}
        </TransactionsDrawerContext.Provider>
    )
}

const useTransactionsDrawer = ()=>useContext(TransactionsDrawerContext);

export {useTransactionsDrawer, TransactionDrawerProvider}