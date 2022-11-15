import React, { useState } from "react";
import { MdMyLocation } from 'react-icons/md'
import DateRangeComp from "../../components/Datepicker/DateRangeComp.jsx";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import './seachMedia.scss'

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
          <h1 className="display-3 text-center text-dark fw-bold">India's Largest Outdoor<br />Advertising Agency</h1>
          <p className="fw-lighter text-center text-dark fw-bold">OOH Advertising made easy<br />Search Media. Check Availability. Book Online.</p>
        </div>
        <div className="container p-4 pb-0">
            <div className="row cityCategory p-3  bg-light  rounded-pill" id="cityCategory">
              <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 city-category">
              <select
                  className="hide-focus border-0 py-3 ps-3 input-group rounded-pill overflow-hidden border h-100 bg-white"
                >
                  <option value="None" className="text-dark">None</option>
                  <option value="traditional-ooh-media" className="text-dark">
                    traditional-ooh-media
                  </option>
                  <option className="text-dark" value="digital-media">digital-media</option>
                  <option className="text-dark" value="transit-media">transit-media</option>
                  <option className="text-dark" value="mall-media">mall-media</option>
                  <option className="text-dark" value="airport-media">airport-media</option>
                  <option className="text-dark" value="inflight_media">inflight_media</option>
                  <option className="text-dark" value="office-media">office-media</option>
                </select>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12">
              <div className="input-group rounded-pill overflow-hidden border h-100 bg-white">
                <select
                  className="hide-focus border-0 py-3 ps-3"
              
                >
                  <option value="None" className="text-dark">None</option>
                  <option value="traditional-ooh-media" className="text-dark">
                    traditional-ooh-media
                  </option>
                  <option className="text-dark" value="digital-media">digital-media</option>
                  <option className="text-dark" value="transit-media">transit-media</option>
                  <option className="text-dark" value="mall-media">mall-media</option>
                  <option className="text-dark" value="airport-media">airport-media</option>
                  <option className="text-dark" value="inflight_media">inflight_media</option>
                  <option className="text-dark" value="office-media">office-media</option>
                </select>
              </div>
            </div>
           <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 home-search-btn">
                <button className="button-serch text-white rounded-pill p-3">Serach</button>
            </div>
            </div>
         
        </div>
      </div>
    </>
  );
};

export default SearchMedia;
