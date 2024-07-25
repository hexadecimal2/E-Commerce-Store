import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Payment.css';

const Payment = () => {
  const location = useLocation();
  const selectedCard = location.state?.selectedCard;

  return (
    <div className='payment-container'>
    <h2 className='payment-content'>PAYMENT METHOD</h2>
    <div className='row'>
    <div>
      {selectedCard ? (
        <div className='col-md-9 payment-content'>
          <p>{selectedCard.cardType} ending in {selectedCard.last4}</p>
          <p>*Gift Card Number*</p>
          <div className="form-check default-address">
                <input type="checkbox" name="defaultAddress" className='form-check-input custom-checkbox' />
                <label htmlFor="defaultAddress" className='default-label-text'>Billing address same as Shipping Address</label>
            </div>
            <div className='col'>
          <Link to={'/add-payment'}><button className='btn-payment'>Change</button></Link>
          </div>
        </div>
        
      ) : (
        
        <div className='payment-content'>
        <p>No card selected</p>
        <Link to={'/add-payment'}><button className='btn-payment'>Add Payment</button></Link>
        </div>
      )}
      </div>
    </div>
    </div>
  );
};

export default Payment;
