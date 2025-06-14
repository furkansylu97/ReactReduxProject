import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

function CourseItem({ id, title, price, img, quantity }) {
  return (
    <div className="CourseWrapper">
      <img src={img} alt="" />
      <div className="CourseInfo">
        <h4>{title}</h4>
        <h4>{price} ₺</h4>
        <div>
          <button className="CartquantityBtn">
            <BsChevronUp />
          </button>
          <p className="CartquantityCount">{quantity}</p>
          <button className="CartquantityBtn">
            <BsChevronDown />
          </button>
        </div>
        <button className="CartDeleteBtn">Delete</button>
      </div>
    </div>
  );
}

export default CourseItem;
