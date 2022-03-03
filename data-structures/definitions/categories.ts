import {Expense} from "./expense";

export type CategoryType = Category_Expense | Category_Income | Category_Saving;

export type CategoryTypesById = Record<CategoryType["id"], CategoryType>

export interface Category_Expense{
    id:number;
    category_type: "expense";
    category_name: string;
    category_slug:string;
    icon: string;
    color: string;
}

export interface Category_Income{
    id: number;
    category_type: "income";
    category_name:string;
    category_slug:string;
    icon: string;
    color: string;
}

export interface Category_Saving{
    id: number;
    category_type: "saving";
    category_name: string;
    category_slug:string;
    icon: string;
    color: string;
}


export interface Category_WithBudget<T extends CategoryType, K>{
    id: T["id"];
    category: T;
    budget: number;
    currentAmount: number;
    items:K[];
}

export interface Category_WithGoal<T extends CategoryType, K>{
    id:T["id"];
    category: T;
    goal: number;
    currentAmount: number;
    items:K[];
}
