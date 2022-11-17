import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux'
import "./home.scss";
import SearchMedia from '../SearchMedia/SeachMedia'
import Navbar from '../../components/Navbar/Navbar'
import Ourservices from "../ourservices/ourservices";
import City from "../citylist/city";
import Enquire from "../enquire/enquire";

const Home = ({setAvlable}) => {
  setAvlable(true)
  return (
    <>
<Navbar/>
<SearchMedia/>
 <Ourservices/> 
 <City/>
<Enquire/>

{/* <Trandingcity/> 
 <Navbar/>
<SearchMedia/> */}
    </>
  );
};
export default Home;
