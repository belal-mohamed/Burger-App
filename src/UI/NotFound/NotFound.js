import React from 'react';
import sadBurger from '../../images/others/notfound.png';
import classes from './NotFound.module.css';
import Button from '../Button/Button';
import {Link} from 'react-router-dom';

const errorMessage = () => (
    <div className={classes.ErrorMessage}>
        <div className={classes.NotFound} >
            <img 
                alt="Somthing Went Wrong"
                src={sadBurger} />
            <h2> Page Not Found </h2>
            <Link to="/">
                <Button> Home </Button>
            </Link>
        </div>
    </div>
)

export default errorMessage;