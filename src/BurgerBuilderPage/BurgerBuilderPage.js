import React from 'react';
import Burger from './containers/Burger/Burger';
import Successful from './components/Successful/Successful';
// import ContactData from './containers/ContactData/ContactData';
import {Route, Switch} from 'react-router-dom';
import NotFound from '../UI/NotFound/NotFound';

const ContactData = React.lazy(() => (
    import('./containers/ContactData/ContactData')
));

const burgerBuilderPage = ( props ) => {
    return(
        <Switch>
            <Route path="/make-order" exact component={Burger}/>
            <Route path={props.match.url + '/successful'} exact component={Successful}/>
            <Route path={props.match.url + '/contact-data'} exact component={ContactData} />
            {/* <Redirect to="error" /> */}
            <Route component={NotFound} />
        </Switch>
    )
}

export default burgerBuilderPage;