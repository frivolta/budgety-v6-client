import {useCallback, useState} from "react";
import {addMonths} from "date-fns";

export const useTransactionsDate = () => {
    const [date, setDate] = useState(new Date())
    const nextMonth = useCallback(() => setDate(addMonths(date, 1)),[date])
    const previousMonth = useCallback(() => setDate(addMonths(date, -1)),[date])
    return {date, nextMonth, previousMonth}
}