import React from 'react';
import { useSelector } from 'react-redux';

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
                <span>${itemsTotal.toFixed(2)}</span>
            </div>
            <div className="summary-item">
                <span>Shipping:</span>
                <span>${shippingCost.toFixed(2)}</span>
            </div>
            <div className="summary-item">
                <span>Estimated GST:</span>
                <span>${estimatedGST.toFixed(2)}</span>
            </div>
            <div className="summary-item">
                <span>Gift Card:</span>
                <span>$0.00</span>
            </div>
            <hr />
            <div className="summary-item total">
                <span>Order Total:</span>
                <span>${orderTotal.toFixed(2)}</span>
            </div>
            <button className="place-order-btn">Place your order</button>
            <button> Back</button>
        </div>
        </>
    );
};



export default OrderSummary;
