import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import '../styles/AddPayment.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { addCard } from '../redux/actions/actions';


const AddPayment = () => {
    const [formData, setFormData] = useState({
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        defaultPayment: false,
    });

    const dispatch = useDispatch();
    const cards = useSelector(state => state.card.cards);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ 
            ...formData, 
            [name]: type === 'checkbox' ? checked : value 
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //indexing the first digit of the card number form data 
        const firstDigit = formData.cardNumber[0];
        let cardType = 'Unknown';

        if (firstDigit === '4') {
            cardType = 'Visa';
        } else if (firstDigit === '2' || firstDigit === '5') {
            cardType = 'Mastercard';
        } else if (firstDigit === '3') {
            cardType = 'American Express';
        } else {
            cardType = 'Invalid card number';
        }

        const newCard = {
             ...formData,
             cardType,
             last4: formData.cardNumber.slice(-4)
        };

        dispatch(addCard(newCard));
    };

    const navigate = useNavigate();
  
    const handleCardClick = (card) => {
        navigate('/checkout', { state: { selectedCard: card } });
    };

    return (
        <>
            <div className="container-pay">
                <div className="container select-card">
                    <div className="select-card-heading">
                        SELECT A CARD
                    </div>
                    <div className="card-list">
                        <div className='row'>
                            {cards.map((card, index) => (
                                <li key={index} className='card details' onClick={() => handleCardClick(card)}>
                                    <FontAwesomeIcon icon={faCreditCard} /> {card.cardType} ending in {card.last4}
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="container add-card">
                    <div className="new-card-heading">
                        ADD NEW CARD
                    </div>
                    <form className='add-card-form' onSubmit={handleSubmit}>
                        <div className="form-group cardholder">
                            <label htmlFor="name" className='label-name'>Cardholder Name</label>
                            <input type="text" name='cardHolderName' placeholder='John Maker' value={formData.cardHolderName} onChange={handleChange} className='form-control input-box' required />
                        </div>
                        <div className="form-group cardnumber">
                            <label htmlFor="number" className='label-name'>Card Number</label>
                            <input type="number" name='cardNumber' placeholder='5126-5987-2214-7621' value={formData.cardNumber} onChange={handleChange} className='form-control input-box' required />
                        </div>
                        <div className="form-group expiry-cvc">
                            <div className="row">
                                <div className="col-4">
                                    <label htmlFor="date" className='label-name'>Expiry Date</label>
                                    <input type="text" name='expiryDate' placeholder='MM/YYYY' value={formData.expiryDate} onChange={handleChange} className='form-control input-box' required />
                                </div>
                                <div className="col-3">
                                <label htmlFor="cvc" className='label-name'>CVC</label>
                                <input type="number" name='cvc' placeholder='123' value={formData.cvc} onChange={handleChange} className='form-control input-box' required />
                                </div>
                            </div>
                        </div>
                        <div className="form-check default-payment">
                            <input type="checkbox" name="defaultPayment" value={formData.defaultPayment} onChange={handleChange} className='form-check-input custom-checkbox' />
                            <label htmlFor="defaultPayment" className='default-label-text'>Save this as your default payment method</label>
                        </div>
                        <div className="payment-method-button">
                            <button type="submit" className='btn payment-method'>
                                <FontAwesomeIcon icon={faCreditCard} />
                                {" "} Add Payment Method
                            </button>
                        </div>
                        <div className="row">
                            <div className="col-6"><Link to='/checkout' className='checkout-link'>Back</Link></div>
                            <div className="col-6 secure-connection"><i class="bi bi-bag-fill"></i> Secure Connection</div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddPayment;