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
      const rest = [...state.cart, action.payload];
      const key = "_id";
      const arrayUniqueByKey = [
        ...new Map(rest.map((item) => [item[key], item])).values(),
      ];

      state.cart = arrayUniqueByKey;
    },
    removeFromCart: (state, action) => {
      state.cart = action.payload;
    },
    clearCart: (state, action) => {
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
  clearCart,
} = ProductsSlice.actions;

export default ProductsSlice.reducer;
