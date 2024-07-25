import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Address.css'

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
        <div className='address-container'>
            <div className='row'>
            <div className=' col-md-9 address-content'>
            <h1>SHIPPING ADDRESS</h1>
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