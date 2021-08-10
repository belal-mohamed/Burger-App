import React from 'react';
import classes from './ContactData.module.css';
import Button from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import validation from '../../../shared/validation';

class ContactData extends React.Component {
    state = {
        customerData: {
            name: '',
            tel: '',
            address: '',
            city: '',
            zip: ''
        },
        requestOrderSend: null,
        requestFaild: false,
        totalPrice: 0,
        validation: false,
        zipErrorMessage: '',
        nameErrorMessage: '',
        telErrorMessage: '',
        addressErrorMessage: '',
        cityErrorMessage: '',
        zipValidation: false,
        nameValidation: false,
        telValidation: false,
        addressValidation: false,
        cityValidation: false

    };

    goBack = (e) => {
        e.preventDefault();
        this.props.history.goBack();
    }

    sendData = (e) => {
        e.preventDefault();
        if (this.state.zipValidation && this.state.cityValidation && this.state.telValidation && this.state.nameValidation && this.state.addressValidation) {
            this.setState({ //To Make Spinner Before Request finish loading
                requestOrderSend: true
            });
            const order = {
                ingredients: this.props.ingredients,
                price: this.props.totalPrice,
                customerData: this.state.customerData,
                userId: this.props.userId
            };

            axios.post('/order.json?auth=' + this.props.token, order)
                .then(response => {
                    this.setState({
                        requestOrderSend: false, // To End The Spinner
                        orderButtonActive: false // To End The Spinner
                    });
                    if (!this.state.requestOrderSend) {
                        this.props.history.push('/make-order/successful');
                    }
                })
        } else {
            this.checkValidation(this.state.customerData,'name')
            this.checkValidation(this.state.customerData,'zip')
            this.checkValidation(this.state.customerData,'address')
            this.checkValidation(this.state.customerData,'city')
            this.checkValidation(this.state.customerData,'tel')
        }

    }

    changeValueStateHandler = (event, type) => {
        const cloneData = {
            ...this.state.customerData
        };
        cloneData[type] = event.target.value;
        this.setState({
            customerData: cloneData
        });

        this.checkValidation(cloneData, type);
    }

    checkValidation = (cloneData, type) => {

        const inputValidation = type + 'Validation';
        const inputMessage = type + 'ErrorMessage';
        
        let {valid, errorMessage} = validation(cloneData[type], type);
        
        if (valid) {
            this.setState({
                [inputMessage]: errorMessage,
                [inputValidation]: true
            })
        }
        else {
            this.setState({
                [inputMessage]: errorMessage,
                [inputValidation]: false
            })
        }
    }
    
    render() {
        let redirectUnAuthUsers = null;
        if (!this.props.token) {
            redirectUnAuthUsers = <Redirect to='/SignUp' />
        }

        return (
            <div className={classes.ContactData}>
                {this.state.requestOrderSend ? <Spinner /> : null}
                <div className={classes.InnerContact}>
                    <h5 className={classes.FormHeader}> Enter Your Contact Data </h5>
                    <div className={classes.Email}></div>
                    <form className={classes.Form}>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            value={this.state.customerData.name}
                            onChange={(e) => this.changeValueStateHandler(e, 'name')} />
                        <div 
                            className={this.state.nameValidation ? classes.Approved : classes.Error}>
                            {this.state.nameErrorMessage} </div>
                        <input
                            type="tel"
                            placeholder="Enter Your Phone"
                            value={this.state.customerData.phone}
                            onChange={(e) => this.changeValueStateHandler(e, 'tel')} />
                        <div 
                            className={this.state.telValidation ? classes.Approved : classes.Error}> 
                            {this.state.telErrorMessage}</div>
                        <input
                            type="text"
                            placeholder="Enter Your Address"
                            value={this.state.customerData.address}
                            onChange={(e) => this.changeValueStateHandler(e, 'address')} />
                        <div 
                            className={this.state.addressValidation ? classes.Approved : classes.Error}> 
                            {this.state.addressErrorMessage} </div>
                        <input
                            type="text"
                            placeholder="Enter Your City"
                            value={this.state.customerData.city}
                            onChange={(e) => this.changeValueStateHandler(e, 'city')} />
                        <div 
                            className={this.state.cityValidation ? classes.Approved : classes.Error}> 
                            {this.state.cityErrorMessage}</div>
                        <input
                            type="num"
                            placeholder="Enter Your Zip"
                            value={this.state.customerData.zip}
                            onChange={(e) => this.changeValueStateHandler(e, 'zip')} />
                        <div 
                            className={this.state.zipValidation ? classes.Approved : classes.Error}> 
                            {this.state.zipErrorMessage} </div>
                        <div className={classes.Button}>
                            <Button clicked={this.goBack}>
                                Go Back
                            </Button>
                        </div>
                        <div className={classes.Button}>
                            <Button
                                type="submit"
                                clicked={this.sendData}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
                {redirectUnAuthUsers}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ing.ingredients,
        totalPrice: state.ing.totalPrice,
        token: state.auth.token,
        userId: state.auth.userId
    };
};


export default connect(mapStateToProps)(withErrorHandler(ContactData, axios));

/* if we move api to redux will still able to handle the error
 request because we use axios instance */