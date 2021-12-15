import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductsSlice";
export const store = configureStore({
  reducer: {
    allProducts: productsReducer,
  },
});
