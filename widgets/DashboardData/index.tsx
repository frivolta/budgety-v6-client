import {useMonthlyFilter} from "../TransactionsFilters/hooks/useTransactionsDate";
import {useTransactionEntries} from "../../hooks/useTransactionEntries";
import {useEffect} from "react";
import {Col, Row} from "antd";
import {useTransactionStatistics} from "../../hooks/useTransactionStatistics";
import {DashboardCatCharts} from "../DashboardCatCharts";
import {DashboardTable} from "../DashboardTable";
import {budgetColumns, goalColumns} from "../DashboardTable/utils/columns";
import {monthlyBudget} from "../../data-structures/data/budget/monthlyBudget";

export const DashboardData = () => {
    const {date} = useMonthlyFilter()
    const {setDate} = useTransactionEntries()
    const p = useTransactionStatistics()
    useEffect(() => {
        setDate(date)
    }, [date])

    return (
        <>
            <Row style={{marginTop: 16}}>
                <Col span={12}>
                    <div className="site-layout-background" style={{padding: "8px 16px"}}>
                        <DashboardCatCharts/>
                    </div>
                </Col>
                <Col span={12}>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <div className="site-layout-background"
                         style={{padding: "8px 16px", marginTop: 16, marginRight: 8}}>
                        <DashboardTable budgetDataType={"expenses"} title={"Expenses"} columns={budgetColumns}
                                        budget={monthlyBudget}/>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="site-layout-background" style={{padding: "8px 16px", marginTop: 16, marginLeft: 8}}>
                        <DashboardTable budgetDataType={"incomes"} title={"Incomes"} columns={goalColumns}
                                        budget={monthlyBudget}/>
                    </div>
                    <div className="site-layout-background" style={{padding: "8px 16px", marginTop: 16, marginLeft: 8}}>
                        <DashboardTable budgetDataType={"savings"} title={"Savings"} columns={goalColumns}
                                        budget={monthlyBudget}/>
                    </div>
                </Col>
            </Row>
        </>
    )
}