import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home/home";

import { useSelector } from "react-redux";
import { loadeUser } from "./action/adminAction";
import store from './store'
function App() {

  const { isAuthenticate, user} = useSelector(state => state.admin);

  React.useEffect(()=>{
    store.dispatch(loadeUser())
    console.log(isAuthenticate);
  },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
