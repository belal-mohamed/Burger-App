import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './overrideBootstrap.css';
import './App.css';
import Header from './containers/Header/Header';
import Footer from './components/Footer/Footer';
import MoveToTop from './containers/MoveToTop/MoveToTop';
import HomePage from './HomePage/HomePage';
import NotFound from './UI/NotFound/NotFound';
import Spinner from './UI/Spinner/Spinner';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BackDrop from './BurgerBuilderPage/components/BackDrop/BackDrop';
// import Order from './Order/Order';
// import Auth from './Authentication/Auth';
import Logout from './Authentication/components/Logout';
import { connect } from 'react-redux';
import { authCheackState } from './store/actions/index';

const AsyncBurgerBuilderPage =
  React.lazy(() => import('./BurgerBuilderPage/BurgerBuilderPage')); // new way of lazyloading

const Auth =
  React.lazy(() => import('./Authentication/Auth'));

const Order =
  React.lazy(() => import('./Order/Order'));


class App extends React.Component {
  state = {
    show: false,
    loading: true
  };

  swapBackDrop = () => {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      }
    });
  }

  componentDidMount() {
    this.props.authCheackState();
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 1000)
  }

  render() {

    let root = (
      <Suspense fallback={<Spinner big={true} />}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/make-order" component={AsyncBurgerBuilderPage} />
          <Route path="/signup" exact component={Auth} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    )

    if (this.props.isAuthentication) {
      root = (
        <Suspense fallback={<Spinner big={true} />}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/make-order" component={AsyncBurgerBuilderPage} />
            <Route path="/orders" component={Order} />
            <Route path="/signup" exact component={Auth} />
            <Route path="/logout" exact component={Logout} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>

      )
    }
    return (
      <div className="App">
        {this.state.loading ? <Spinner big={true} /> : null}
        <BrowserRouter>
          <BackDrop
            show={this.state.show}
            swapBackDrop={this.swapBackDrop} />
          <Header
            swapBackDrop={this.swapBackDrop}
            show={this.state.show}
          />
          {root}
          {/* <Redirect from="/" to="error" /> */}
          <Footer />
          <MoveToTop />
        </BrowserRouter>
      </div>
    )
  }
}

const mapPropsToState = (state) => {
  return {
    isAuthentication: state.auth.token !== null
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    authCheackState: () => dispatch(authCheackState())
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(App);
