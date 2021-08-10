import React from 'react';
import './Why.module.css';
import { Container, Row, Col } from 'react-bootstrap'
import classes from './Why.module.css';
import burgerphoto from '../../../images/whyimages/burgerphoto.png';

const Why = (props) => (
    <div className={classes.why}>
        <Container >
            <Row
                className="justify-content-center align-items-lg-center align-items-md-center align-items-sm-center">
                <Col lg={4} md={4} sm={4} xs={8} >
                    <img
                        className={classes.burgerimg}
                        src={burgerphoto}
                        alt="Burger"
                    /> </Col>
                <Col lg={8} md={8} sm={8} xs={12} >
                    <h2> Why We Are the Best Choice </h2>
                    <p>
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The point of
                        using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                        as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Why;