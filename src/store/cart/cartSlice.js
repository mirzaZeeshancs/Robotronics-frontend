// src/features/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : {};
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromLocalStorage(),
  },
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        state.items[id].count += 1; // Increment count if product already in cart
      } else {
        state.items[id] = { count: 1 }; // Add new product to cart
      }
      localStorage.setItem("cart", JSON.stringify(state.items)); // Save to localStorage
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        if (state.items[id].count > 1) {
          state.items[id].count -= 1; // Decrement count if more than 1
        } else {
          delete state.items[id]; // Remove item if count is 1
        }
        localStorage.setItem("cart", JSON.stringify(state.items)); // Save to localStorage
      }
    },
    clearCart: (state) => {
      state.items = {}; // Clear the entire cart
      localStorage.removeItem("cart"); // Remove from localStorage
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
