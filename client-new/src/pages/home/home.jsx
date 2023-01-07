import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";
import SearchMedia from '../searchmedia/searchmedia'
import Navbar from '../../components/navbar/navbar'
import Ourservices from "../ourservices/ourservices";
import Trendingcity from "../trendingcity/trendingcity";
import City from "../citylist/city";
import Enquire from "../enquire/enquire";
import Flotingnavbar from "../../components/navbar/flotingnavbar";

const Home = () => {
<<<<<<< HEAD
  
  return (
    <>
<Navbar/>
<Flotingnavbar/>
<SearchMedia/>
 <Ourservices/> 
 <City/>
<Enquire/>
{/* <Trendingcity/> */}
    </>
  );
=======

    return (
        <>
            <Navbar/>
            <Flotingnavbar/>
            <SearchMedia/>
            <Ourservices/>
            <City/>
            <Enquire/>
            <Trendingcity/>
        </>
    );
>>>>>>> cff9160fb2d4d99a816e1fcf51d1c73287feac51
};
export default Home;