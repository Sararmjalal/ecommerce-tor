import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DOMAIN } from "./config/constants";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { setUser, setAdmin } from "./Global State/Slice";

import WebLayout from "./Layouts/WebLayout";
import AdminDashboardLayout from "./Layouts/A-DashboardLayout"
import UserDashboardLayout from "./Layouts/U-DashboardLayout"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Product from "./Pages/Product";
import CatProduct from "./Pages/CatProduct";
import DADashboard from "./Pages/DADashboard";
import DAProducts from "./Pages/DAProducts";
import DAAddProduct from "./Pages/DAAddProduct";
import DAEditProduct from "./Pages/DAEditProduct";
import DAAddCategory from "./Pages/DAAddCategory";
import DAEditCategory from "./Pages/DAEditCategory";
import DAUsers from "./Pages/DAUsers";
import DAEditUser from "./Pages/DAEditUser";
import DACategories from "./Pages/DACategories";
import DUDashboard from "./Pages/DUDashboard";
import DUOrders from "./Pages/DUOrders";
import DUEditProfile from "./Pages/DUEditProfile";
import UserLogin from "./Pages/UserLogin";
import UserSignup from "./Pages/UserSignup";
import AdminLogin from "./Pages/AdminLogin";
import Shop from "./Pages/Shop";
import AdminCreate from "./Pages/AdminCreate";

function App() {
  const [loading, setLoading]= useState(true)
  const cookies = new Cookies()
  const dispatch = useDispatch()
  const token = cookies.get('ut')
  const adminToken = cookies.get('at')

  useEffect(() => {

    if (!token && !adminToken) return setLoading(false)

    if(token) {
    return axios.post(`${DOMAIN}/user/me`, {
      body: JSON.stringify({})
    }, {
      headers: {
        auth: `ut ${token}`
      }
    }).then(res => dispatch(setUser(res.data)))
      .then(() => setLoading(false))
      .catch(err => console.log(err))
    }

    if (adminToken) {
      axios.post(`${DOMAIN}/admin/me`, {
        data: JSON.stringify({})
      },
        {
          headers: {
          a_auth: `at ${adminToken}` 
        }
        })
        .then(res => dispatch(setAdmin(res.data)))
        .then(() => setLoading(false))
        .catch(err => console.log(err))
    }
    
  }, [])

  if(loading) return <h1>Loading...</h1>
  return (
    <Router>
      <Routes>

        <Route path="/" element={<WebLayout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="category/:id" element={<CatProduct />} />
        </Route>

        <Route path="/admin/dashboard/" element={<AdminDashboardLayout />}>
          <Route path="" element={<DADashboard />} />
          <Route path="products" element={<DAProducts />} />
          <Route path="product/create" element={<DAAddProduct />} />
          <Route path="product/edit/:id" element={<DAEditProduct />} />
          <Route path="categories" element={<DACategories />} />
          <Route path="category/create" element={<DAAddCategory />} />
          <Route path="category/edit/:id" element={<DAEditCategory />} />
          <Route path="users" element={<DAUsers />} />
          <Route path="user/edit/:id" element={<DAEditUser />} />
        </Route>

        <Route path="/user/dashboard/" element={<UserDashboardLayout />}>
          <Route path="" element={<DUDashboard />} />
          <Route path="orders" element={<DUOrders />} />
          <Route path="profile/edit" element={<DUEditProfile />} />
        </Route>

        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/create" element={<AdminCreate />}/>

      </Routes>
    </Router>
  )
}

export default App;
