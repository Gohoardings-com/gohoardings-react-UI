import React, {  useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";
import { GoogleLogout } from 'react-google-login'
import { clientId } from "../../apis/apis";
import { authActions } from "../../store";
import SearchMedia from '../searchmedia/searchmedia'
import Navbar from '../../components/navbar/navbar'
import Ourservices from "../ourservices/ourservices";
import City from "../citylist/city";

import Enquire from "../enquire/enquire";
import Flotingnavbar from "../../components/navbar/flotingnavbar";
import axios from "axios";


const Home = () => {
  
  const loc = async() =>{
   const res = await fetch('https://geolocation-db.com/json/67273a00-5c4b-11ed-9204-d161c2da74ce')
   const data = await res.json()
   console.log(data);
  }
  useEffect(() =>{
   loc();
  },[])

  return (
    <>
<Navbar/>
<Flotingnavbar/>
<SearchMedia/>
 <Ourservices/> 
 <City/>
<Enquire/>
{/* <div onLoadStart={logOut}>
<GoogleLogout
clientId={clientId}
buttonText={''}
onLogoutSuccess={logOut}
icon={false}
/> */}
{/* </div> */}
{/* <Trandingcity/> 
 <Navbar/>
<SearchMedia/> */}
    </>
  );
};
export default Home;
