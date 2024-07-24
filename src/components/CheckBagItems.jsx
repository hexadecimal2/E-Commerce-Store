import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../redux/actions/actions';
import Rating from '../components/Rating'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="container">
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map(products => (
                    <div key={products.id} className="row mb-4">
                        <div className="col-md-3">
                            <img src={products.image} alt={products.name} className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h5>{products.name}</h5>
                            <p>{products.smallDescription}</p>
                            <p>{products.description}</p>
                            <Rating stars={products.rating}/> 
                            <p>${products.price}</p>
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-primary" onClick={() => handleDecrease(products.id)}>-</button>
                            <span className="mx-2">{products.quantity}</span>
                            <button className="btn btn-primary" onClick={() => handleIncrease(products.id)}>+</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default CheckBagItems;
