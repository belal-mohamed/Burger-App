import React, {Fragment , Component} from 'react';
import Aux from '../Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigator/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigator/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    openHandler = () => {
        this.setState({showSideDrawer: true});
    }

    render() {
        return(
            <Aux>
                <Toolbar open={this.openHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;