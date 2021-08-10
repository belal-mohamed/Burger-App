import React from 'react';
import classes from './NavigationItems.module.css';
import Navigationitem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
        <Navigationitem link="/"> Burger Builder</Navigationitem>
        <Navigationitem link="/"> CheckOut</Navigationitem>
    </ul>
);

export default navigationItems;