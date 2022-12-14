import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Media from './pages/medias/media';
import "react-toastify/dist/ReactToastify.css";
import Map from './pages/map/map';
import Details from './pages/seedetails/details'
import Cart from './pages/cart/cart'
import Contact from "./pages/contact-us/contact";
import About from './pages/about-us/about'
import FAQS from './pages/faqs/faqs'
import Team from './pages/team/team'
import {useSelector} from 'react-redux'
import News from './pages/news_media/news_media'
import Profile from './pages/profile/profile'
import Testimonial from './pages/testimonial/testimonial'
import "@fontsource/montserrat";
import 'animate.css';
import Signin from "./pages/authorization/signin";
import FooterN from "./pages/footer/footerN";

function App() {
  const { isLoggedIn } = useSelector((state) => state.LoginStatus);
  const [avlable,setAvlable] = useState(false)
  
  const getUser = async() => {
  if(localStorage.getItem(true)){
    setAvlable(true)
  }
}

  useEffect(() =>{
    getUser()
  },[])


  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route index path="/" element={<Home/>}/>
          <Route exact path="/login" element={avlable ? <Home />:<Signin />}></Route>
          <Route exact path="/:category_name/:city_name" element={ <Media/>}/>   
          <Route exact path="/map" element={<Map/>}/>
          <Route exact path="/details/:category_name/:meta_title" element={<Details/>}/>
        {isLoggedIn &&  <Route exact path="/cart" element={<Cart/>}/> }
          <Route exact path="/contact" element={<Contact/>}/> 
          <Route exact path="/about" element={<About/>}/> 
          <Route exact path="/faqs" element={<FAQS/>}/> 
          <Route exact path="/team" element={<Team/>}/>  
          <Route exact path="/news" element={<News/>}/>  
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/testimonial" element={<Testimonial/>}/> 
          <Route exact path="*" element={<img className="img-fluid" src="./images/404.png" alt="page not found"/>}/> 
        </Routes>
        <FooterN/>
      </BrowserRouter>  
    </>
  );
}

export default App;
