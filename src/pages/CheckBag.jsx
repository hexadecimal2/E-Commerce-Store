import React from 'react';
import CheckBagItems from '../components/CheckBagItems';
import Sidebag from '../components/Sidebag';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const CheckBag = () => {
    const navigate = useNavigate()

    const gotToCheckoutPage=()=>{
        navigate('/checkout');
    }
    return(
        <>
            <Sidebar/>
            <CheckBagItems/>
            <button onClick={() => gotToCheckoutPage()}>Checkout</button>
            <Sidebag/>
        </>
    )
}

export default CheckBag;