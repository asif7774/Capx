import React, { Component } from 'react';
import { Button, Form, Input, Steps } from "antd";
import { Link } from "react-router-dom";
import { Container, Row, Col } from '../../common';
import "./liquid-asset.scss";

const { Step } = Steps;

class LiquidAssetView extends Component {
    state = {
        current: 0,
    };
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const { current } = this.state;
        return (
            <React.Fragment>
                <Form layout="horizontal">
                    <div className="section-wrapper wallet-address">
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Item
                                        rules={[
                                            {
                                                message: 'Please input contract address',
                                            },
                                        ]}
                                        >
                                        <label htmlFor="contractaddress">Contract Address</label>
                                        <Input placeholder="" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Item
                                        className="mb-0"
                                        rules={[
                                            {
                                                message: 'Please input wrapped asset issuance address',
                                            },
                                        ]}
                                         >
                                        <label htmlFor="waia">Wrapped Asset Issuance Address</label>
                                        <Input placeholder="" />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="section-wrapper lock-amount">
                        <Container>
                            <Row className="align-items-center">
                                <Col lg="6" md="6">
                                    <div className="text-right mb-4">
                                        <Form.Item
                                            className="mb-0"
                                            rules={[
                                                {
                                                    message: 'Please input lock amount',
                                                },
                                            ]}
                                            >
                                            <label htmlFor="lockamount">Lock Amount</label>
                                            <Input size="large" className="ant-input-secondary" defaultValue="100,000" />
                                        </Form.Item>
                                        <div className="amount-bottominfo">Balance: <span>500,000</span></div>
                                    </div>
                                    <div className="text-right">
                                        <Form.Item
                                            className="mb-0"
                                            rules={[
                                                {
                                                    message: 'Please input wrapped asset issuance address',
                                                },
                                            ]}
                                        >
                                            <label htmlFor="lockingperiod">Locking period <small className="text-secondary">Enter Multiple locking periods</small></label>
                                            <Input size="large" className="ant-input-secondary" defaultValue="50 days" />
                                        </Form.Item>
                                        <div className="amount-bottominfo">Unlock date: <span>Aug 20, 2021</span></div>
                                    </div>
                                </Col>
                                <Col lg="5" md="6" className="ml-auto right-section">
                                    <Row className="py-2">
                                        <Col>
                                            Service Fee
                                        </Col>
                                        <Col className="text-secondary">
                                            0% (No Fee)
                                        </Col>
                                    </Row>
                                    <Row className="py-2">
                                        <Col>
                                            Total Lockup Amount
                                        </Col>
                                        <Col>
                                            100,000 Asset
                                        </Col>
                                    </Row>
                                    <Row className="py-2">
                                        <Col>
                                            Unlock Date
                                        </Col>
                                        <Col>
                                            Aug 20, 2021
                                        </Col>
                                    </Row>
                                    <Row className="py-2">
                                        <Col>
                                            Wrapped Asset Amount
                                        </Col>
                                        <Col>
                                            100,000 xAsset
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="assetsteps-wrapper">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="asset-steps-upper">
                                        <Row>
                                            <Col sm="4">
                                                <Button size="large" type="primary" block>Approve Lock</Button>
                                            </Col>
                                            <Col sm="4">
                                                <Button size="large" block>Approve Lock</Button>
                                            </Col>
                                            <Col sm="4">
                                                <Link to='/liquid-asset-issued'><Button size="large" block>Approve Lock</Button></Link>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="asset-steps">
                                        <Steps current={current} onChange={this.onChange}>
                                            <Step />
                                            <Step />
                                            <Step />
                                        </Steps>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Form>
            </React.Fragment>
        )
    }
}

export default LiquidAssetView
