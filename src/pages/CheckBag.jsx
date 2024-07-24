import React from 'react';
import CheckBagItems from '../components/CheckBagItems';
import Sidebag from '../components/Sidebag';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

const CheckBag = () => {
    return(
        <>
            <Sidebar/>
            <CheckBagItems/>
            <Link to={'/checkout'}><button>Checkout</button></Link>
            <Sidebag/>
        </>
    )
}

export default CheckBag;