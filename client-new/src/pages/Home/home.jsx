import React, {  useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";
import SearchMedia from '../SearchMedia/SeachMedia'
import Navbar from '../../components/navbar/Navbar'
import Ourservices from "../ourservices/ourservices";
import City from "../citylist/city";
import Enquire from "../enquire/enquire";
import Fixednavbar from "../../components/navbar/flotingnavbar";

const Home = ({setFix}) => {
  setFix(false)
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
