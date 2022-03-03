import {FC} from "react";
import {MonthlyBudgetProps} from "./interface";
import {useMonthlyBudgetApi} from "./hooks/useMonthlyBudgetApi";
import {Col, Row, Typography} from "antd";
import {BudgetTable} from "./components/BudgetTable";
import {expenseColumns} from "./components/BudgetTable/columns";


const MonthlyBudget: FC<MonthlyBudgetProps> = ({date}) => {
    const {budget} = useMonthlyBudgetApi({date})
    return (
        <Row className="site-layout-background" style={{padding: 16, marginTop: 16, width: "100%"}}>
            <Row style={{width: "100%"}}>
                <Col span={24}>
                    <Typography.Title level={5}>Expenses</Typography.Title>
                    <Typography.Text type="secondary">How much will you spend this month for each
                        category?</Typography.Text>
                </Col>
            </Row>
            <Row style={{width: "100%", marginTop: 24}}>
                <Col span={24}>
                    <BudgetTable budget={budget} budgetDataType="expenses" columns={expenseColumns}/>
                </Col>
            </Row>
        </Row>
    )
}
export default MonthlyBudget