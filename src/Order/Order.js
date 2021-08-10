import React, { Component } from 'react';
import classes from './Order.module.css';
import axios from '../axios-orders';
import Spinner from '../UI/Spinner/Spinner';
import {connect} from 'react-redux';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';

class Order extends Component {
    state = {
        ordersData: null,
        dataNotEqualNull: false,
        spinner: true,
        error: false
    };

    componentDidMount() {
        let queryParams = '?auth=' + this.props.token + '&orderBy="userId"&equalTo="' + this.props.userId + '"';
        axios.get('/order.json' + queryParams)
            .then((res) => {
                let ordersData = [];
                if (!(JSON.stringify(res.data) === '{}')) {
                    for (const order of Object.entries(res.data)) {
                        ordersData.push(order)
                    }
                    this.setState({
                        ordersData: ordersData,
                        dataNotEqualNull: true,
                        spinner: false
                    });
                }
                this.setState({
                    spinner: false
                })
            }).catch( (err) => {
                this.setState({
                    spinner:false,
                    error: true
                });
            })
    }

    render() {
        let orders = <div className={classes.Order} style={{margin: '5% auto 5%'}}>
            <div className={classes.InnerOrder} >
                <div className={classes.Circle}>  0 </div>
                <h5> There Are No Orders Yet </h5>
            </div>
        </div>;

        if (this.state.dataNotEqualNull) {
            orders = this.state.ordersData.map((order, index) => {
                return (
                    <div className={classes.InnerOrder} key={order[0]}>
                        <div className={classes.Circle}> {index + 1} </div>
                        <h6> YOUR INGREDIENTS </h6>
                        <ul>
                            <li> Salad: {order[1].ingredients.Salad} </li>
                            <li> Bacon: {order[1].ingredients.Bacon} </li>
                            <li> Cheese: {order[1].ingredients.Cheese} </li>
                            <li> Meat: {order[1].ingredients.Meat} </li>
                        </ul>
                        <span> Your Price is {order[1].price} $</span>
                    </div>
                )
            })
        }
        return (
            this.state.spinner ? <Spinner big={true} /> :
                <div className={classes.Order}>
                    {this.state.error ? <ErrorMessage /> : orders}
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        userId: state.auth.userId
    }
};

export default connect(mapStateToProps)(Order);