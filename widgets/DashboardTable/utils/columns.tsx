import {MonthlyBudgetColumn} from "../../MonthlyBudget/components/BudgetTable/interface";
import {CategoryType} from "../../../data-structures/definitions/categories";
import iconComponentFactory from "../../../components/Factories/iconComponentFactory";

export const budgetColumns: MonthlyBudgetColumn[] = [
    {
        title: "Category", dataIndex: "category", key: "category", width: '30%', render: (cat: CategoryType) => {
            return <strong>{iconComponentFactory(cat.icon, {
                style: {
                    backgroundColor: cat.color,
                    color: "#fff",
                    fontSize: 24,
                    padding: 8,
                    borderRadius: 8,
                    marginRight: 16
                }
            })}{cat.category_name}</strong>
        }
    },
    {title: "Budget", dataIndex: "budget", key: "budget"},
    {title: "Current Amount", dataIndex: "currentAmount", key: "currentAmount"},
];

export const goalColumns: MonthlyBudgetColumn[] = [
    {
        title: "Category", dataIndex: "category", key: "category", width: '30%', render: (cat: CategoryType) => {
            return <strong>{iconComponentFactory(cat.icon, {
                style: {
                    backgroundColor: cat.color,
                    color: "#fff",
                    fontSize: 24,
                    padding: 8,
                    borderRadius: 8,
                    marginRight: 16
                }
            })}{cat.category_name}</strong>
        }
    },
    {title: "Goal", dataIndex: "goal", key: "goal"},
    {title: "Current Amount", dataIndex: "currentAmount", key: "currentAmount"},
];
