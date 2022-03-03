import {Col, Row, Typography} from "antd";
import {LeftCircleOutlined, RightCircleOutlined} from "@ant-design/icons";
import {DEFAULT_COLOR} from "../../utils/constants/StyleConstants";
import {FC} from "react";
import {MonthSelectorProps} from "./interface";

export const MonthSelector:FC<MonthSelectorProps> = ({previousMonth, formatMonth, nextMonth,date}) =>{
    return (
        <Row className="site-layout-background" style={{padding: 8}}>
            <Col span={24}>
                <Row justify="center" align="middle">
                    <Col>
                        <LeftCircleOutlined onClick={previousMonth} style={{padding: 8, fontSize:16, color:DEFAULT_COLOR }}/>
                    </Col>
                    <Col>
                        <Typography.Title level={4} style={{padding: 6, marginTop: 8}}>{formatMonth(date)}</Typography.Title>
                    </Col>
                    <Col>
                        <RightCircleOutlined onClick={nextMonth} style={{padding: 8, fontSize:16, color:DEFAULT_COLOR }}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}