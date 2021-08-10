import React, { Component } from 'react';
import './Burger.css';
import Buildcontrol from '../../components/BuildControl/BuildControl';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import BackDrop from '../../components/BackDrop/BackDrop';
import Spinner from '../../../UI/Spinner/Spinner';
import { connect } from 'react-redux';
import { increaseIngredient, decreaseIngredient, userComingFromWhere } from '../../../store/actions/index';

class Burger extends Component {
    state = {
        orderButtonActive: false,
        requestOrderSend: null,
        requestFaild: false
    };

    orderButtonHandler = () => {
        this.setState({
            orderButtonActive: true
        });
    }

    removeOrderSummary = () => {
        this.setState({
            orderButtonActive: false
        });
    }

    submitOrder = () => {
        if (this.props.isAuthentication){
            this.props.history.push({
                pathname: this.props.match.url + '/contact-data',
            });
        }
        else {
            this.props.userComingFromWhere('burgerBuilderPage');
            this.props.history.push('/signup');
        }
    }

    render() {
        let ingredients = null;
        ingredients = Object.entries(this.props.ingredients) //generate 2d array [[salad,0] , [bacon,0] ... etc]
            .map((e) => {
                return [...Array(e[1])].map((_, i) => {
                    return <div className={e[0]} key={e[0] + i}></div>
                })
            }).reduce((arr, el) => arr.concat(el));
        if (ingredients.length === 0) ingredients = <div style={{ fontWeight: 'bold' }}> Start Adding Ingredients </div>
        let orderSummary = <OrderSummary
            ingredients={this.props.ingredients}
            removeOrderSummary={this.removeOrderSummary}
            totalPrice={this.props.totalPrice}
            submitOrder={this.submitOrder}
            isAuthentication={this.props.isAuthentication} />;
        if (this.state.requestOrderSend && !this.state.requestFaild) {
            orderSummary = <Spinner />
        }

        return (
            // padding to prevent margin collapse and make BackDrop in good shape
            <div style={{ padding: '0.05px' }} >
                <BackDrop
                    show={this.state.orderButtonActive}
                    removeBackDrop={this.removeOrderSummary} />
                <div className="main-burger">
                    {this.state.orderButtonActive ? orderSummary : null}
                    <div className="BurgerIngredients">
                        <div className="BreadTop">
                            <div className="Seeds1"></div>
                            <div className="Seeds3"></div>
                            <div className="Seeds4"></div>
                        </div>
                        {ingredients}
                        <div className="BreadBottom">
                            <div className="Seeds2"></div>
                        </div>
                    </div>
                    <Buildcontrol
                        increase={this.props.increaseIngredientHandler}
                        decrease={this.props.decreaseIngredientHandler}
                        disableMeat={this.props.ingredients.Meat} // send value of meat if 0 button will lock any other number will unlock
                        disableSalad={this.props.ingredients.Salad} // send value of salad if 0 button will lock any other number will unlock
                        disableCheese={this.props.ingredients.Cheese} // send value of cheese if 0 button will lock any other number will unlock
                        disableBacon={this.props.ingredients.Bacon} // send value of ingredients if 0 button will lock any other number will unlock
                        price={this.props.totalPrice}
                        orderButton={this.orderButtonHandler}
                    />

                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ing.ingredients,
        totalPrice: state.ing.totalPrice,
        price: state.ing.price,
        isAuthentication: state.auth.token
    };
};

const mapDispatchToProp = dispatch => {
    return {
        increaseIngredientHandler: (ingType) => dispatch(increaseIngredient(ingType)),
        decreaseIngredientHandler: (ingType) => dispatch(decreaseIngredient(ingType)),
        userComingFromWhere: (burgerBuilderPage) => dispatch(userComingFromWhere(burgerBuilderPage))
    }
}



export default connect(mapStateToProps, mapDispatchToProp)(Burger);
//withErrorHandler in case of api dosn't sent successfuly will print fallback ui " something went wrong"