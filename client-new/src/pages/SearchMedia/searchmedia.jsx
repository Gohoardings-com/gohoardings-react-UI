import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCity } from "../../apis/apis";
import Form from "react-bootstrap/Form";
import { BiCurrentLocation } from "react-icons/bi";
import InputGroup from "react-bootstrap/InputGroup";
import "./searchmedia.scss";
import MediaDropDown from "../../components/Media_dropDown/mediaDropDown";
import Citylocation from "../../components/cityLocation/citylocation";

const SearchMedia = () => {
  const [city, setCity] = useState([]);


<<<<<<< HEAD:client-new/src/pages/SearchMedia/searchMedia.jsx
  const [value, setValue] = useState("delhi");
=======
  const [value, setValue] = useState(" ");
>>>>>>> 99a48c6fc0b9d857f9fcc2c2fba965266523b413:client-new/src/pages/SearchMedia/searchmedia.jsx
  const [userType, setUserType] = useState("Traditional-OOH-Media");

  const onChange = async (event) => {
    setValue(event.target.value);
    const cities = event.target.value;
    const data = await getAllCity(cities);
    setCity(data);
  };

  var clt = "dropdown-menu  border-0 show ps-3  dropdown-menu-location p-1";
  const [cls, setCls] = useState(
    "dropdown-menu border-0 show   ps-3  dropdown-menu-location"
  );

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    setCls("dropdown-menu border-0  ps-3  dropdown-menu-location");
  };

  return (
    <>
      <div className="container-xxl  container-xl container-lg container-md mb-4  search-media-content">
        <div className="row">
          <div className="col-md-8 ps-0">
            <div className="heading-text mt-4">
              <h2>india's Largest</h2>

              <h1>
                Outdoor Advertising <br />
                Agency
              </h1>
              <h6 className="pt-2">
                OOH Advertising made easy Search
                <br />
                Media. Check Availability. Book Online.
              </h6>
            </div>
            <a href="/contact" className="text-decoration-none">
              <button
                type="button"
                class="btn  fw-bold p-2 ps-3 pe-3 mt-3 enquire-now text-decoration-none"
              >
                Enquire now
              </button>
            </a>
          </div>
          <div className="col-md-4 text-center p-md-0">
            <img
              src="./../gohoarding/new-icon/home-img.png"
              className="search-media-img  "
            />
          </div>
        </div>
        <section>
          <div className="container-fluid  mt-5 pt-2  px-5 m-0 ">
            <div className="row  mx-auto mb-5   p-1 search-container">
              <div className="col-md-5  me-0 pe-0">
                <div className="search-location ">
                  <div className="search-inner">
                    <InputGroup className="" id="input-click">
                      <Citylocation
                        InputGroup={InputGroup}
                        setValue={setValue}
                      />
                      <Form.Control
                        placeholder="Search your Location"
                        aria-describedby="basic-addon1"
                        onChange={onChange}
                        value={value}
                        id="search-location-box"
                        className=""
                      />
                    </InputGroup>
                  </div>

                  <div className={value ? cls : clt} id="abcd">
                    {city.map((item, i) => (
                      <div
                        key={i}
                        className="border-1"
                        onClick={() => onSearch(item.name)}
                      >
                        <option value={item.name} className=" text-dark mt-1">
                          {item.name}
                        </option>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-5  ms-0 pt-2 pb-2 ">
                <MediaDropDown userType={userType} setUserType={setUserType} />
              </div>
              <div className="col-md-2 pt-2 pb-2">
                <Link
                  to={`/${userType}/${value}`}
                  className="button-serch text-white rounded-pill "
                >
                  <button className="search-btn">Search</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SearchMedia;
