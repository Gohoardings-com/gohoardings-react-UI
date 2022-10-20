import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css"
import Home from "./pages/home/home";
import Login from "./pages/authorization/login";
import Register from "./pages/authorization/signup";
import Contact from "./pages/contact-us/contact";
import Vendor from './Components/userProfile/UserMediaStatus'
import Test from './Components/Test'
import ServicesData from "./pages/services/ServicesData";
import Cart from "./pages/Cart/Cart";
import Conatct from './pages/contact-us/contact'
import City from "./pages/Cityies&Media/City";
import Medias from "./pages/Cityies&Media/Medias";

function App() {

  const [avlable,setAvlable] = useState(false)


  const getUser = async() => {
   {localStorage.getItem("user") && setAvlable(true)}
  }
  useEffect(() =>{
    getUser()
  },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/login" element={avlable == true ? <Home/>:<Login/>}></Route>
          <Route exact path="/register" element={avlable == true ? <Home/>:<Register/>}></Route>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/profile" element={<Vendor/>}/>
          <Route path="/test" element={<Test/>} />
          <Route path="/services/:category_name/:city_name" element={<ServicesData/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/city" element={<City/>}/>
          <Route path="/contact" element={<Conatct/>}/>
          <Route path="/media" element={<Medias/>}/>
          <Route path="*" element={<h1>Nothing Here </h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
