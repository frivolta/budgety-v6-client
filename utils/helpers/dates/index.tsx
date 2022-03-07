import {format, parse} from "date-fns";

export const formatMonth = (date: Date) => format(date, 'MMMM, yyyy')
export const convertToDate = (date: string)=>parse(date,"dd/MM/yyyy", new Date())