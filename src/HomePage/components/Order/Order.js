import React from 'react';
import classes from './Order.module.css';
import { Container , Row, Col } from 'react-bootstrap';
import burger from '../../../images/whyimages/b.png';
import {Link} from 'react-router-dom';

const Order = (props) => (
    <div className={classes.Order}>
        <Container>
            <Row className="align-items-center">
                <Col md={8} sm={12}>
                    <div className={classes.Lets}>
                        <h3 className={classes.h3style}> Let's Make Big Burger </h3>
                        <h6> Now You Can Make Your Big Burger Just A Few Steps </h6>
                        <p> 1- go ahead and click the below button </p>
                        <p> 2- choose your favourite ingredients </p>
                        <p> 3 - write your information and click on submit</p>
                        <p> 4 - let the rest on us </p>
                        <button className={classes.OrderButtonStyle + " offset-lg-4 offset-md-5"}>
                            <Link to="/make-order"> <span className={classes.SpanButton}> Make Order </span> </Link>
                        </button>
                    </div>
                </Col>
                <Col md={4} sm={12}>
                    <img 
                        className={classes.BurgerPhoto} 
                        src={burger} 
                        alt="burger"/>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Order;