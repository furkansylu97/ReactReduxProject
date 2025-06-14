import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../components/CourseItems";

const initialState = {
  cartItems: courseItems,
  quantity: 5,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseQuantity: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity -= 1;
    },
    calculateTotal: (state) => {
        let total = 0;
        let quantity = 0;
        state.cartItems.forEach((item) => {
            total += item.quantity*item.price;
            quantity += item.quantity;
        });
        state.quantity = quantity;
        state.total = total;
    },
  },
});

export const { clearCart, removeItem, increaseQuantity, decreaseQuantity, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;
