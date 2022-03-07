import React, {FC, useEffect, useState} from "react";
import {TransactionsDrawerProps} from "./interfaces";
import {DrawerData} from "../TransactionsDrawer/interfaces";
import {Drawer} from "antd";
import TransactionForm from "../TransactionForm";

export const TransactionsDrawer: FC<TransactionsDrawerProps> = ({isDrawerOpen, closeDrawer, transaction}) => {
    const [drawerData, setDrawerData] = useState<DrawerData | null>(null)

    useEffect(() => {
        setDrawerData(transaction)
    }, [transaction])

    return (<Drawer
        title={drawerData ? "Edit Transaction" : "Create New Transaction"}
        placement="right"
        size="default"
        onClose={closeDrawer}
        visible={isDrawerOpen}
    >
        <TransactionForm transaction={drawerData}/>
    </Drawer>)
}