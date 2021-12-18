import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "./checkout.css";
import { Box } from "@mui/system";
import useAuth from "../../Hooks/useAuth";
const CheckOut = () => {
  const cart = useSelector((state) => state?.allProducts.cart);
  const { user } = useAuth();
  const subtotal = cart
    .reduce((a, b) => a + b.price * b.quantity, 0)
    .toFixed(2);
  const shipping = 10;
  const vat = (subtotal * 0.5).toFixed(1);
  const total = parseInt(subtotal + vat + shipping).toFixed(2);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.email = user.email;
    console.log(data);
  };
  return (
    <Grid>
      <h1> ChechOut Form</h1>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
        }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Container>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <h4>Contact information</h4>
              <input
                defaultValue={user.email}
                disabled
                type="email"
                {...register("email")}
                placeholder="Enter Your Email"
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}
              <h4>Shipping Address</h4>
              <label>Name</label>
              <input
                {...register("name", { required: true })}
                placeholder="Enter Your Name"
              />
              {errors.name && (
                <span className="error">This field is required</span>
              )}{" "}
              <br />
              <label> Address</label>
              <textarea
                {...register("address", { required: true })}
                placeholder="Enter Your Address"
              />
              {errors.address && (
                <span className="error">This field is required</span>
              )}
              <br />
              <label>Appartment</label>
              <input
                {...register("appartment", { required: true })}
                placeholder="Appartment  "
              />
              {errors.appartment && (
                <span className="error">This field is required</span>
              )}
              <br />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <label>City</label>
                  <input
                    style={{ width: "90%" }}
                    type="text"
                    {...register("city", { required: true })}
                    placeholder="city"
                  />{" "}
                  <br />
                  {errors.city && (
                    <span className="error">This field is required</span>
                  )}
                </Box>
                <Box>
                  <label> Zip Code</label>
                  <input
                    style={{ width: "90%" }}
                    type="number"
                    {...register("zip", { required: true })}
                    placeholder="ZIP Code"
                  />{" "}
                  <br />
                  {errors.zip && (
                    <span className="error">This field is required</span>
                  )}
                </Box>
              </Box>
              <label>Phone Number</label>
              <input
                type="number"
                {...register("phone", { required: true })}
                placeholder="Enter Phone Number"
              />
              {errors.phone && (
                <span className="error">This field is required</span>
              )}{" "}
              <br />
              <Button variant="contained" className="button" type="submit">
                Continue to shipping
              </Button>
            </form>
          </Container>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{ backgroundColor: "#FAFAFA" }}
        >
          <table style={{ width: "100%", fontSize: "20px" }}>
            <tbody>
              <tr>
                <td>Subtotal </td>
                <td>
                  $<span>{subtotal}</span>
                </td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>
                  {" "}
                  $<span>{shipping}</span>
                </td>
              </tr>
              <tr>
                <td>VAT</td>
                <td>
                  $<span>5%</span>
                </td>
              </tr>

              <tr>
                <td>Total </td>
                <td>
                  {" "}
                  $<span>{total}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CheckOut;
