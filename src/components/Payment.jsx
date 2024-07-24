import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const selectedCard = location.state?.selectedCard;

  return (
    <div>
    <h1>PAYMENT METHOD</h1>
    <div>
      {selectedCard ? (
        <div>
          <p>{selectedCard.cardType} ending in {selectedCard.last4}</p>
          <p>*Gift Card Number*</p>
          <div className="form-check default-address">
                            <input type="checkbox" name="defaultAddress" className='form-check-input custom-checkbox' />
                            <label htmlFor="defaultAddress" className='default-label-text'>Billing address same as Shipping Address</label>
                        </div>
        </div>
      ) : (
        <div>
        <p>No card selected</p>
        <Link to={'/add-payment'}><button>Add Payment</button></Link>
        </div>
      )}
    </div>
    </div>
  );
};

export default Payment;
