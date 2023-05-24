import './cartItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../Contexts/Cart.context';
import { useContext } from 'react';

const CartItem = ({ cartItem }) => {
  console.log('cartItem => ' + JSON.stringify(cartItem));
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, subtractItemFromCart } = useContext(CartContext);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const updatedQuantity = quantity - 1;
      subtractItemFromCart({ ...cartItem, quantity: updatedQuantity });
    }
  };

  const increaseQuantity = () => {
    const updatedItem = { ...cartItem, quantity: quantity + 1 };
    addItemToCart(updatedItem);
  };

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="cart-item-details">
        <span className="name">{name}</span>
        <div className="quantity-container">
          <button className="quantity-btn" onClick={decreaseQuantity}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-btn" onClick={increaseQuantity}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <span className="price">£{price}</span>
      </div>
    </div>
  );
};

export default CartItem;
