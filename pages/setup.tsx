import {NextPage} from "next";
import PageLayout from "../widgets/PageLayout";
import {Button, Col, Divider, Form, Input, Row, Typography} from "antd";

const SetupPage: NextPage = () => {

    return (
        <PageLayout title="Setup" subtitle="Initialize your account">
            <Row justify="center">
                <Col
                    xs={22}
                    sm={18}
                    md={16}
                    lg={8}
                >

                    <Row>
                        <Col flex="1 0 auto">
                            <Form layout="vertical" style={{width: "100%"}}>
                                <Form.Item
                                    tooltip={{title: "Default is 0"}}
                                    label="Account Initial Balance" required>
                                    <Input placeholder="0"/>
                                </Form.Item>
                                <Form.Item label="Account Initial Balance" required>
                                    <Input placeholder="10.000"/>
                                </Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Update
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </PageLayout>
    )
}

export default SetupPage