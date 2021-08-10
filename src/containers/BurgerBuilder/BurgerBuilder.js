import React , {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios/axios-orders';
import Spinner from '../../components/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            salad : 0,
            bacon: 0, 
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasing: false,
        loading: false
    };

    addIngredientsHandler = ( type ) => {
        const updateCount = this.state.ingredients[type] + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice, 
            ingredients: updateIngredients
        });
    }

    removeIngredientsHandler = (type) => {
        if ( this.state.ingredients[type] <= 0) console.log('button diabled')
        const updateCount = this.state.ingredients[type] - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({
            totalPrice: newPrice, 
            ingredients: updateIngredients
        });
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }    
    
    purchaseContinueHandler = () => {
        this.setState({loading: true});
        const order = {
            ingredients : this.state.ingredients,
            price: this.state.price,
            custuomer: {
                address: {
                    street: 'most4aren',
                    country: 'egypt'
                },
                email: 'bolbolmohamed488@yahoo.com',
            }
        }
        axios.post('/orders.json', order)
            .then( respone => this.setState({loading: false , purchasing: false}))
            .catch(err => this.setState({loading: false , purchasing: false}) );

    }
    render() {

        const disabled = {
            ...this.state.ingredients
        };

        for (let key in disabled) {
            key = disabled[key] = disabled[key] <= 0;
        }
        let orderSummary = <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCanclled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice.toFixed(2)} />

        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        let disabledOrder = Object.values(disabled).every(e => e === true);
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal> 
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    addIngredient={this.addIngredientsHandler} 
                    removeingredient={this.removeIngredientsHandler}
                    disabled={disabled}
                    price={this.state.totalPrice}
                    disO={disabledOrder}
                    ordered={this.purchaseHandler}/>
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder , axios);