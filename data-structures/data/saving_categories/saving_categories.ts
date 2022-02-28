import {Category_Saving} from "../../definitions/categories";

type SavingCategoriesById = Record<Category_Saving["id"], Category_Saving>

export const savingCategories:SavingCategoriesById = {
    1:{
        id:1,
        category_slug: "trip",
        category_name: "Trip"
    },
    2:{
        id:2,
        category_slug: "general_savings",
        category_name: "General Savings"
    },
    3:{
        id:3,
        category_slug: "trip",
        category_name: "Trip"
    },
    4:{
        id:4,
        category_slug: "holiday",
        category_name: "Holiday"
    },
    5:{
        id:5,
        category_slug: "new_car",
        category_name: "New Car"
    },
}