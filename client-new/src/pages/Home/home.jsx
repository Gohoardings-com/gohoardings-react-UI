import React, {  useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";
import { GoogleLogout } from 'react-google-login'
import { clientId } from "../../apis/apis";
import { authActions } from "../../store";
import SearchMedia from '../searchmedia/searchMedia'
import Navbar from '../../components/navbar/navbar'
import Ourservices from "../ourservices/ourservices";
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
