import React from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { useSelector } from "react-redux"

function Navbar() {

  const { quantity } = useSelector((store) => store.cart)

  return (
    <nav>
      <div className="Navbar">
        <h3>Course App</h3>
        <div className="NavbarIconWrapper">
          <div className="Navbarquantity">
            <p>{quantity}</p>
          </div>
          <BsFillBasketFill className="ItemsIcon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
