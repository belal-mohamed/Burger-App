import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    };
};

export const authSucess = (token, userId) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('localId');
    return {
        type:actionTypes.LOG_OUT
    }
};

export const cheackExpireDate = (expireDate) => {
    return dispatch => {
        setTimeout( () => {
            dispatch(logout())
        }, expireDate * 1000)
    }
}

export const auth = (email, password, inSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDJasZSYU9jog0gta9nA3gmAIhZXih6lXw';
        if ( !inSignUp ) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDJasZSYU9jog0gta9nA3gmAIhZXih6lXw'
        }
        axios.post(url, authData)
            .then(res => {
                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('expirationDate', new Date( new Date().getTime() + res.data.expiresIn * 1000));
                localStorage.setItem('localId', res.data.localId);
                dispatch(authSucess(res.data.idToken,res.data.localId));
                dispatch(cheackExpireDate(res.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error))
            })
    }
};

export const authCheackState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token) {
            return
        }
        else {
            const expirationDate = new Date(localStorage.getItem('expirationDate')); //convert date string to object
            if(expirationDate <= new Date()) {
                dispatch(logout())
            }else {
                dispatch(authSucess(token, localStorage.getItem('localId')))
                dispatch(cheackExpireDate( (expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}