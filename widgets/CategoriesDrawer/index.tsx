import {Drawer} from "antd";
import React, {FC, useEffect, useState} from "react";
import {CategoriesDrawer, DrawerData} from "./interfaces";
import CategoryForm from "../CategoryCards/components/CategoryForm";


const CategoryDrawer: FC<CategoriesDrawer> = ({isDrawerOpen, closeDrawer, category}) => {
    const [drawerData, setDrawerData] = useState<DrawerData | null>(null)

    useEffect(() => {
        setDrawerData(category)
    }, [category])

    return (
        <Drawer
            title={drawerData ? "Edit Category" : "Create New Category"}
            placement="right"
            size="default"
            onClose={closeDrawer}
            visible={isDrawerOpen}
        >
            <CategoryForm category={drawerData}/>
        </Drawer>
    )
}

export default CategoryDrawer