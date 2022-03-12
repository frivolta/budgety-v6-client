import {Category_Income} from "../../definitions/categories";

type IncomeCategoriesById = Record<Category_Income["id"], Category_Income>

export const incomeCategories: IncomeCategoriesById={
    18:{
        id:18,
        category_slug: "salary",
        category_name: "Salary",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type:"income"
    },
    19:{
        id:19,
        category_slug: "side_business",
        category_name: "Side Business",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type:"income"
    },
    20:{
        id:20,
        category_slug: "dividends",
        category_name: "Dividends",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type:"income"
    },
    21:{
        id:21,
        category_slug: "rental_property",
        category_name: "Rental Property",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type:"income"
    }
}