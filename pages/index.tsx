import PageLayout from "../widgets/PageLayout";
import {MonthlyFilterProvider} from "../widgets/TransactionsFilters/hooks/useTransactionsDate";
import {MonthSelector} from "../components/MonthSelector";
import {formatMonth} from "../utils/helpers/dates";
import {useAllTransactions} from "../hooks/useAllTransactions";
import {Col, Row} from "antd";
import {AmountDisplay} from "../components/AmountDisplay";

const IndexPage = () => {
    const {total, apiState} = useAllTransactions()
    return (<MonthlyFilterProvider>
            <PageLayout title="Dashboard" subtitle="Review your reports" noPaper>
                <Row className="site-layout-background" style={{padding: 16, marginBottom: 16}}>
                    <Col>
                        <AmountDisplay
                            text="Account balance:"
                            amount={total}
                            tooltip="All your incomes and savings minus all your expenses"/>
                    </Col>
                </Row>
                <MonthSelector formatMonth={formatMonth}/>
            </PageLayout>
        </MonthlyFilterProvider>
    )
};

export default IndexPage;
