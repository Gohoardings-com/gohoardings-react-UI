import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Media from './pages/medias/media';
import Header from './components/header/header';
import Fixednavbar from './components/Navbar/fixednavbar';
import Flotinggnavbar from './components/Navbar/flotingnavbar';
import Footer from './pages/footer/footer';
import Map from './pages/map/map'
import Details from './pages/seeDetails/details'
import Cart from './pages/Cart/Cart'
import Login from "./pages/login/login";
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
  {/* <Header/>
 {avlable == true ? <Fixednavbar/> :  <Flotinggnavbar/>} */}
        <Routes>
          {/* <Route path="/" element={<Home setAvlable={setAvlable} />}/> */}
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/media/:category_name/:city_name" element={<Media/>}/>   
          <Route path="/map" element={<Map/>}/>
          <Route path="/details/:code/:category_name" element={<Details/>}/>
          <Route path="/cart" element={<Cart/>}/> */}
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
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App
