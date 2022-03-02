import {NextPage} from "next";
import PageLayout from "../widgets/PageLayout";
import {Row, Typography} from "antd";
import React from "react";
import {expenseCategories} from "../data-structures/data/expense_categories/expense_categories";
import CategoryCards from "../widgets/CategoryCards";
import {CategoryType} from "../data-structures/definitions/categories";
import CategoryDrawer from "../widgets/CategoriesDrawer";
import {useCategoriesDrawer} from "../widgets/CategoriesDrawer/hooks/useCategoriesDrawer";
import {incomeCategories} from "../data-structures/data/income_categories/income_categories";
import {savingCategories} from "../data-structures/data/saving_categories/saving_categories";

const CategoriesPage: NextPage = () => {
    const {isDrawerOpen, currentCategory, selectAndOpenDrawer, closeDrawer} = useCategoriesDrawer();

    const handleEditCategory = (category: CategoryType) => selectAndOpenDrawer(category);

    return (
        <PageLayout title="Categories" subtitle="Define your categories">
            <CategoryDrawer category={currentCategory} isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer}/>
            {/* Expenses */}
            <Row>
                <Typography.Title level={5}>Expenses</Typography.Title>
            </Row>
            <CategoryCards categories={expenseCategories} handleEditCategory={handleEditCategory}/>
            <Row>
                <Typography.Title level={5}>Incomes</Typography.Title>
            </Row>
            <CategoryCards categories={incomeCategories} handleEditCategory={handleEditCategory}/>
            <Row>
                <Typography.Title level={5}>Savings</Typography.Title>
            </Row>
            <CategoryCards categories={savingCategories} handleEditCategory={handleEditCategory}/>
        </PageLayout>
    )
}

export default CategoriesPage