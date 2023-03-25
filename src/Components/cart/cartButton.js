import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./cartButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartButton() {
  return (
    <div className="cart-container">
    <Dropdown className="cart-dropdown d-inline mx-2" autoClose={false}>
    <Dropdown.Toggle as={FontAwesomeIcon} icon={faShoppingCart} id="dropdown-autoclose-false" variant="dark" size="2x" />

 

    <Dropdown.Menu align="right" className="bg-dark">
      <Dropdown.Item href="#" className="text-white">Menu ddddddddddddddddddddddddddddddddddItem</Dropdown.Item>
      <Dropdown.Item href="#" className="text-white">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#" className="text-white">Menu Item</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  </div>
  );
}

export default CartButton;

