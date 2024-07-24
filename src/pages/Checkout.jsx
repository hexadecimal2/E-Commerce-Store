import React from 'react';
import CheckBagItems from '../components/CheckBagItems';
import Address from '../components/Address';
import Payment from '../components/Payment';

const Checkout = () => {
   
    return(
        <div>
            <div>
                <Address/>
            </div>
            <div>
                <Payment/>
            </div>
            <div>
                <CheckBagItems/>
            </div>

        </div>
    )
}

export default Checkout;