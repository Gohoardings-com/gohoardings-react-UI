import React, { useState } from "react";

import DateRangeComp from "../../Components/Datepicker/DateRangeComp.jsx";
import instance from "../../APIS/Axios.jsx";
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
    const { data } = await instance.get(
      "media/searchMedia"
    );
    setCity(data);
  };

  useEffect(() => {
    getCity();
  }, []);

  return (
    
    <div className="search">
      
      <div className="px-5 home-heading-main">
                  <p className="mb-0 pt-md-3">
              <span className="text-light fw-bold search-headline subhead text-center">
                Over 200,000 Hoardings across 3500 Cities
              </span>
            </p>
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
          <div className="row pb-3">
            <div className="col-xl-3 col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="input-group rounded-pill overflow-hidden border h-100">
                <select
                  className="bg-transparent border-0 py-2 ps-2 text-light sel-city"
                  onChange={(e) => {
                    setgetCity(e.target.value);
                  }}
                >
                  {city.map((obj) => (
                    <option value={obj.name} className="text-dark">{obj.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-xl-4 col-lg-7 col-md-7 col-sm-7 col-7">
              <div className="input-group rounded-pill overflow-hidden border h-100">
                <select
                  className="form-control hide-focus border-0 py-2"
                  onChange={(e) => setCategory(e.target.value)}
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
            <div className="col-xl-3 col-lg-7 col-md-7 col-sm-5 col-5">
              <DateRangeComp />
            </div>
            <div className="col-xl-2 col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="w-100 text-center rounded-pill overflow-hidden border btn py-2">
                <Link
                  to={`/services/${category_name}/${city_name}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-light normal py-3 ps-5">
        Continue your Search....
      </p>
      </div>
    </div>
  );
};

export default SearchMedia;
