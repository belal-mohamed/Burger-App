import React , {Component} from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import BackDrop from '../BackDrop/BackDrop';

class Modal extends Component {

    componentDidUpdate() {
        console.log('Modal Is Update')
    }

    shouldComponentUpdate(nextProps , nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    render() {
        return(
            <Aux>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        visibility: this.props.show ? 'visible' : 'hidden',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;