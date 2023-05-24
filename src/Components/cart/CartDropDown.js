import { useContext } from 'react';
import { CartContext } from '../../Contexts/Cart.context';
import './cartDropDown.css';

import { Button } from 'react-bootstrap';
import CartItem from './CartItem';

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  console.log('cartItems => ', cartItems);
  cartItems.forEach((cartItem) => {
    console.log('cartItem => ', cartItem);
  });
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-dropDown-container">
      <div className="cart-products">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <div className="order-summary">
          <h5>Order Summary</h5>
          <p>Total Price: £{totalPrice.toFixed(2)}</p>
        </div>
        <Button variant="success" className="">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartDropDown;
