import React, { Component } from 'react';
import { Button, Table } from 'antd';
import { Container, Row, Col } from '../common';
import "./exchange.scss";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 180,
    },
    {
        title: 'Blockchain',
        dataIndex: 'blockchain',
        key: 'blockchain',
        width: 110
    },
    {
        title: 'No. of tokens',
        dataIndex: 'nooftokens',
        key: 'nooftokens',
        width: 120
    },
    {
        title: 'Token Market price',
        dataIndex: 'tokenmarketprice',
        key: 'tokenmarketprice',
        render: text => <span>${text}</span>,
        width: 150
    },
    {
        title: 'Selling price',
        dataIndex: 'sellingprice',
        key: 'sellingprice',
        render: text => <span>${text}</span>,
        width: 110
    },
    {
        title: 'Discount',
        dataIndex: 'discount',
        key: 'discount',
        render: text => <span>{text}%</span>,
        width: 110
    },
    {
        title: 'Locking Period',
        dataIndex: 'lockingperiod',
        key: 'lockingperiod',
        render: text => <span>{text}days</span>,
        width: 110
    },
    {
        title: 'Deal Amount',
        dataIndex: 'dealamount',
        key: 'dealamount',
        render: text => <span>${text}</span>,
        width: 110
    },
    {
        title: '',
        dataIndex: 'buybtn',
        key: 'buybtn',
        render: text => <Button type="secondary" size="small">{text}</Button>,
        fixed: 'right',
        width: 110
    },
]

const data = [
    {
        key: '1',
        name: 'ABC Token',
        blockchain: "BSC",
        nooftokens: '100,000',
        tokenmarketprice: "4.5",
        sellingprice: "3.6",
        discount: "20",
        lockingperiod: "100",
        dealamount: "36000",
        buybtn: "Buy"
    },
    {
        key: '2',
        name: 'ABC Token',
        blockchain: "BSC",
        nooftokens: '100,000',
        tokenmarketprice: "4.5",
        sellingprice: "3.6",
        discount: "20",
        lockingperiod: "100",
        dealamount: "36000",
        buybtn: "Buy"
    },
    {
        key: '3',
        name: 'ABC Token',
        blockchain: "BSC",
        nooftokens: '100,000',
        tokenmarketprice: "4.5",
        sellingprice: "3.6",
        discount: "20",
        lockingperiod: "100",
        dealamount: "36000",
        buybtn: "Buy"
    }
];

class ExchangeView extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <div className="section-wrapper exchangewrapper-top">
                    <Container>
                        <Row>
                            <Col className="exchangewrapper-topinner">
                                <h1>Want to sell your wrapped vesting tokens?</h1>
                                <Button type="primary">Create a bid</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section-wrapper mt-3">
                    <Container>
                        <Row>
                            <Col>
                                <div className="table-wrapper">
                                    <Table columns={columns} dataSource={data} pagination={false} />
                                </div>
                                <div className="text-center mt-3">
                                    <Button type="primary">EXPLORE ALL DEALS</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container> 
                </div>
            </React.Fragment>
        )
    }
}

export default ExchangeView
