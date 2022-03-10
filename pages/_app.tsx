import {CategoriesDrawerProvider} from "../widgets/CategoriesDrawer/hooks/useCategoriesDrawer";
import {TransactionDrawerProvider} from "../widgets/TransactionsDrawer/hooks/userTransactionsDrawer";

require('../styles/global.less')

function MyApp({Component, pageProps}) {
    return (

        <CategoriesDrawerProvider>
            <TransactionDrawerProvider>
                <Component {...pageProps} />
            </TransactionDrawerProvider>
        </CategoriesDrawerProvider>);
}

export default MyApp;
