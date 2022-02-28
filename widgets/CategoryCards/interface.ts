import {CategoryType, CategoryTypesById} from "../../data-structures/definitions/categories";

export interface CategoryCardsProps{
    categories: CategoryTypesById;
    handleEditCategory: (category: CategoryType|null)=>void;
}