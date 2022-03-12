import {Category_Saving} from "../../definitions/categories";

type SavingCategoriesById = Record<Category_Saving["id"], Category_Saving>

export const savingCategories: SavingCategoriesById = {
    22: {
        id: 22,
        category_slug: "trip",
        category_name: "Trip",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type: "saving"

    },
    23: {
        id: 23,
        category_slug: "general_savings",
        category_name: "General Savings",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type: "saving"

    },
    24: {
        id: 24,
        category_slug: "trip",
        category_name: "Trip",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type: "saving"

    },
    25: {
        id: 25,
        category_slug: "holiday",
        category_name: "Holiday",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type: "saving"

    },
    26: {
        id: 26,
        category_slug: "new_car",
        category_name: "New Car",
        color: "#a0d911",
        icon: "FireOutlined",
        category_type: "saving"

    },
}