import {Category_Income} from "../../definitions/categories";

type IncomeCategoriesById = Record<Category_Income["id"], Category_Income>

export const incomeCategories: IncomeCategoriesById={
    1:{
        id:1,
        category_slug: "salary",
        category_name: "Salary"
    },
    2:{
        id:2,
        category_slug: "side_business",
        category_name: "Side Business"
    },
    3:{
        id:3,
        category_slug: "dividends",
        category_name: "Dividends"
    },
    4:{
        id:4,
        category_slug: "rental_property",
        category_name: "Rental Property"
    }
}