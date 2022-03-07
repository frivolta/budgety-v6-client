import {CategoryType} from "../../../../data-structures/definitions/categories";

export type Row =  { date: string | Date, category: CategoryType, key: number | string, description: string, amount: number | string}
export type Datasource = Row[]
