import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
// import "./App.css"



function App() {

  // const [avlable,setAvlable] = useState(false)


  // const getUser = async() => {
  //  {localStorage.getItem("user") && setAvlable(true)}
  // }
  // useEffect(() =>{
  //   getUser()
  // },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route exact path="/login" element={avlable == true ? <Home/>:<Login/>}></Route>
          <Route exact path="/register" element={avlable == true ? <Home/>:<Register/>}></Route>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/profile" element={<Vendor/>}/>
          <Route path="/test" element={<Test/>} />
          <Route path="/services/:category_name/:city_name" element={<ServicesData/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/city" element={<City/>}/>
          <Route path="/contact" element={<Conatct/>}/>
          <Route path="/media" element={<Medias/>}/>
          <Route path="*" element={<h1>Nothing Here </h1>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App