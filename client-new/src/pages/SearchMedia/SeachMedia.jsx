import React, { useState } from "react";
import instance from "../../apis/Axios";
import { MdMyLocation } from 'react-icons/md'
import DateRangeComp from "../../components/Datepicker/DateRangeComp.jsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import './seachMedia.scss'

const SearchMedia = () => {
  const [category_name, setCategory] = useState("traditional-ooh-media");
  const [city, setCity] = useState([]);
  const [city_name, setgetCity] = useState("delhi");

    const getCity = async () => {
      const { data } = await instance.get(
        "media/searchMedia"
      );
      setCity(data);
    };

    useEffect(() => {
      getCity();
    }, []);

  return (
    <>
      <div className="search text-center">
        <div className="headingText">
          <h1 className="display-3 text-center text-dark fw-bold">India's Largest Outdoor<br />Advertising Agency</h1>
          <p className="fw-lighter text-center text-dark fw-bold">OOH Advertising made easy<br />Search Media. Check Availability. Book Online.</p>
        </div>
      </div>
    </>
  );
};

export default SearchMedia;
