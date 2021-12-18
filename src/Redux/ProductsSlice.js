import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  products: [],
  cart: [],
  value: 10,
};

export const ProductsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    allProducts: (state) => {
      console.log("allProducts", state.products);
    },
    incrementQT: (state, action) => {
      console.log(state?.cart);
    },
    decrementQT: (state, action) => {
      console.log("DE", action.payload);
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action) => {
      console.log(action.payload);
      state.cart = action.payload;
    },
  },
});

export const {
  allProducts,
  addToCart,
  setProducts,
  incrementQT,
  decrementQT,
  removeFromCart,
} = ProductsSlice.actions;

export default ProductsSlice.reducer;
