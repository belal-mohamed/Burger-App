import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import logo from '../../images/header images/logo.png';
import classes from './Header.module.css';
// import StaticHeader from './StaticHeader/StaticHeader';
import NavigationItems from './NavigationItems/NavigationItems';
import { Link } from 'react-router-dom';
import DropList from './DropList/DropList';
import { connect } from 'react-redux';

class Header extends Component {
    state = {
        opacity: '1'
    };

    componentDidMount() {
        window.addEventListener('scroll', () =>
            window.pageYOffset > 0 ? this.setState({
                opacity: '0.8',
            }) : this.setState({
                opacity: '1',
            })
        )
    }

    render() {
        return (
            <nav style={{
                opacity: this.state.opacity,
            }}>
                <Container className={classes.innernav}>
                    <Row className="justify-content-between">
                        <div className={classes.brand}>
                            <div className={classes.innerbrand}>
                                <Link to="/">
                                    <img src={logo}
                                        className={classes.logo}
                                        alt="My Burger"
                                        title="My Burger" />
                                </Link>
                            </div>
                        </div>
                        <div className={classes.list}>
                            <NavigationItems isAuth={this.props.isAuth}/>
                        </div>
                        <DropList
                            swapBackDrop={this.props.swapBackDrop}
                            show={this.props.show}
                            isAuth={this.props.isAuth} />
                    </Row>
                </Container>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token
    };
};

export default connect(mapStateToProps)(Header);
