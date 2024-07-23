import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebag = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className='sidebag'>
      <h2>Cart</h2>
      <div className='cart-items'>
        {cart.map((product, index) => (
          <div key={index} className='cart-item'>
            <img src={product.image} alt={product.name} className="cart-item-image" height='100' width='100' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebag;