import React, {  useEffect, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";
import { authActions } from "../../store";
import { useNavigate } from "react-router-dom";
import SearchMedia from '../searchmedia/searchmedia'
import Navbar from '../../components/navbar/navbar'
import Ourservices from "../ourservices/ourservices";
import Trandingcity from "../trandingcity/trandingcity";
import City from "../citylist/city";
import axios from "axios";
import { useDispatch } from "react-redux";
import { googleLoginOnTap } from "../../apis/apis";
import Enquire from "../enquire/enquire";
import Flotingnavbar from "../../components/navbar/flotingnavbar";

const Home = () => {
  
  return (
    <>
<Navbar/>
<Flotingnavbar/>
<SearchMedia/>
 <Ourservices/> 
 <City/>
<Enquire/>
<Trandingcity/>
    </>
  );
};
export default Home;