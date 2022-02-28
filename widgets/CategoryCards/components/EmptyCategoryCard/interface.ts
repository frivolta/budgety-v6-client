import {CategoryType} from "../../../../data-structures/definitions/categories";

export interface EmptyCategoryCardProps{
    handleCreateCategory: (category: CategoryType|null)=>void;
}