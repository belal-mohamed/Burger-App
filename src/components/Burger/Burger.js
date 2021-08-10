import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ( props ) =>  {
    // const transformedIngredients = Object.keys(props.ingredients)
    // .map(igkey => {
    //     return [...Array(props.ingredients[igkey])].map((_ , i) => {
    //         return <BurgerIngredient key={igkey + i} type={igkey} />
    //     })
    // });

    const myfunn = (igkey) => {
        const arrC = [];
        for(let i = 0; i < props.ingredients[igkey]; i++) {
            arrC[i] = <BurgerIngredient key={igkey + i} type={igkey}/>
        }
        return arrC;
    }

    let transformedIngredients = Object.keys(props.ingredients)
    .map(igkey => {
        return myfunn(igkey);
    });

    if (transformedIngredients.toString() === ',,,') {
        transformedIngredients = 'enter your ingredients';
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default Burger;