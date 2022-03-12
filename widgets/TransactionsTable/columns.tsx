import {TranasctionColumn} from "./interfaces";
import {CategoryType} from "../../data-structures/definitions/categories";
import iconComponentFactory from "../../components/Factories/iconComponentFactory";
import {compareDesc} from "date-fns";
import {convertToDate} from "../../utils/helpers/dates";

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
    {title: "Date", dataIndex: "date", key: "date", editable: true, sorter: (a,b)=>compareDesc(convertToDate(a.date), convertToDate(b.date))},
    {title: "Description", dataIndex: "description", key: "description", editable: true},
    {title: "Amount", dataIndex: "amount", key: "amount", editable: true, sorter: (a, b) => a.amount - b.amount},
    {title: "Actions", dataIndex: "actions", key: "actions"},
]