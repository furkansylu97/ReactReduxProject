import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeItem } from "../control/CartSlice";

function CourseItem({ id, title, price, img, quantity }) {

  const dispatch = useDispatch();

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
        <button className="CartDeleteBtn" onClick={() => {dispatch(removeItem(id))}}>Delete</button>
      </div>
    </div>
  );
}

export default CourseItem;
