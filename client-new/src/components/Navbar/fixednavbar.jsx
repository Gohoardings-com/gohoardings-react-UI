import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mediawithcity } from "../../action/adminAction";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllCity } from "../../apis/apis";
import UserDetail from "./userDetail";
import Drop_Down_Image from "../drop_down/drop_down_image";
import { MdOutlineSearch } from "react-icons/md";
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import MediaDropDown from "../Media_dropDown/mediaDropDown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Citylocation from "../cityLocation/citylocation";

const Flotinggnavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [city, setCity] = useState([]);
  const [posts, setPosts] = useState();
  let cities;
  const getCity = async () => {
    cities = "";
    const data = await getAllCity(cities);
    setCity(data);
  };
  const data = async () => {
    await dispatch(
      mediawithcity({
        category_name: "traditional-ooh-media",
        city_name: "delhi",
      })
    );
    navigate("/map");
  };
  // const onSearch = (searchTerm) => {
  //   setValue(searchTerm);
  // };

  useEffect(() => {
    getCity();
    setPosts(posts);
  }, []);

  const [value, setValue] = useState("");
  const [userType, setUserType] = useState("Traditional-OOH-Media");

  let City = [];
  city.forEach((obj) => {
    City.push({ label: obj.name, value: obj.name });
  });

  // const hello = async (e) => {
  //   cities = e.target.value;
  //   const data = await getAllCity(cities);
  //   setCity(data);
  // };

  var clt = "dropdown-menu";
  const [cls, setCls] = useState(
    "dropdown-menu border-0 show  mt-5  ps-5 "
  );

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search ", searchTerm);
    setCls("dropdown-menu");
  };
  const onChange = async (event) => {
    setValue(event.target.value);
    const cities = event.target.value;
    const data = await getAllCity(cities);
    setCity(data);
  };


  return (
    <>
      <Navbar expand="lg px-md-0 p-1   navbar-main-floating fixed-top ">
        <Navbar.Brand href="/" id="home">
          <img
            src="../../images/logo.png"
            className="border-0 brand float-brand  "
            onMouseOver={() => setShow(true)}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav mx-auto  ">
          
 <div className="search-inner me-2">
                    <InputGroup className="" id="input-click">
                    <Citylocation InputGroup={InputGroup} setCity={setCity}/>
                      <Form.Control
                        placeholder="Search your Location"
                        aria-describedby="basic-addon1"
                        onChange={onChange}
                        value={value}
                        id="search-location-box"
                        className=" "
                      />
                    </InputGroup>
                  </div>
                  <div className={value ? cls : clt}>
                    {city.map((item) => (
                      <div
                        className="border-1"
                        key={item.name}
                        onClick={() => onSearch(item.name)}
                      >
                        <option value={item.name} className="text-dark mt-1">
                          {item.name}
                        </option>
                      </div>
                    ))}
                  </div>
            <MediaDropDown userType={userType} setUserType={setUserType} />
            <Link to={`/${userType}/${value}`}>
              <Button
                className="border-0  btn-danger ms-2 "
                id="search-button-flotnav"
              >
                <MdOutlineSearch className="search-logo " />
              </Button>
            </Link>
          </Nav>
          <form className="form-inline  ">
            <Nav.Link
              className="mapLink float-map-btn  ps-1  pt-1 rounded-pill "
              onClick={(e) => data(e)}
            >
              <img
                src="../../gohoarding/new-icon/map-icon.png"
                className=" float-map-logo ps-0 p-0 me-1"
              />

              <span className="map-view-float ">Map View</span>
            </Nav.Link>
          </form>

          <form className="form-inline mt-2 me-auto">
            <UserDetail posts={posts} setPosts={setPosts} />
          </form>
        </Navbar.Collapse>
      </Navbar>
      <Drop_Down_Image show={show} setShow={setShow} Dropdown={Dropdown} />
    </>
  );
};

export default Flotinggnavbar;
