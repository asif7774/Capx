import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from '../../common';
import "./liquid-asset-issued.scss";

// imaport images
import LogoImage from "../../../assets/images/logo.png";


class LiquidAssetIssuedView extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <div className="section-wrapper liquidassetissued-section">
                    <Container>
                        <Row>
                            <Col className="liquidassetissued-upper">
                                <p>Congratulations!</p>
                                <p className="mb-0">100,000 xASSET</p>
                                <p className="mb-0">have been issued to the address:</p>
                                <Link to="/liquid-asset-issued">0xcdd904a71c19d5dfb66b227f4acce23e532448d7</Link>
                            </Col>
                        </Row>
                        <Row className="liquidassetissued-bottom">
                            <Col sm="6">
                                <div className="bottom-cards">
                                    <div className="bottom-cards-inner">
                                        <img alt="logo" src={LogoImage} />
                                        <span></span>
                                        <p>EXCHANGE</p>
                                    </div>
                                </div>
                                <div className="details-text">Use Capx Exchange to buy or sell wrapped asset tokens on a marketplace</div>
                            </Col>
                            <Col sm="6">
                                <div className="bottom-cards">
                                    <div className="bottom-cards-inner">
                                        <img alt="logo" src={LogoImage} />
                                        <span></span>
                                        <p>LENDING</p>
                                    </div>
                                </div>
                                <div className="details-text">Use Capx lending to lend or borrow stablecoins against wrapped asset tokens</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default LiquidAssetIssuedView
