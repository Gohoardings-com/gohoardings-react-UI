import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Media from './pages/medias/media';
import { authActions } from "./store";
import instance from "./apis/axios";
import Header from './components/header/header';
import { useSelector, useDispatch } from 'react-redux'
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
import Profile from './pages/profile/profile'
import Testimonial from './pages/testimonial/testimonial'
import "@fontsource/montserrat";
import 'animate.css';
import Signin from "./pages/authorization/signin";


function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.LoginStatus);
  const [avlable,setAvlable] = useState(false)
 

  const getUser = async() => {
   {sessionStorage.getItem("user") || localStorage.getItem("user") && setAvlable(true)} 
   {}
  }
  useEffect(() =>{
    getUser()
  },[])

  
  useEffect(() => {
    const handleTabClose = event => {
      event.preventDefault();
      if(sessionStorage.getItem("user")){
        logOut()
         }
    };

    window.addEventListener('beforeunload', handleTabClose);
  }, []);

  const handelLogout = async (e) => {
    const data = await instance.post("registration/logout", null, {
      withCredentials: true,
    });
    if (data.status == 200) {
      isLoggedIn = true;
      return data
    }
    return new Error("Unable to logOut Please Try Again");
  };
  async function logOut(e){
    sessionStorage.clear()
    localStorage.clear()
    handelLogout().then(() => dispatch(authActions.logout()))
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route index path="/" element={<Home />}/>
          <Route exact path="/login" element={avlable ? <Home />:<Signin />}></Route>
          <Route exact path="/:category_name/:city_name" element={ <Media/>}/>   
          <Route exact path="/map" element={<Map/>}/>
          <Route exact path="/details/:category_name/:meta_title" element={<Details/>}/>

          <Route exact path="/cart" element={ <Cart/>}/> 

          <Route exact path="/cart" element={<Cart/>}/> 

          <Route exact path="/contact" element={<Contact/>}/> 
          <Route exact path="/about" element={<About/>}/> 
          <Route exact path="/faqs" element={<FAQS/>}/> 
          <Route exact path="/team" element={<Team/>}/>  
          <Route exact path="/news" element={<News/>}/>  
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/testimonial" element={<Testimonial/>}/> 
          <Route exact path="*" element={<img className="img-fluid" src="./images/6029646.jpg" alt="page not found"/>}/> 
        </Routes>
        <Footer/>
      </BrowserRouter>  
    </>
  );
}

export default App;
