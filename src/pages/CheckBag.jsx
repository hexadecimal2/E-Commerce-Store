import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <div className="container">
            <div className="row">
                <div className="col-1">
                <Sidebar/>
                </div>
                <div className="col-9">
                <CheckBagItems/>
                </div>
                <div className="col-2">
                <Sidebag event = {() => gotToCheckoutPage()} caption = "Checkout" />
                </div>
            </div>
        </div>      
        </>
    )
}

export default CheckBag;