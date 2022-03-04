import iconComponentFactory from "../../../../components/Factories/iconComponentFactory";
import {CategoryType} from "../../../../data-structures/definitions/categories";
import {MonthlyBudgetColumn} from "./interface";

export const budgetColumns: MonthlyBudgetColumn[] = [
    {title: "Category", dataIndex: "category", key: "category", width: '30%', render: (cat: CategoryType)=> {
        return <strong>{iconComponentFactory(cat.icon, {style:{
                backgroundColor: cat.color,
                color: "#fff",
                fontSize: 24,
                padding: 8,
                borderRadius: 8,
                marginRight: 16
            }})}{cat.category_name}</strong>
        }},
    {title: "Budget", dataIndex: "budget", key: "budget", editable: true},
    {title: "Budget Left", dataIndex: "budgetLeft", key: "budgetLeft"},
];

export const goalColumns: MonthlyBudgetColumn[] = [
    {title: "Category", dataIndex: "category", key: "category", width: '30%', render: (cat: CategoryType)=> {
            return <strong>{iconComponentFactory(cat.icon, {style:{
                    backgroundColor: cat.color,
                    color: "#fff",
                    fontSize: 24,
                    padding: 8,
                    borderRadius: 8,
                    marginRight: 16
                }})}{cat.category_name}</strong>
        }},
    {title: "Goal", dataIndex: "goal", key: "goal", editable: true},
    {title: "Current Amount", dataIndex: "currentAmount", key: "currentAmount"},
];
