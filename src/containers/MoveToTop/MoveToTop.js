import React, { Component } from 'react';
import classes from './MoveToTop.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

class MoveToTop extends Component {
    state = {
        opacity: '0',
        visibility: 'hidden'
    };

    componentDidMount() {
        window.addEventListener('scroll', () => {
            window.pageYOffset > 150 ? this.setState({
                opacity: '1',
                visibility: 'visible'
            }) : this.setState({
                opacity: '0',
                visibility: 'hidden'
            });
        })
    }

    moveTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div
                className={classes.MoveToTop}
                style={{
                    opacity: this.state.opacity,
                    visibility: this.state.visibility
                }}>
                <span className={classes.Arrow} onClick={this.moveTop}>
                    <FontAwesomeIcon icon={faAngleUp} />
                </span>
            </div>
        )
    }
}

export default MoveToTop;