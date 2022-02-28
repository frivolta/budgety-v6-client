import {CategoriesDrawerProvider} from "../widgets/CategoriesDrawer/hooks/useCategoriesDrawer";

require('../styles/global.less')

function MyApp({Component, pageProps}) {
    return (
        <CategoriesDrawerProvider>
            <Component {...pageProps} />
        </CategoriesDrawerProvider>);
}

export default MyApp;
