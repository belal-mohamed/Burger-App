import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Balad', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const BuildControls = ( props ) => (
    <div className={classes.BuildControls}>
        <p> Current Price : {props.price.toFixed(2)}</p>
        {controls.map( ctr => {
            return <BuildControl 
            key={ctr.label}
            label={ctr.type}
            added={() => props.addIngredient(ctr.type)}
            removeingredient={() => props.removeingredient(ctr.type)} 
            disabled={props.disabled[ctr.type]}/>
        })}
        <button className={classes.OrderButton}
                disabled={props.disO} 
                onClick={props.ordered}> ORDER NOW </button>
    </div>
);


export default BuildControls;