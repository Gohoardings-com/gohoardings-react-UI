import React, { useState } from "react";

import DateRangeComp from "../../components/Datepicker/DateRangeComp.jsx";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import './seachMedia.css'

const SearchMedia = () => {
//   const navigator = useNavigate();
//   const dispatch = useDispatch();
  const [category_name, setCategory] = useState("traditional-ooh-media");
  const [city, setCity] = useState([]);
  const [city_name, setgetCity] = useState("Delhi");

//   const getCity = async () => {
//     const { data } = await instance.get(
//       "media/searchMedia"
//     );
//     setCity(data);
//   };

//   useEffect(() => {
//     getCity();
//   }, []);

  return (
    
   <>
    <div className="search text-center">
        <div className="headingText">
    <h1 className="display-3">India's Largest Outdoor<br/>Advertising Agency</h1>
    <p className="fw-lighter">OOH Advertising made easy<br />Search Media. Check Availability. Book Online.</p>
        </div>
<div className="bg-white p-5 m-5 rounded-pill">
    <div className="d-flex flex-row m-5 ">

    </div>

</div>


      </div>
    
   </>
  );
};

export default SearchMedia;
