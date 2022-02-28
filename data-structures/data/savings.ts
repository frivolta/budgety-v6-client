
import {Saving} from "../definitions/saving";
import {savingCategories} from "./saving_categories/saving_categories";

export const savings: Saving[] = [
    {
        id: 1,
        createdAt: "23/02/2022",
        updatedAt: "23/02/2022",
        date: "23/02/2022",
        category: savingCategories[1],
        amount: 50,
        description: "Gas fuel"
    }
]