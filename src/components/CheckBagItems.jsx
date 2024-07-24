import React from 'react'; 
import { useSelector , useDispatch} from 'react-redux';
import Rating from './Rating';
import { incrementQuantity, decrementQuantity } from '../redux/actions/actions';

const CheckBagItems = ({productId}) => {
    const cartItems = useSelector(state => state.cart.products);

    const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(productId));
  };
    return(
        <div>
        {cartItems.map(products => (
          <div key={products.id}>
          <img src={products.image} alt={products.name} />
            {products.name}
            {products.smallDescription}
            {products.description}
            <Rating stars={products.rating}/>
            <span>${products.price} x {products.quantity}</span>
            <button onClick={handleDecrement}>-</button>
        {products.quantity}
        <button onClick={handleIncrement}>+</button>
          </div>
        ))}
      </div>
    )
}

export default CheckBagItems; 