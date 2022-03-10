import {format, parse} from "date-fns";
import moment from "moment";
import {expenses} from "../../../data-structures/data/expenses/expenses";

export const formatMonth = (date: Date) => format(date, 'MMMM, yyyy')
export const convertToDate = (date: string)=>parse(date,"dd/MM/yyyy", new Date())
export const convertToFormDate= (date: string)=>dateFnsToMoment(date)

// Compatibility issues
export const dateFnsToMoment = (date: string)=>moment(date,"DD/MM/yyyy" )