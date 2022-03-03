import {format} from "date-fns";

export const formatMonth = (date: Date) => format(date, 'MMMM, yyyy')
