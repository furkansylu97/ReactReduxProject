import React from 'react'
import { BsFillBasketFill } from "react-icons/bs";

function Navbar() {
  return (
    <nav>
        <div>
            <h3>Course App</h3>
            <div>
                <p>0</p>
            </div>
            <BsFillBasketFill />
        </div>
    </nav>
  )
}

export default Navbar