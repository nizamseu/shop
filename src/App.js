import logo from "./logo.svg";
import "./App.css";
import Login from "./Authentication/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home/Home";
import Registration from "./Authentication/Registration";
import PrivateRoute from "./Authentication/PrivateRoute";
import Private from "./Components/Private/Private";
import Navbar from "./Home/Navbar/Navbar";
import Products from "./Home/Products/Products";
import CheckOut from "./Components/CheckOut/CheckOut";
import ProductDetails from "./Home/Products/ProductDetails";
import Cart from "./Components/Cart/Cart";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AddProducts from "./Components/Dashboard/AddProducts/AddProducts";
import Users from "./Components/Dashboard/Users/Users";
import Common from "./Home/Home/Common";
import Shipping from "./Components/Shipping/Shipping";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <CheckOut />
              </PrivateRoute>
            }
          />
          <Route path="/detail/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route
            path="/private"
            element={
              <PrivateRoute>
                <Private />
              </PrivateRoute>
            }
          ></Route>

          {/* <Route path="/dashboard" element={<Dashboard />}>
            <Route path="addProducts" element={<AddProducts />} />
            <Route path="users" element={<Users />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
