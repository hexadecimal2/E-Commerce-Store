import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../redux/actions/actions';
import Rating from '../components/Rating';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CheckBagItems.css';

const CheckBagItems = () => {
    const cartItems = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    const handleIncrease = (productId) => {
        dispatch(increaseQuantity(productId));
    };

    const handleDecrease = (productId) => {
        dispatch(decreaseQuantity(productId));
    };

    return (
        <div className="container" style={{background: '#ffff', borderRadius:'10px'}}>
        <h2 style={{fontWeight: 'lighter', letterSpacing: '4px', fontSize: '25px'}}>REVIEW YOUR BAG</h2>
            {cartItems.length === 0 ? (
                <p>Your bag is empty</p>
            ) : (
                cartItems.map(products => (
                    <div key={products.id} className="row mb-4" >
                        <div className="col-md-3" >
                            <img src={products.image} alt={products.name} className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h5>{products.name}</h5>
                            <p>{products.smallDescription}</p>
                            <p>{products.description}</p>
                            <h3><Rating stars={products.rating}/> <small style={{color: '#12805D'}}> {products.rating} / 5</small></h3>
                            <p>${products.price} <small> x {products.quantity}</small></p>
                        </div>
                        <div className="col-md-3 quantity-controls" style={{borderBottom: '#000'}}>
                            <button className="btn btn-decrease" onClick={() => handleDecrease(products.id)}>-</button>
                            <p className="mx-2">{products.quantity}</p>
                            <button className="btn btn-increase" onClick={() => handleIncrease(products.id)}>+</button>
                        </div>
                    </div>
                ))
            )}
        </div>
        
    );
};

export default CheckBagItems;
