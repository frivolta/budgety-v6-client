import React, {ReactChild, useContext, useState} from "react";
import {CategoryType} from "../../../data-structures/definitions/categories";

interface State {
    isDrawerOpen: boolean;
    closeDrawer: () => void;
    currentCategory: CategoryType | null;
    selectAndOpenDrawer: (category: CategoryType) => void;
}

interface ProviderProps {
    children: ReactChild;
}

const initialState: State = {
    isDrawerOpen: false,
    closeDrawer: () => console.warn("not in hook"),
    selectAndOpenDrawer: () => console.warn("not in hook"),
    currentCategory: null
}

const CategoriesDrawerContext = React.createContext<State>(initialState)

const CategoriesDrawerProvider = ({children}: ProviderProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
    const [currentCategory, setCurrentCategory] = useState<CategoryType | null>(null)

    // close drawer and reset category
    const closeDrawer = () => {
        setIsDrawerOpen(false)
        setCurrentCategory(null)
    }

    // select category and open drawer
    const selectAndOpenDrawer = (category: CategoryType|null)=>{
        setCurrentCategory(category)
        setIsDrawerOpen(true)
    }

    return (
        <CategoriesDrawerContext.Provider value={{isDrawerOpen, closeDrawer, selectAndOpenDrawer, currentCategory}}>
            {children}
        </CategoriesDrawerContext.Provider>
    )
}

const useCategoriesDrawer = () => useContext(CategoriesDrawerContext)

export {useCategoriesDrawer, CategoriesDrawerProvider}