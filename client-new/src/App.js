import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Media from './pages/medias/media';
import Header from './components/header/header';
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/authorization/login";
import Footer from './pages/footer/footer';
import Map from './pages/map/map';
import Details from './pages/seeDetails/details'
import Cart from './pages/cart/cart'
import Contact from "./pages/contact-us/contact";
import About from './pages/about-us/about'
import FAQS from './pages/faqs/faqs'
import Team from './pages/team/team'
import "bootstrap/dist/js/bootstrap.bundle.min";
import News from './pages/news_media/news_media'
import Testimonial from './pages/testimonial/testimonial'
import "@fontsource/montserrat";
import 'animate.css';

// import "./App.css" 

function App() {
  const [avlable,setAvlable] = useState(false)
 
  const getUser = async() => {
   {localStorage.getItem("user") || sessionStorage.getItem("user") && setAvlable(true)}
  }
  useEffect(() =>{
    getUser()
  },[])

  return (
    <>
      <BrowserRouter>
  <Header/>
        <Routes>
         <Route index path="/" element={<Home />}/>
          <Route exact path="/login" element={avlable ? <Home/>:<Login/>}></Route>
          <Route exact path="/:category_name/:city_name" element={ <Media/>}/>   
          <Route exact path="/map" element={<Map/>}/>
          <Route exact path="/details/:category_name/:meta_title" element={<Details/>}/>
          <Route exact path="/cart" element={<Cart />}/> 
          <Route exact path="/contact" element={<Contact/>}/> 
          <Route exact path="/about" element={<About/>}/> 
          <Route exact path="/faqs" element={<FAQS/>}/> 
          <Route exact path="/team" element={<Team/>}/>  
          <Route exact path="/news" element={<News/>}/>  
          <Route exact path="/testimonial" element={<Testimonial/>}/> 
          <Route exact path="*" element={<img className="img-fluid" src="./images/6029646.jpg" alt="page not found"/>}/> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
