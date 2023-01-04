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
import { useDispatch } from "react-redux";
import { googleLoginOnTap } from "../../apis/apis";
import Enquire from "../enquire/enquire";
import Flotingnavbar from "../../components/navbar/flotingnavbar";

const Home = () => {
  const dispatch = useDispatch();
  
  
  useEffect(() =>{
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //   const lat =  position.coords.latitude
  // const long =  position.coords.longitude
  //  const options = {
  //   method: 'GET',
  //   url: 'https://geocodeapi.p.rapidapi.com/GetNearestCities',
  //   params: {latitude:lat, longitude:long, range: '0'},
  //   headers: {
  //     'X-RapidAPI-Key': '5522b1cf42msh347cfc356046f57p1604a7jsne83891f309af',
  //     'X-RapidAPI-Host': 'geocodeapi.p.rapidapi.com'
  //   }
  // };
  
  // axios.request(options).then(function (response) {
  //   // console.log(response.data[0]);
  // }).catch(function (error) {
  //   // console.error(error);
  // });
  //   })
  },[])

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