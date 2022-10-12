import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css"
import Home from "./pages/home/home";
import Login from "./pages/authorization/login";
import Register from "./pages/authorization/signup";
import Contact from "./pages/contact-us/contact";
import Vendor from './Components/userProfile/UserMediaStatus'
import ServicesData from "./pages/services/ServicesData";
import Cart from "./pages/Cart/Cart";

function App() {

  // const { isAuthenticate, user} = useSelector(state => state.admin);

  // React.useEffect(()=>{
  //   store.dispatch(loadeUser())
  //   console.log(isAuthenticate);
  // },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Signin" element={<Login/>}/>
          <Route path="/Signup" element={<Register/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/profile" element={<Vendor/>}/>
          <Route path="/services/:city/:category_name" element={<ServicesData/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<h1>Nothing Here </h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
