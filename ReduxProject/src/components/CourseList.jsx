import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";

function CourseList() {
  const { cartItems, quantity, total } = useSelector((store) => store.cart);

  return (
    <>
      {quantity < 1 ? (
        <section className="CartWrapper">
          <header>
            <h2>My Cart</h2>
            <h4>Empty Cart</h4>
          </header>
        </section>
      ) : (
        <section className="CartWrapper">
          <header>
            <h2>My Cart</h2>
          </header>
          <div>
            {cartItems.map((item) => {
              return <CourseItem key={item.id} {...item} />;
            })}
          </div>
          <footer className="footer">
            <hr />
            <div>
              <h4>
                Total Price <span>{total} ₺</span>
              </h4>
            </div>
            <button className="CartClearBtn">Clear</button>
          </footer>
        </section>
      )}
    </>
  );
}

export default CourseList;
