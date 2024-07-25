import React from 'react';
import '../styles/OrderSummary.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const OrderSummary = () => {
    const cartItems = useSelector(state => state.cart.products);

    const itemsTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const shippingCost = 6.99;
    const estimatedGST = itemsTotal * 0.15
    const orderTotal = itemsTotal + shippingCost + estimatedGST;

    return (
        <>
        <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-item">
                <span>Items:</span>
                {/* toFixed rounds of the numbers to 2 decimal places */}
                <span className='price-summary'>${itemsTotal.toFixed(2)}</span> 
            </div>
            <div className="summary-item">
                <span>Shipping:</span>
                <span className='price-summary'>${shippingCost.toFixed(2)}</span>
            </div>
            <div className="summary-item">
                <span>Estimated GST:</span>
                <span className='price-summary'>${estimatedGST.toFixed(2)}</span>
            </div>
            <div className="summary-item">
                <span>Gift Card:</span>
                <span className='price-summary'>$0.00</span>
            </div>
            <hr />
            <div className="summary-item total">
                <span>Order Total:</span>
                <span className='price-summary'>${orderTotal.toFixed(2)}</span>
            </div>
            <hr />
            <button className="place-order-btn">Place your order</button>
            
        </div>
        <button className='back-to-checkout'>
            <Link to='/check-bag'>
            <span className='back-to-bag'>
            <i class="bi bi-chevron-left"></i>
            {' '} Back
            </span>
            </Link>
        </button>
        </>
    );
};



export default OrderSummary;
