import {CategoryType} from "../../../../data-structures/definitions/categories";

export interface CategoryCardProps{
    category: CategoryType;
    enqueue: (id:number)=>void;
    dequeue: ()=>void;
    peek: ()=>number;
    handleEditCategory: (category: CategoryType)=>void;
}