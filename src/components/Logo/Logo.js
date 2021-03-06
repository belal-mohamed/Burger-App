import React from 'react';
import classes from './Logo.module.css';
import burgerlogo from '../../assests/images/burger-logo.png.png';

const logo = ( props ) => (
    <div className={classes.Logo}>
        <img src={burgerlogo} alt="MyBurger"/>
    </div>
)

export default logo;