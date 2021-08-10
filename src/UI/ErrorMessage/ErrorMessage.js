import React from 'react';
import sadBurger from '../../images/others/went-wrong.png';

const errorMessage = () => (
    <div style={{ margin: '100px auto 30px', display: 'block', width: '50%' }}>
        <img 
            alt="SomeThing Went Wrong"
            src={sadBurger} 
            style={{ maxWidth: '100%', margin: 'auto', display: 'block' }} />
    </div>
)

export default errorMessage;