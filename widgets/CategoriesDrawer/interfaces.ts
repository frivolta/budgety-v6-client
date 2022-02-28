import {CategoryType} from "../../data-structures/definitions/categories";

export interface CategoriesDrawer{
 isDrawerOpen: boolean;
 closeDrawer: ()=>void;
 category: CategoryType | null;
}

export type DrawerData = CategoryType;