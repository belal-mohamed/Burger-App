import React from 'react';
import classes from './OrderSummary.module.css';
// import BackDrop from '../BackDrop/BackDrop';
import PropTypes from 'prop-types';

const ordersummary = (props) => {
    let ing = Object.entries(props.ingredients).map((e , i) => {
        return <li className={classes.List} key={e[0] + i}>  {`${e[0]} : ${e[1]}`} </li>
    })

    return (
        <div className={classes.OrderSummary}>
            <h5> Amazing Choice !! </h5>
            <p> Your Order Contains Following Ingredients </p>
            <ul>
                {ing}
            </ul>
            <p style={{color: '#e6281f'}}> <strong> {`Total Price : ${props.totalPrice}`} </strong></p>
            <div>
                <button onClick={props.removeOrderSummary}> Cancel </button>
                <button onClick={props.submitOrder}> {props.isAuthentication ? 'Continue' : 'SignUp To Continue'} </button>
            </div>
        </div>
    )
};

ordersummary.propTypes = {
    totalPrice: PropTypes.number,
    removeOrderSummary: PropTypes.func
};

export default ordersummary;