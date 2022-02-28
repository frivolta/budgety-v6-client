import {Category_Expense, Category_WithBudget} from "../../definitions/categories";

type ExpenseCategoriesById = Record<Category_Expense["id"], Category_Expense>

export const expenseCategories: ExpenseCategoriesById ={
    1:{
        id: 1,
        category_name: "Car",
        category_slug: "car",
        icon: "FireOutlined",
        color: "#04f"
    },
    2:{
        id: 2,
        category_name: "Rent",
        category_slug: "rent",
        icon: "FireOutlined",
        color: "#04f"
    },
    3:{
        id: 3,
        category_name: "Gym",
        category_slug: "gym",
        icon: "FireOutlined",
        color: "#04f"
    },
    4:{
        id: 4,
        category_name: "Food",
        category_slug: "food",
        icon: "FireOutlined",
        color: "#04f"
    },
    5:{
        id: 5,
        category_name: "Internet",
        category_slug: "internet",
        icon: "FireOutlined",
        color: "#04f"
    },
    6:{
        id: 6,
        category_name: "Water",
        category_slug: "water",
        icon: "FireOutlined",
        color: "#04f"
    },
    7:{
        id: 7,
        category_name: "Groceries",
        category_slug: "groceries",
        icon: "FireOutlined",
        color: "#04f"
    },
    8:{
        id: 8,
        category_name: "Medical",
        category_slug: "medical",
        icon: "FireOutlined",
        color: "#04f"
    },
    9:{
        id: 9,
        category_name: "Fuel",
        category_slug: "fuel",
        icon: "FireOutlined",
        color: "#04f"
    },
    10:{
        id: 10,
        category_name: "Electricity",
        category_slug: "electricity",
        icon: "FireOutlined",
        color: "#04f"
    },
    11:{
        id: 11,
        category_name: "Gas",
        category_slug: "gas",
        icon: "FireOutlined",
        color: "#04f"
    },
    12:{
        id: 12,
        category_name: "Eating out",
        category_slug: "eating_out",
        icon: "FireOutlined",
        color: "#04f"
    },
    13:{
        id: 13,
        category_name: "Takeaways",
        category_slug: "takeaways",
        icon: "FireOutlined",
        color: "#04f"
    },
    14:{
        id: 14,
        category_name: "For fun",
        category_slug: "for_fun",
        icon: "FireOutlined",
        color: "#04f"
    },
    15:{
        id: 15,
        category_name: "Cell phone",
        category_slug: "cell_phone",
        icon: "FireOutlined",
        color: "#04f"
    },
    16:{
        id: 16,
        category_name: "Baby",
        category_slug: "baby",
        icon: "FireOutlined",
        color: "#04f"
    },
    17:{
        id: 17,
        category_name: "Yoga",
        category_slug: "yoga",
        icon: "FireOutlined",
        color: "#04f"
    },

}
