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
import Cart from './pages/Cart/Cart'
import Contact from "./pages/contact-us/contact";
import About from './pages/about-us/about'
import FAQS from './pages/faqs/faqs'
import Team from './pages/team/team'
import News from './pages/news_media/news_media'
import Testimonial from './pages/testimonial/testimonial'
// import "./App.css" 

function App() {
  const [avlable,setAvlable] = useState(false)
const [fix,setFix]= useState(true)
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
{/* {fix ? <Fixednavbar/>:<></> } */}
        <Routes>
         <Route index path="/" element={<Home/>}/>
           <Route exact path="/login" element={avlable ? <Home setFix={setFix}/>:<Login/>}></Route>
          <Route exact path="/media/:category_name/:city_name" element={ <Media />}/>   
          <Route exact path="/map" element={<Map/>}/>
          <Route exact path="/details/:code/:category_name" element={<Details/>}/>
          <Route exact path="/cart" element={<Cart />}/> 
           <Route exact path="/contact" element={<Contact/>}/> 
          <Route exact path="/about" element={<About/>}/> 
          <Route exact path="/faqs" element={<FAQS/>}/> 
          <Route exact path="/team" element={<Team/>}/>  
        <Route exact path="/news" element={<News/>}/>  
         <Route exact path="/testimonial" element={<Testimonial/>}/> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App
