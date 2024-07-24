import React from 'react'; 
import { useSelector , useDispatch} from 'react-redux';
import Rating from './Rating';
import { incrementQuantity, decrementQuantity } from '../redux/actions/actions';

const CheckBagItems = () => {
    const cartItems = useSelector(state => state.cart.products);

    const dispatch = useDispatch();

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId));
  };
    return(
        <div>
        {cartItems.map(product => (
          <div key={product.id}>
          <img src={product.image} alt={product.name} />
            {product.name}
            {product.smallDescription}
            {product.description}
            <Rating stars={product.rating}/>
            <span>${product.price} x {product.quantity}</span>
            <button onClick={handleDecrement(product.id)}>-</button>
        {product.quantity}
        <button onClick={handleIncrement(product.id)}>+</button>
          </div>
        ))}
      </div>
    )
}

export default CheckBagItems; 