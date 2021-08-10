import React from 'react';
import { NavLink} from 'react-router-dom';

const NavigationItems = (props) => (
    <div >
        <ul>
            <li> <NavLink
                to="/"
                exact
                activeClassName="myHomeActive"> Home </NavLink> </li>
            <li> <NavLink
                to="/make-order"
                activeClassName="active-nav"> Make-Order </NavLink> </li>
            {props.isAuth ?
                <li> <NavLink
                    to="/orders"
                    activeClassName="active-nav"> Orders </NavLink> </li>
                : null}
            {!props.isAuth ?
                <li> <NavLink
                    to="/SignUp"
                    activeClassName="active-nav"> SignUp </NavLink> </li>
                : <li> <NavLink
                    to="/logout"
                    activeClassName="active-nav"> Logout </NavLink> </li>}
        </ul>
    </div>
)




export default NavigationItems;