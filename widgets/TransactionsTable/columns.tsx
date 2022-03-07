import {TranasctionColumn} from "./interfaces";
import {CategoryType} from "../../data-structures/definitions/categories";
import iconComponentFactory from "../../components/Factories/iconComponentFactory";

export const transactionColumns: TranasctionColumn[] = [
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
        }, editable: true
    },
    {title: "Date", dataIndex: "date", key: "date", editable: true},
    {title: "Description", dataIndex: "description", key: "description", editable: true},
    {title: "Amount", dataIndex: "amount", key: "amount", editable: true},
    {title: "Actions", dataIndex: "actions", key: "actions"},
]