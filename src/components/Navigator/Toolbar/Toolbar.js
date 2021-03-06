import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <div 
            className={classes.DrawerToggle} 
            onClick={props.open}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className={classes.Logo}> 
            <Logo /> 
        </div>
        <nav className={classes.HideNav}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;