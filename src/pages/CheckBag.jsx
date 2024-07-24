import React from 'react';
import CheckBagItems from '../components/CheckBagItems';
import Sidebag from '../components/Sidebag';
import Sidebar from '../components/Sidebar';

const CheckBag = () => {
    return(
        <>
            <Sidebar/>
            <CheckBagItems/>
            <Sidebag/>
        </>
    )
}

export default CheckBag;