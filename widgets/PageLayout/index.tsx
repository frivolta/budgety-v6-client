import {Layout, PageHeader} from 'antd';
import {useState} from "react";
import {Logo} from "../../components/Logo";
import {SidebarMenu} from "../../components/SidebarMenu";
import {Footer} from "../../components/Footer";
import {NextPage} from "next";
import {PageLayoutProps} from "./interface";

const {Header, Content, Sider} = Layout;

const PageLayout: NextPage<PageLayoutProps> = ({children, title, subtitle}) => {
    const [collapsed, setCollapsed] = useState(false)
    const collapseSidebar = () => setCollapsed(prev => !prev);
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={collapseSidebar}>
                <Logo/>
                <SidebarMenu/>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}>
                    <PageHeader
                        className="site-page-header"
                        title={title}
                        subTitle={subtitle ? subtitle : null}
                    />,
                </Header>
                <Content style={{margin: '32px 16px'}}>
                    <div className="site-layout-background" style={{padding: 24}}>
                        {children}
                    </div>
                </Content>
                <Footer/>
            </Layout>
        </Layout>)
}

export default PageLayout