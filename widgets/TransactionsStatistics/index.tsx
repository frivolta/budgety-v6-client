import {Col, Divider, Row} from "antd";
import {StatisticCard} from "./components/StatisticCard";
import React from "react";
import {useTransactionEntries} from "../../hooks/useTransactionEntries";
import {useTransactionStatistics} from "./hooks/useTransactionStatistics";


export const TransactionsStatistics = () => {
    const {filteredTransactions, transactions} = useTransactionEntries()
    const {expenses, incomes, savings} = useTransactionStatistics(transactions, filteredTransactions)

    return (
        <Row style={{padding: 16, marginTop: 16}} gutter={16}>
            <Col span={8}>
                <StatisticCard totalValue={expenses.total} relativeValue={expenses.relative}
                               totalTitle="Expenses (whole month)"
                               relativeTitle="Expenses (only filtered) "/>
                <Divider type="vertical"/>
            </Col>
            <Col span={8}>
                <StatisticCard totalValue={incomes.total} relativeValue={incomes.relative}
                               totalTitle="Incomes (whole month)"
                               relativeTitle="Incomes (only filtered)"/>
            </Col>
            <Col span={8}>
                <StatisticCard totalValue={savings.total} relativeValue={savings.relative}
                               totalTitle="Savings (whole month)"
                               relativeTitle="Savings (only filtered)"/>
            </Col>
        </Row>
    )
}