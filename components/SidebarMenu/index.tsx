import Link from 'next/link'
import {Menu} from 'antd';
import {
    AppstoreOutlined,
    BarsOutlined,
    PieChartOutlined,
    RadarChartOutlined,
    SettingOutlined,
} from "@ant-design/icons";

export const SidebarMenu = () => {
    return (
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined/>}>
                <Link href="/">
                    Dashboard
                </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BarsOutlined/>}>
                <Link href="/transactions">
                    Transactions
                </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<AppstoreOutlined/>}>
                <Link href="/categories">
                    Categories
                </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<RadarChartOutlined/>}>
                <Link href="/monthly-budget">
                    Monthly Budget
                </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<SettingOutlined/>}>
                <Link href="/setup">
                    Setup
                </Link>
            </Menu.Item>
        </Menu>
    )
}