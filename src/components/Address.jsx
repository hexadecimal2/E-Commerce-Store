import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const Address = () => {
   
    const address = useSelector((state) => state.address.address[0]);

  if (!address) {
    return (
        <>
    <h1>SHIPPING ADDRESS</h1> 
    <p>No address added yet.</p>
    <Link to={'/add-address'}><button>Add Address</button></Link>
    </>
    )
  }

  const { shippingName, streetName, city, stateProvince, country } = address;

    return(
        <div>
            <h1>SHIPPING ADDRESS</h1>
            <p>
                {shippingName} <br />
                {streetName} <br />
                {city}, {stateProvince}, {country}
            </p>
            <Link to={'/add-address'}><button>Change</button></Link>
        </div>
    )
    
}

export default Address;