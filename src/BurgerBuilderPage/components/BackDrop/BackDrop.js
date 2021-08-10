import React, { Component } from 'react';
import classes from './BackDrop.module.css';
// onClick={this.props.removeBackDrop}

class BackDrop extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.show !== nextProps.show;
    }
    
    render() {
        return (
            this.props.show ? <div className={classes.BackDrop} onClick={this.props.swapBackDrop}></div> : null
        )
    }
}

export default BackDrop;