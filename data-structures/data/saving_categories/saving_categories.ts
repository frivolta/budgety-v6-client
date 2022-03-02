import {Category_Saving} from "../../definitions/categories";

type SavingCategoriesById = Record<Category_Saving["id"], Category_Saving>

export const savingCategories: SavingCategoriesById = {
    1: {
        id: 1,
        category_slug: "trip",
        category_name: "Trip",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type: "saving"

    },
    2: {
        id: 2,
        category_slug: "general_savings",
        category_name: "General Savings",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type: "saving"

    },
    3: {
        id: 3,
        category_slug: "trip",
        category_name: "Trip",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type: "saving"

    },
    4: {
        id: 4,
        category_slug: "holiday",
        category_name: "Holiday",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type: "saving"

    },
    5: {
        id: 5,
        category_slug: "new_car",
        category_name: "New Car",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type: "saving"

    },
}