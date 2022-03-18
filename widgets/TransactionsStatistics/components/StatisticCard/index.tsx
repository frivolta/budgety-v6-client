import {FC, memo} from "react";
import {Col, Row, Statistic} from "antd";

interface StatisticCardProps {
    totalValue: number;
    relativeValue: number;
    totalTitle: string;
    relativeTitle: string;
}


export const StatisticCard: FC<StatisticCardProps> = memo(({totalValue, relativeValue, totalTitle, relativeTitle}) => {
    return (
        <Row className="site-layout-background" style={{padding: 32, borderRadius: 8}}>
            <Col span={12}>
                <Statistic title={totalTitle} value={totalValue}/>
            </Col>
            <Col span={12}>
                <Statistic title={relativeTitle} value={relativeValue}/>
            </Col>
        </Row>
    )
})