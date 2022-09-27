import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/home/home";
import Login from "./pages/authorization/login";
import Register from "./pages/authorization/signup";
import Contact from "./pages/contact-us/contact";
import Vendor from './Components/userProfile/UserMediaStatus'

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
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Signin" element={<Login/>}></Route>
          <Route path="/Signup" element={<Register/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/profile" element={<Vendor/>}></Route>
          <Route path="*" element={<h1>Nothing Here </h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
