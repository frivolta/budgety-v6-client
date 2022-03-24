import PageLayout from "../widgets/PageLayout";
import {MonthlyFilterProvider} from "../widgets/TransactionsFilters/hooks/useTransactionsDate";
import {MonthSelector} from "../components/MonthSelector";
import {formatMonth} from "../utils/helpers/dates";
import {useAllTransactions} from "../hooks/useAllTransactions";
import {Col, Row} from "antd";
import {AmountDisplay} from "../components/AmountDisplay";
import {TransactionEntriesProvider} from "../hooks/useTransactionEntries";
import {DashboardData} from "../widgets/DashboardData";
import {useAuth0} from "@auth0/auth0-react";

const IndexPage = () => {
    const {total, apiState} = useAllTransactions()
    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
        getAccessTokenSilently,
        getIdTokenClaims
    } = useAuth0();
    const at = async () => {
        const token = await getAccessTokenSilently()
        console.log(token)
    }


    return (
        <MonthlyFilterProvider>
            <TransactionEntriesProvider>
                <PageLayout title="Dashboard" subtitle="Review your reports" noPaper>
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                    <button onClick={at}>Get</button>


                    <Row className="site-layout-background" style={{padding: 16, marginBottom: 16}}>
                        <Col>
                            <AmountDisplay
                                text="Account balance:"
                                amount={total}
                                tooltip="All your incomes and savings minus all your expenses"/>
                        </Col>
                    </Row>
                    <MonthSelector formatMonth={formatMonth}/>
                    <DashboardData/>
                </PageLayout>
            </TransactionEntriesProvider>
        </MonthlyFilterProvider>
    )
};

export default IndexPage;
