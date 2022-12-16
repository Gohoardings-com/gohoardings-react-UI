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


const Home = () => {

  useEffect(() =>{
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   console.log("Latitude is :", position);
   
    // });
    // navigator.geolocation.watchPosition(function(position) {
    //   console.log("Latitude is :", position);
    //   console.log("Longitude is :", position);
    // });
//     const options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };

// function success(pos) {
//   const crd = pos.coords;

//   console.log('Your current position is:');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

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
