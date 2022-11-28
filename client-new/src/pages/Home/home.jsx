import React, {  useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";
import SearchMedia from '../searchmedia/seachmedia'
import Navbar from '../../components/navbar/navbar'
import Ourservices from "../ourservices/ourservices";
import City from "../citylist/city";
import Enquire from "../enquire/enquire";
import Fixednavbar from "../../components/navbar/flotingnavbar";

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
