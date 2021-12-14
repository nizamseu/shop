import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Registration = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        border: "1px solid gray",
        width: { xs: "100%", sm: "80%", md: "30rem" },
      }}
    >
      <Box
        sx={{
          border: "1px solid gray",
          padding: "20px",
          margin: "20px",
          width: "100%",
        }}
      >
        <Typography sx={{ textAlign: "center" }} variant="h6">
          Registration Form
        </Typography>
      </Box>
    </Container>
  );
};

export default Registration;
