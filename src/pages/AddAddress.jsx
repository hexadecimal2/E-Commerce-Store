import React, { useState } from "react";
// import '../styles/AddAddress.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAddress } from "../redux/actions/actions";

const AddAddress = () => {
    const dispatch = useDispatch();
  
    const [formData, setFormData] = useState({
        shippingName: '',
        streetName: '',
        city: '',
        stateProvince: '',
        country: '',
        defaultAddress: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData, [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addAddress(formData));
    }

  return (
    <>
    <div className="container">
      <form className="add-address-form" onSubmit={handleSubmit}>
        <div className="form-group shipping">
          <label htmlFor="name" className="label-name">
            Shipping Name 
          </label>
          <input
            type="text"
            name="shippingName"
            placeholder="John Maker"
            value={formData.shippingName}
            onChange={handleChange}
            className="form-control input-box"
            required
          />
        </div>
        <div className="form-group streetname">
          <label htmlFor="streetName" className="label-name">
            Street Name
          </label>
          <input
            type="text"
            name="streetName"
            placeholder="123 Place Grond Street"
            value={formData.streetName}
            onChange={handleChange}
            className="form-control input-box"
            required
          />
        </div>
        <div className="form-group city">
          <label htmlFor="city" className="label-name">
            City
          </label>
          <input
            type="text"
            name="city"
            placeholder="123 Place Grond Street"
            value={formData.city}
            onChange={handleChange}
            className="form-control input-box"
            required
          />
        </div>
        <div className="form-group state-province">
          <label htmlFor="stateProvince" className="label-name">
            State / Province
          </label>
          <input
            type="text"
            name="stateProvince"
            placeholder="California"
            value={formData.stateProvince}
            onChange={handleChange}
            className="form-control input-box"
            required
          />
        </div>
        <div className="form-group country">
          <label htmlFor="country" className="label-name">
            Country
          </label>
          <input
            type="text"
            name="country"
            placeholder="Unted States of America"
            value={formData.country}
            onChange={handleChange}
            className="form-control input-box"
            required
          />
        </div>
        <div className="form-check default-payment">
          <input
            type="checkbox"
            name="defaultPayment"
            value={formData.defaultAddress}
            onChange={handleChange}
            className="form-check-input custom-checkbox"
          />
          <label htmlFor="defaultPayment" className="default-label-text">
            Save this as your default address
          </label>
        </div>
        <div className="payment-method-button">
          <button type="submit" className="btn payment-method">
            Add Address
          </button>
        </div>
        <div className="row">
          <div className="col-6">
            <Link to="/checkout" className="checkout-link">
              Back
            </Link>
          </div>
          <div className="col-6 secure-connection">
            <i class="bi bi-bag-fill"></i> Secure Connection
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default AddAddress;
