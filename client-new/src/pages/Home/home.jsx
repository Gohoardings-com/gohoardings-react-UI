import React, {  useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";
import SearchMedia from '../SearchMedia/SeachMedia'
import Navbar from '../../components/Navbar/Navbar'
import Ourservices from "../ourservices/ourservices";
import City from "../citylist/city";
import Enquire from "../enquire/enquire";
import FlotingNavbar from "../../components/Navbar/flotingnavbar";
import Fixednavbar from "../../components/Navbar/flotingnavbar";

const Home = () => {

  return (
    <>
<Navbar/>
<Fixednavbar/>
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
