import React, {  useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home2.scss";
import axios from "axios";
import { authActions } from "../../store";
import SearchMedia from '../searchMedia2/searchmedia'
import Navbar from '../../components2/navbar/navbar2'
import Ourservices from "../ourservices2/ourservices";
import City from "../citylist2/city";
import Enquire from "../enquire2/enquire";
import Flotingnavbar from "../../components2/navbar/flotingnavbar2";
import { useSelector, useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie';
import Header from "../../components2/header/header";
import Trandingcity from "../trandingcity/trandingcity";


const Home2 = () => {

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(function(position) {
    const lat =  position.coords.latitude
  const long =  position.coords.longitude
   const options = {
    method: 'GET',
    url: 'https://geocodeapi.p.rapidapi.com/GetNearestCities',
    params: {latitude:lat, longitude:long, range: '0'},
    headers: {
      'X-RapidAPI-Key': '5522b1cf42msh347cfc356046f57p1604a7jsne83891f309af',
      'X-RapidAPI-Host': 'geocodeapi.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    // console.log(response.data[0]);
  }).catch(function (error) {
    // console.error(error);
  });
    })
  },[])

  return (
    <>
    <Header/>
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
export default Home2;