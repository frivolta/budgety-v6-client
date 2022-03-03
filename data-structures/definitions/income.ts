import { Category_Income} from "./categories";

export interface Income{
    id: number;
    createdAt: string;
    updatedAt: string;
    category: Category_Income;
    amount: number;
    description: string;
    date: string;
}