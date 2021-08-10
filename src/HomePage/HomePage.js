import React from 'react';
import Slider from './components/Slider/Slider';
import Why from './components/Why/Why';
import Ingredient from './containers/Ingredient/Ingredient';
import Order from './components/Order/Order';

const HomePage = ( props ) => {
    return(
        <div onClick={props.swapBackDrop}>
            <Slider />
            <Why />
            <Ingredient />
            {/* <BestMeals /> */}
            <Order />
        </div>
    )
};

export default HomePage;