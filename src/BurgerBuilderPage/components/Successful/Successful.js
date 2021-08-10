import React from 'react';
import happyBurger from '../../../images/others/successful-order.png';

const successful = ( props ) => {
    return(
        <div className="successful-order">
            <img
                alt='successful order'
                src={happyBurger}
                style={{ maxWidth: '100%', margin: 'auto', display: 'block' }} />
        </div>
    )
}

export default successful;