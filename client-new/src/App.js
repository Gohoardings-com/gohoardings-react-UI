import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Flotinggnavbar from "./components/Navbar/flotingnavbar";
import Header from "./components/header/header";
import Fixednavbar from "./components/Navbar/fixednavbar";
import Footer from "./pages/footer/footer";
import GohordingCart from "./pages/gohoardingcart/gohordingcart";
import Home from "./pages/home/home";
import Media from './pages/medias/media'
import Details from './pages/seeDetails/details'
// import "./App.css"


function App() {
  const [avlable,setAvlable] = useState(false)
  // const getUser = async() => {
  //  {localStorage.getItem("user") && setAvlable(true)}
  // }
  // useEffect(() =>{
  //   getUser()
  // },[])
  return (
    <>
      <BrowserRouter>
  <Header/>
 {avlable == true ? <Fixednavbar/> : <Flotinggnavbar/>}
        <Routes>
          <Route path="/" element={avlable == true ? <Home/>:<Home/>}/>
          <Route path="/media" element={<Media/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/cart" element={<GohordingCart/>}/>
          <Route path="*" element={<h1>Nothing Here </h1>}/>
          {/* <Route exact path="/login" element={avlable == true ? <Home/>:<Login/>}></Route>
          <Route exact path="/register" element={avlable == true ? <Home/>:<Register/>}></Route>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/profile" element={<Vendor/>}/>
          <Route path="/test" element={<Test/>} />
          <Route path="/services/:category_name/:city_name" element={<ServicesData/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/city" element={<City/>}/>
          <Route path="/contact" element={<Conatct/>}/>
           */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App
