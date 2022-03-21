import {Tabs} from "antd";
import {Chart} from "react-google-charts";

const budgetedData = [["Type", "Amount"], ["Expenses", 14000], ["Incomes", 17000], ["Savings", 3000]]

export const options = {};

export const DashboardCatCharts = () => (
    <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Budgeted Amount" key="1">
            <Chart
                chartType="PieChart"
                data={budgetedData}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Current Amount" key="2">
            <Chart
                chartType="PieChart"
                data={budgetedData}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </Tabs.TabPane>
    </Tabs>
)