import { Button, Grid, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <Grid
      sx={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <h1>SHOPPING CART</h1>
        <p>Your cart is currently empty.</p>
        <Button
          sx={{ my: 3, a: { textDecoration: "none", color: "white" } }}
          variant="contained"
        >
          <Link to="/products"> Continue Shopping</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default EmptyCart;
