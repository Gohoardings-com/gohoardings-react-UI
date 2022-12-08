import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import instance from "../../apis/axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./searchmedia.scss";

const SearchMedia = () => {
  const [city, setCity] = useState([]);
  const [scity, setSCity] = useState(
    "dropdown-menu show border-0  ps-3  dropdown-menu-location"
  );

  const getCity = async () => {
    const { data } = await instance.get("media/searchMedia");
    setCity(data);
  };

  useEffect(() => {
    getCity();
  }, []);

  const [value, setValue] = useState("");
  const [userType, setUserType] = useState("traditional-ooh-media");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search ", searchTerm);
  };

  const handleSelect = (e) => {
    setUserType(e);
  };
  return (
    <>
      <div className="heading-content text-center py-5  pb-5">
        <div className="headingText pt-3">
          <h1 className="text-center text-light ">
            India's Largest Outdoor
            <br />
            Advertising Agency
          </h1>
          <h6 className="fw-lighter mt-4 text-center text-light ">
            OOH Advertising made easy
            <br />
            Search Media. Check Availability. Book Online.
          </h6>
        </div>
        <div className="container-fluid  mt-5 pt-2  px-5 m-0 ">
          <div className="row  mx-auto mb-5  mt-5 p-1 search-container">
            <div className="col-md-5  me-0">
              <div className="search-location ">
                <div className="search-inner">
                  <InputGroup className="" id="input-click">
                    {/* <InputGroup.Text id="basic-addon1 ">@</InputGroup.Text> */}
                    <Form.Control
                      placeholder="Search your Location"
                      aria-describedby="basic-addon1"
                      onChange={onChange}
                      value={value}
                      id="search-location-box"
                    />
                  </InputGroup>
                </div>

                <div
                  className={
                    value
                      ? "dropdown-menu show border-0  ps-3  dropdown-menu-location p-1"
                      : "dropdown-menu border-0  ps-3  dropdown-menu-location"
                  }
                >
                  {city
                    .filter((item) => {
                      const searchTerm = value.toLowerCase();
                      const fullName = item.name.toLowerCase();

                      return (
                        searchTerm &&
                        fullName.startsWith(searchTerm) &&
                        fullName !== searchTerm
                      );
                    })
                    .slice(0, 10)
                    .map((item) => (
                      <div
                        className="border-1"
                        key={item.name}
                        onClick={() => onSearch(item.name)}
                      >
                        <h6 className=" text-secondary mt-1">{item.name}</h6>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="col-md-5  ms-0 ">
              <DropdownButton
                align="center"
                title={userType}
                id="select-media-box"
                onSelect={handleSelect}
                className="p-0"
              >
                <Dropdown.Item eventKey="traditional-ooh-media" className="p-2 mt-0 ">
                  <span><img src="../../gohoarding/new-icon/t1.png" className="select-media-icon"/></span>Traditional OOH Media
                </Dropdown.Item>
                <Dropdown.Item eventKey="mall-media" className="p-2">
                <span><img src="../../gohoarding/new-icon/t2.png" className="select-media-icon"/></span>  Mall Media
                  </Dropdown.Item>
                <Dropdown.Item eventKey="airport-media" className="p-2">
                <span><img src="../../gohoarding/new-icon/t3.png" className="select-media-icon"/></span> Airport Media
                </Dropdown.Item>
                <Dropdown.Item eventKey="office-branding" className="p-2">
                <span><img src="../../gohoarding/new-icon/t4.png" className="select-media-icon"/></span>  Office Branding
                </Dropdown.Item>
                <Dropdown.Item eventKey="inflight-media" className="p-2">
                <span><img src="../../gohoarding/new-icon/t5.png" className="select-media-icon"/></span>  Inflight Media
                </Dropdown.Item>
                <Dropdown.Item eventKey="digital-screen" className="p-2">
                <span><img src="../../gohoarding/new-icon/t6.png" className="select-media-icon"/></span>  Digital Screen
                </Dropdown.Item>
                <Dropdown.Item eventKey="transit-media" className="p-2">
                <span><img src="../../gohoarding/new-icon/t7.png" className="select-media-icon"/></span>  Transit Media
                </Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="col-md-2 p-2 ps-0">
              <Link
                to={`/${userType}/${value}`}
                className="button-serch text-white rounded-pill p-2"
              >
                <button className="search-btn">Search</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchMedia;
