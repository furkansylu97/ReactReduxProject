import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeItem, increaseQuantity, decreaseQuantity } from "../control/CartSlice";

function CourseItem({ id, title, price, img, quantity }) {

  const dispatch = useDispatch();

  return (
    <div className="CourseWrapper">
      <img src={img} alt="" />
      <div className="CourseInfo">
        <h4>{title}</h4>
        <h4>{price} ₺</h4>
        <div>
          <button className="CartquantityBtn" onClick={() => {dispatch(increaseQuantity(id))}}>
            <BsChevronUp />
          </button>
          <p className="CartquantityCount">{quantity}</p>
          <button className="CartquantityBtn" onClick={() => {dispatch(decreaseQuantity(id))}}>
            <BsChevronDown />
          </button>
        </div>
        <button className="CartDeleteBtn" onClick={() => {dispatch(removeItem(id))}}>Delete</button>
      </div>
    </div>
  );
}

export default CourseItem;
