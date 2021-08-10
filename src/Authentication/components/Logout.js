import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {logout, userComingFromWhere} from '../../store/actions/index';

class Logout extends Component {
    componentDidMount() {
        this.props.userComingFromWhere(null);
        this.props.logout();
    }

    render() {
        return <Redirect to='/' />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        userComingFromWhere:(location) => dispatch(userComingFromWhere(location))
    }
};

export default connect(null,mapDispatchToProps)(Logout)