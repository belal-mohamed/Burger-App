import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import {Redirect} from 'react-router-dom';

class Auth extends Component {

    state = {
        inSignUp: true,
        email: '',
        password: ''
    };

    changeSignPageHandler = () => {
        this.setState(prevState => {
            return {
                inSignUp: !prevState.inSignUp
            };
        });
    }

    changeInputValueHandler(e, elementName) {
        this.setState({
            [elementName]: e.target.value
        });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.auth(this.state.email, this.state.password, this.state.inSignUp);
    }

    render() {
        let errorMessage = null;
        
        if (this.props.error) {
            switch (this.props.error.message) {
                case 'INVALID_EMAIL':
                    errorMessage = 'Email Is Invalid';
                    break;
                case 'MISSING_EMAIL':
                    errorMessage = 'Email Is Required';
                    break;
                case 'MISSING_PASSWORD':
                    errorMessage = 'Password Is Required'
                    break;
                case'WEAK_PASSWORD : Password should be at least 6 characters':
                    errorMessage = 'Password Contains at Least 6 characters'  
                    break;
                case 'EMAIL_EXISTS':
                    errorMessage = 'Email Is Already Exist';
                    break;
                case 'INVALID_PASSWORD':
                    errorMessage = 'Password Is Wrong'
                    break;
                case 'EMAIL_NOT_FOUND':
                    errorMessage = 'Email Not Found, Click Sign Up To Create New Account';
                    break;   
                default:
                    errorMessage = this.props.error.message;
                    break;
            }
        }

        let redirect = null;

        if(this.props.isAuthentication && this.props.userComingFromWhere === 'burgerBuilderPage') {
            redirect = <Redirect to='/make-order/contact-data' />
        }

        else if (this.props.isAuthentication ) {
            redirect = <Redirect to='/' />
        }

        return (
            <div className={classes.Auth}>
                <div className={classes.InnerAuth}>
                    {this.props.loading ? <Spinner /> : null}
                    <h5>{this.state.inSignUp ? 'Create Your Account' : 'Logn In'} </h5>
                    <span className={classes.Email}></span>
                    <form onSubmit={this.onSubmitHandler} noValidate>
                        <input
                            type="email"
                            placeholder="Enter Your E-mail"
                            value={this.state.email}
                            onChange={(e) => this.changeInputValueHandler(e, 'email')} />
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            value={this.state.password}
                            onChange={(e) => this.changeInputValueHandler(e, 'password')} />
                        <Button> Submit </Button>
                        <div
                            className={classes.Already}>
                            {this.state.inSignUp ? 'Already Registered ? ' : 'Create New Account ? '}
                            <span onClick={this.changeSignPageHandler}>{this.state.inSignUp ? 'SignIn' : 'SignUp'} </span></div>
                    </form>
                    {errorMessage ? 
                    <div className={classes.ErrorMessage}>
                        <span className={classes.InnerError}> {errorMessage} </span>
                    </div> 
                    : null}
                {redirect}
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthentication: state.auth.token !== null,
        userComingFromWhere: state.auth.userComingFromWhere
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        auth: (email, password, isSignUp) => dispatch(actions.auth(email,password, isSignUp))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);