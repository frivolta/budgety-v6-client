import {FC, useMemo} from "react";
import {Col, Progress, Row, Statistic} from "antd";
import {getColor, getPercentage} from "./utils";

interface StatisticCardProps {
    min: number;
    max: number;
    value: number;
    totalTitle: string;
    relativeTitle: string;
}


export const StatisticCard: FC<StatisticCardProps> = ({min, max, value, totalTitle, relativeTitle}) => {
    const color = useMemo(() => getColor(min, max, value), [min, max, value])
    const percentage = useMemo(() => getPercentage(min, max, value), [min, max, value])

    return (
        <>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title={totalTitle} value={max}/>
                </Col>
                <Col span={12}>
                    <Statistic title={relativeTitle} value={value}/>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Progress percent={percentage} type="line" status={"active"} strokeColor={color} showInfo={false}/>
                </Col>
            </Row>
        </>
    )
}