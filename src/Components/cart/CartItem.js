import "./cartItem.css";

const CartItem = ({ cartItem }) => {
  console.log("cartItem => " + JSON.stringify(cartItem));
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="cart-item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x £{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
