import React from 'react';
import {Carousel } from 'react-bootstrap';
import pic1 from '../../../images/slider images/1.jpg';
import pic2 from '../../../images/slider images/2.jpg';
import pic3 from '../../../images/slider images/3.jpg';
import classes from './Slider.module.css';

const Slider = (props) => {

    const sildePicSize = {
        maxHeight:'725px'
    }

    const orange = {
        fontWeight: 'lighter',
        backgroundColor: 'rgba(212, 113, 14, 0.5)'
    }

    return (
        <div className={classes.slider}>
            <Carousel>
                <Carousel.Item interval={6000}>
                    <img
                        className="d-block w-100"
                        src={pic2}
                        alt="First slide"
                        style={sildePicSize}
                    />
                    <Carousel.Caption>
                        <h3 style={orange}>Are Your Ready to Taste ?</h3>
                        <p className={classes.hide} style={orange} >best burger in middle east with amazing ingredient</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img
                        className="d-block w-100"
                        src={pic1}
                        alt="Third slide"
                        style={sildePicSize}
                    />
                    <Carousel.Caption>
                        <h3 style={orange}> Order now and get the burger </h3>
                        <p  className={classes.hide} style={orange}>Ordering Online Is easy , Paying Is Easier </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic3}
                        alt="Third slide"
                        style={sildePicSize}
                    />
                    <Carousel.Caption>
                        <h3 style={orange}>Order Two And Get Three Burger </h3>
                        <p className={classes.hide} style={orange}> What Are Your Waiting For , It Is Amazing Offer </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}


export default Slider;
