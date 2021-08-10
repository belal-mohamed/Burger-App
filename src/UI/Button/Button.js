import React from 'react';
import classes from './Button.module.css';

const Button = (props) => (
    <button 
        className={classes.OrderButtonStyle}
        disabled={props.disabled}
        onClick={props.clicked}>
        <span className={classes.SpanButton}>  {props.children} </span>
    </button>
)

export default Button;
