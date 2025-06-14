import { createSlice } from "@reduxjs/toolkit";
import  courseItems  from "../components/CourseItems"

const initialState = {
    cartItems: courseItems,
    quantity: 5,
    total: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        }
    }
})

export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;