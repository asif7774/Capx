import React, { Component } from 'react';
import { Button, List, Avatar } from 'antd';
import { Link } from "react-router-dom";
import { Container, Row, Col, SvgIcon } from '../common';
import "./liquid.scss";

const blockchainList = [
    {
        id: 1,
        icon: <SvgIcon name="ethereum-logo" viewbox="0 0 784.37 1277.39" />,
        name: "Ethereum",
    },
    {
        id: 2,
        icon: <SvgIcon name="binance-logo" viewbox="0 0 2500.01 2500" />,
        name: "Binance smart chain",
    },
    {
        id: 3,
        icon: <SvgIcon name="polygon-logo" viewbox="0 0 38.4 33.5" />,
        name: "Polygon (matic)",
    }
]

class LiquidView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBlockchain: 1
        };
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <div className="section-wrapper">
                    <Container>
                        <Row className="liquid-row">
                            <Col lg="7" md="6">
                                <h3>LIQUID VESTING</h3>
                                <h1>Create your own custom token lock instantly and issue wrapped token against the locked tokens</h1>
                                <p>All coins are locked into our audited smart contract and can only be withdrawn after the lock time expires by swapping it with the issued wrapped tokens</p>
                                <Button type="primary" className="mt-2">EXPLORE CONTRACT</Button>
                            </Col>
                            <Col lg="5" md="6">
                                <div className="liquid-right">
                                    <p>Choose the blockchain that your token you are locking is built on</p>
                                    <List
                                        dataSource={blockchainList}
                                        renderItem={item => (
                                            <List.Item key={item.id}
                                                className={
                                                    this.state.selectedBlockchain === item ? "selected" : ""
                                                }
                                                onClick={() => {
                                                    this.setState({
                                                        selectedBlockchain: item,
                                                    });
                                                }}
                                                actions={[<div className="select-radio"></div>]}
                                                >
                                                <List.Item.Meta
                                                    avatar={
                                                        <Avatar src={item.icon} />
                                                    }
                                                    title={item.name}
                                                     />
                                                </List.Item>
                                        )}
                                     />
                                    <Link to='/liquid-asset'><Button type="primary" className="px-5">Continue</Button></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default LiquidView
