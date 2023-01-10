import React, {useState} from "react";
import {Link} from "react-router-dom";
import {getAllCity} from "../../apis/apis";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./searchmedia.scss";
import MediaDropDown from "../../components/media_dropdown/mediadropdown";
import Citylocation from "../../components/cityLocation/citylocation";

const SearchMedia = () => {
  const [city, setCity] = useState([]);
  const [value, setValue] = useState("");

  const [focus,setFocus] = useState(false);
  const [userType, setUserType] = useState("Traditional-OOH-Media");

  const onChange = async (event) => {
    setValue(event.target.value);
    const cities = event.target.value;
    const data = await getAllCity(cities);
    setCity(data);
  };




  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  setFocus(false)
  };
console.log(value);
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
                className="btn  fw-bold p-2 ps-3 pe-3 mt-3 enquire-now text-decoration-none"
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
                      autoComplete="off"
                        placeholder="Search your Location"
                        aria-describedby="basic-addon1"
                        onChange={onChange}
                        value={value}
                        onFocus={() => setFocus(true)}
                        // onBlur={() => setFocus(false)}
                        id="search-location-box"
                        className=""
                      />
                    </InputGroup>
                  </div>
                  <div className={focus ?    "dropdown-menu  border-0 show ps-3  dropdown-menu-location p-1" :    "dropdown-menu" } id="abcd">
                    {city.map((item, i) => (
                      <div
                        key={i}
                        className="border-1"
                        onClick={() => onSearch(item.name)}
                      >
                        <option value={item.name} className=" text-dark mt-1" >
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
                 to={`/${userType}/${value ? value : "delhi"}`}
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
