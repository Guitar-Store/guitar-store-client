import './cartItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../Contexts/Cart.context';
import { useContext } from 'react';

const CartItem = ({ cartItem }) => {
  console.log('cartItem => ' + JSON.stringify(cartItem));
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, subtractItemFromCart, removeItemFromCart } =
    useContext(CartContext);

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

  const handleDeleteItem = () => {
    removeItemFromCart(cartItem); // Call the subtractItemFromCart function with the cartItem to remove it from the cart
  };

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="cart-item-details">
        <span className="name">{name}</span>
        <button className="delete-btn" onClick={handleDeleteItem}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
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
