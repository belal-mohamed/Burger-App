import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = ( props ) => {
    const ingredientsSummary = Object.keys(props.ingredients)
    .map( igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
            </li>)
    });

    return(
        <Aux>
            <h3> Your Order </h3>
            <p>A Delicious Burger With The Following Ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p> <strong>Your Total Price : {props.price}</strong> </p>
            <p> Continue To Cheackout? </p>
            <Button btnType="Danger" clicked={props.purchaseCanclled}> Cancel </Button>
            <Button btnType="Success" clicked={props.purchaseContinued}> Continue </Button>
        </Aux>
    );
};

export default OrderSummary;