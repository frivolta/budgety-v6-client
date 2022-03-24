import {CategoriesDrawerProvider} from "../widgets/CategoriesDrawer/hooks/useCategoriesDrawer";
import {TransactionDrawerProvider} from "../widgets/TransactionsDrawer/hooks/userTransactionsDrawer";
import {Auth0Provider} from "@auth0/auth0-react";
import Router from 'next/router';

require('../styles/global.less')
const onRedirectCallback = (appState) => {
    Router.replace(appState?.returnTo || '/');
};

function MyApp({Component, pageProps}) {
    return (
        <Auth0Provider
            domain={process.env.NEXT_PUBLIC_DOMAIN}
            clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
            audience="https://dev-iv8n6772.us.auth0.com/api/v2/"
            scope="read:current_user update:current_user_metadata"
            redirectUri={typeof window !== 'undefined' && window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            <CategoriesDrawerProvider>
                <TransactionDrawerProvider>
                    <Component {...pageProps} />
                </TransactionDrawerProvider>
            </CategoriesDrawerProvider>
        </Auth0Provider>
    );
}

export default MyApp;
