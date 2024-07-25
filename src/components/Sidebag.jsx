import React from 'react';
import '../styles/Sidebag.css';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const Sidebag = (props) => {
  const products = useSelector((state) => state.cart.products);
  const itemsTotal = products.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='sidebag mt-4'>
      <h2 className='text-center'>Bag</h2>
      <div className='row cart-items'>
        {products.map((product, index) => (
          <div key={index} className='cart-item col-4'>
            <img src={product.image} alt={product.name} className="cart-item-image" height='70' width='70' />
          </div>
        ))}
        <p>Bag Total: {itemsTotal}</p>
      </div>
      <button onClick={props.event} className='back-to-checkbag'><Link to={props.link} className='view-bag-button'><i class="bi bi-bag-fill"></i>{props.caption}</Link></button>
    </div>
  );
};

export default Sidebag;