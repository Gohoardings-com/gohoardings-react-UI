import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Media from './pages/medias/media';
import Header from './components/header/header';
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/authorization/login";
import Fixednavbar from './components/Navbar/fixednavbar';
import Flotinggnavbar from './components/Navbar/flotingnavbar';
import Footer from './pages/footer/footer';
import Map from './pages/map/map'
import Details from './pages/seeDetails/details'
import Cart from './pages/Cart/cart'
import Contact from "./pages/contact-us/contact";
import About from './pages/about-us/about'
import FAQS from './pages/faqs/faqs'
import Team from './pages/team/team'
import News from './pages/news_media/news_media'
import Testimonial from './pages/testimonial/testimonial'
// import "./App.css"

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
  <Header/>
 {avlable == true ? <Fixednavbar/> :  <Flotinggnavbar/>}
        <Routes>
         <Route path="/" element={<Home setAvlable={setAvlable} />}/>
          <Route path="/media/:category_name/:city_name" element={<Media setAvlable={setAvlable}/>}/>   
          <Route path="/map" element={<Map/>}/>
          <Route path="/details/:code/:category_name" element={<Details/>}/>
          <Route path="/cart" element={<Cart/>}/> 
           <Route path="/contact" element={<Contact/>}/> 
          <Route path="/about" element={<About/>}/> 
          <Route path="/faqs" element={<FAQS/>}/> 
          <Route path="/team" element={<Team/>}/>  
        <Route path="/news" element={<News/>}/>  
         <Route path="/testimonial" element={<Testimonial/>}/> 
           <Route exact path="/login" element={avlable == true ? <Home/>:<Login/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App
