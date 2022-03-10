import {createContext, useCallback, useContext, useMemo, useState} from "react";
import {addMonths} from "date-fns";
import {ProviderProps, State} from "./interface";

const initialState: State = {
    date: new Date(),
    nextMonth: () => console.warn("not in hook"),
    previousMonth: () => console.warn("not in hook")
}

const MonthlyFilterContext = createContext<State>(initialState)

const MonthlyFilterProvider = ({children}: ProviderProps) => {
    const [date, setDate] = useState(new Date())
    const nextMonth = useCallback(() => setDate(addMonths(date, 1)), [date])
    const previousMonth = useCallback(() => setDate(addMonths(date, -1)), [date])

    const memoValues = useMemo(()=>({date, nextMonth, previousMonth}), [date,nextMonth,previousMonth])

    return (
        <MonthlyFilterContext.Provider value={memoValues}>
            {children}
        </MonthlyFilterContext.Provider>)
}

const useMonthlyFilter = () => useContext(MonthlyFilterContext)

export {useMonthlyFilter, MonthlyFilterProvider}