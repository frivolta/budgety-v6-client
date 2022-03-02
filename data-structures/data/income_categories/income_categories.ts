import {Category_Income} from "../../definitions/categories";

type IncomeCategoriesById = Record<Category_Income["id"], Category_Income>

export const incomeCategories: IncomeCategoriesById={
    1:{
        id:1,
        category_slug: "salary",
        category_name: "Salary",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type:"income"
    },
    2:{
        id:2,
        category_slug: "side_business",
        category_name: "Side Business",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type:"income"
    },
    3:{
        id:3,
        category_slug: "dividends",
        category_name: "Dividends",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type:"income"
    },
    4:{
        id:4,
        category_slug: "rental_property",
        category_name: "Rental Property",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type:"income"
    }
}