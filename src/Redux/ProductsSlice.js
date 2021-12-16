import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
};

export const ProductsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    allProducts: (state) => {
      console.log("allProducts", state.products);
    },
    // addToCart: (state) => {
    //   console.log("add to cart", state);
    // },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { allProducts, addToCart, setProducts } = ProductsSlice.actions;

export default ProductsSlice.reducer;
