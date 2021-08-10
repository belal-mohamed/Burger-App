import React from 'react';
import classes from './BuildControl.module.css';
import PropTypes from 'prop-types';

const buildcontrol = (props) => {

    let bom = {
        animation: 'bom .2s ease-in-out 0s 1 none running'
    }

    if (!props.price) bom = null;
    
    return (
        <div className={classes.BuildControl}>
            <div className={classes.SaladDiv}>
                <button onClick={() => props.increase('Salad')}> + </button>
                <span className={classes.Lable}> Salad </span>
                <button disabled={!props.disableSalad} onClick={() => props.decrease('Salad')}> - </button>
            </div>
            <div className={classes.BaconDiv}>
                <button onClick={() => props.increase('Bacon')}> + </button>
                <span className={classes.Lable}> Bacon </span>
                <button disabled={!props.disableBacon} onClick={() => props.decrease('Bacon')}> - </button>
            </div>
            <div className={classes.CheeseDiv}>
                <button onClick={() => props.increase('Cheese')}> + </button>
                <span className={classes.Lable}> Cheese </span>
                <button disabled={!props.disableCheese} onClick={() => props.decrease('Cheese')}> - </button>
            </div>
            <div className={classes.MeatDiv}>
                <button onClick={() => props.increase('Meat')}> + </button>
                <span className={classes.Lable}> Meat </span>
                <button disabled={!props.disableMeat} onClick={() => props.decrease('Meat')}> - </button>
            </div>
            <span className={classes.Price}> {` Your Price Is ${props.price} $`}  </span>
            <button
                style={bom}
                disabled={!props.price}
                onClick={props.orderButton}>
                <strong> Order Now </strong>
            </button>
        </div>
    )
}

buildcontrol.propTypes = {
    increase: PropTypes.func,
    disableSalad: PropTypes.number,
    disableMeat: PropTypes.number,
    disableBacon: PropTypes.number,
    disableCheese: PropTypes.number
};

export default buildcontrol;
