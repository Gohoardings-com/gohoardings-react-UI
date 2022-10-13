import React, { useState } from "react";

import DateRangeComp from "../../Components/Datepicker/DateRangeComp.jsx";
import axios from "axios";
import { mediawithcity } from "../../action/adminAction";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const SearchMedia = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [category_name, setCategory] = useState("traditional-ooh-media");
  const [city, setCity] = useState([]);
  const [city_name, setgetCity] = useState("Delhi");

  const getCity = async () => {
    const { data } = await axios.get(
      "http://localhost:8080/api/v1/media/searchMedia"
    );
    setCity(data);
  };

  useEffect(() => {
    getCity();
  }, []);

  return (
    <div className="search">
      <img
        src="./images/Hoardings.png"
        alt=""
        srcSet=""
        className="mt-4 ps-5 mobile-hide"
      />
      <img
        src="./images/Hoardings.png"
        className="scale mt-4 mobile-hide"
        alt=""
        srcSet=""
      />
      <div className="location">
        <div className="container mt-3">
          <div className="row">
            <div className="col-xl-3 col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="input-group mb-3 rounded-pill overflow-hidden border">
                <select
                  className="bg-transparent border-0 py-2 text-light"
                  onChange={(e) => {
                    setgetCity(e.target.value);
                  }}
                >
                  {city.map((obj) => (
                    <option value={obj.name}>{obj.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-xl-4 col-lg-7 col-md-7 col-sm-7 col-7">
              <div className="input-group mb-3 rounded-pill overflow-hidden border">
                <span
                  className="input-group-text border-0 pe-1"
                  id="basic-addon1"
                >
                  <img src="./images/search.svg" alt="" />
                </span>
                <input
                  type="search"
                  className="form-control hide-focus border-0"
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <label className="input-group-text border-0 pe-1">
                  Media Category:
                </label>
                <select
                  className="form-control hide-focus border-0"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="None">None</option>
                  <option value="traditional-ooh-media">
                    traditional-ooh-media
                  </option>
                  <option value="digital-media">digital-media</option>
                  <option value="transit-media">transit-media</option>
                  <option value="mall-media">mall-media</option>
                  <option value="airport-media">airport-media</option>
                  <option value="inflight_media">inflight_media</option>
                  <option value="office-media">office-media</option>
                </select>
              </div>
            </div>
            <div className="col-xl-3 col-lg-7 col-md-7 col-sm-5 col-5">
              <DateRangeComp />
            </div>
            <div className="col-xl-2 col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="input-group mb-3 rounded-pill overflow-hidden border">
                <Link
                  to={`/services/${category_name}/${city_name}`}
                  className="button is-small is-info"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMedia;
