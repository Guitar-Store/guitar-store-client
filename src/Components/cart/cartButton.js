import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./cartButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartDropDown from "./CartDropDown";
import { useContext } from "react";
import { CartContext } from "../../Contexts/Cart.context";

function CartButton() {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-container">
    <Dropdown className="cart-dropdown d-inline mx-2" autoClose={false} onClick={toggleIsCartOpen}>
    <Dropdown.Toggle as={FontAwesomeIcon} icon={faShoppingCart} id="dropdown-autoclose-false" variant="dark" size="2x" />
    <span className="cart-count">{cartCount}</span>

 

    <Dropdown.Menu align="right" className="bg-dark">
      <Dropdown.Item href="#" className="text-white">Add to wishlist</Dropdown.Item>
      
<CartDropDown />
    </Dropdown.Menu>
  </Dropdown>
  </div>
  );
}

export default CartButton;

