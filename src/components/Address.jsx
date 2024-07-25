import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Address.css'

const Address = () => {
   
    const address = useSelector((state) => state.address.address[0]);

  if (!address) {
    return (
        <div className='no-address-container'>
            <div className='no-address-content'>
                <h2>SHIPPING ADDRESS</h2> 
                <p>No address added yet.</p>
            </div>
            <Link to={'/add-address'}><button className='btn-no-address'>Add Address</button></Link>
        </div>
    )
  }

  const { shippingName, streetName, city, stateProvince, country } = address;

    return(
        <div className='address-container'>
            <div className='row'>
            <div className=' col-md-9 address-content'>
            <h2>SHIPPING ADDRESS</h2>
            <p>
                {shippingName} <br />
                {streetName} <br />
                {city}, {stateProvince}, {country}
            </p>
            </div>
            <div className='col'>
            <Link to={'/add-address'}><button className='btn-address'>Change</button></Link>
            </div>
            </div>
        </div>
    )
    
}

export default Address;