import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import "./reg.css";
const Registration = () => {
  const { user, createUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data);
    reset();
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        // border: "1px solid gray",
        width: { xs: "100%", sm: "80%", md: "30rem" },
      }}
    >
      <Box
        sx={{
          //   border: "1px solid gray",
          padding: "20px",
          margin: "20px",
          width: "100%",
          backgroundColor: "#f6f6f6",
        }}
      >
        <Typography sx={{ textAlign: "center" }} variant="h6">
          Registration Form
        </Typography>
        <Box>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", { required: true })}
              placeholder="Enter Your Name"
            />
            {errors.name && (
              <span className="error">This field is required</span>
            )}

            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <span className="error">This field is required</span>
            )}

            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter Password"
            />
            {errors.password && (
              <span className="error">This field is required</span>
            )}

            <Button variant="contained" className="button" type="submit">
              REG
            </Button>
          </form>
          <Link to={"/login"}>Already have an Account</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Registration;
