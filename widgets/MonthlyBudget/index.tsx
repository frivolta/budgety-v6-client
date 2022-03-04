import {FC} from "react";
import {MonthlyBudgetProps} from "./interface";
import {useMonthlyBudgetApi} from "./hooks/useMonthlyBudgetApi";
import {BudgetTable} from "./components/BudgetTable";
import {budgetColumns, goalColumns} from "./components/BudgetTable/columns";
import {LayoutRow} from "../../components/LayoutRow";
import {Button, Col, Divider, Statistic} from "antd";
import {StatisticCard} from "./components/StatisticCard";


const MonthlyBudget: FC<MonthlyBudgetProps> = ({date}) => {
    const {budget} = useMonthlyBudgetApi({date})
    return (
        <>
            <LayoutRow >
                <Col span={8}>
                    <StatisticCard min={0} max={100} value={30} totalTitle="Total expenses budget" relativeTitle="Expenses this month"/>
                    <Divider type="vertical" />

                </Col>

                <Col span={8}>
                    <StatisticCard min={0} max={100} value={30} totalTitle="Total expenses budget" relativeTitle="Expenses this month"/>
                </Col>
                <Col span={8}>
                    <StatisticCard min={0} max={100} value={30} totalTitle="Total expenses budget" relativeTitle="Expenses this month"/>
                </Col>
            </LayoutRow>
            <LayoutRow>
                <BudgetTable
                    budget={budget}
                    budgetDataType="expenses"
                    columns={budgetColumns}
                    title="Expenses"
                    helper="How much will you spend this month for each category?"
                />
            </LayoutRow>
            <LayoutRow>
                <BudgetTable
                    budget={budget}
                    budgetDataType="savings"
                    columns={goalColumns}
                    title="Savings"
                    helper="How much are you willing to save for each of your savings project?"
                />
            </LayoutRow>
            <LayoutRow>
                <BudgetTable
                    budget={budget}
                    budgetDataType="incomes"
                    columns={goalColumns}
                    title="Incomes"
                    helper="What are your income expectations?"
                />
            </LayoutRow>
        </>
    )
}
export default MonthlyBudget