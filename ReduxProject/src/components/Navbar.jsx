import React from "react";
import { BsFillBasketFill } from "react-icons/bs";

function Navbar() {
  return (
    <nav>
      <div className="Navbar">
        <h3>Course App</h3>
        <div className="NavbarIconWrapper">
          <div className="Navbarquantity">
            <p>0</p>
          </div>
          <BsFillBasketFill className="ItemsIcon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
