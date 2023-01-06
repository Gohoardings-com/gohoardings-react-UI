import React, {  useEffect, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";
import SearchMedia from '../searchmedia/searchmedia'
import Navbar from '../../components/navbar/navbar'
import Ourservices from "../ourservices/ourservices";
import Trandingcity from "../trandingcity/trandingcity";
import City from "../citylist/city";
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