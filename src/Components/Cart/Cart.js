import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state?.allProducts.cart);
  const dispatch = useDispatch();

  console.log(cart);
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
