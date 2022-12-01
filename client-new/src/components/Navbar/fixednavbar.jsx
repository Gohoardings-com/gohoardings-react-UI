import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import instance from "../../apis/Axios";
import UserDetail from "./userDetail";
import Drop_Down_Image from "../drop_down/drop_down_image";
import { MdLocationOn, MdOutlineSearch } from "react-icons/md";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Select from "react-select";

const Flotinggnavbar = () => {
  const [show, setShow] = useState(false);
  const [city, setCity] = useState([]);
  const [posts, setPosts] = useState();
  const [selectedOption, setSelectedOption] = useState(null);

  const getCity = async () => {
    const { data } = await instance.get("media/searchMedia");
    setCity(data);
  };

  useEffect(() => {
    getCity();
    setPosts(posts);
  }, [posts]);

  const [value, setValue] = useState("delhi");
  const [userType, setUserType] = useState("Select Media Type");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
  };

  const handleSelect = (e) => {
    setUserType(e);
  };
  let City = [];
  city.forEach((obj) => {
    City.push({ label: obj.name, value: obj.name });
  });

  return (
    <>
      <Navbar expand="lg px-md-0 pb-2  navbar-main-floating">
       
          <Navbar.Brand href="/" id="home">
            <img
              src="../../images/logo.png"
              className="brand  border-0 ms-5  pb-1 float-brand"
              onMouseOver={() => setShow(false)}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav mx-auto  ">
             
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={City}
                  isSearchable
                  placeholder="Select your City"
                  id="search-location-box"
                  className="me-2  "
                />
                <DropdownButton
                  align="center"
                  title={userType}
                  placeholder="Search your City"
                  id="select-media-box"
                  onSelect={handleSelect}
                  className=""
                >
                  <Dropdown.Item eventKey="traditional-ooh-media">
                    Traditional OOH Media
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="mall_media">
                    Mall Media
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="airport_media">
                    Airport Media
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="office_branding">
                    Office Branding
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="inflight_media">
                    Inflight Media
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="digital_screen">
                    Digital Screen
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="transit_media">
                    Transit Media
                  </Dropdown.Item>
                </DropdownButton>
                <Link to={`/${userType}/${value}`}>
                  <Button
                    className="border-0  btn-danger ms-2 "
                    id="search-button-flotnav"
                  >
                    <MdOutlineSearch className="search-logo " />
                  </Button>
                </Link>
           
             
            </Nav>
            <form class="form-inline my-2 my-lg-0 ">
                  <Nav.Link
                    className="mapLink float-map-btn  ps-1  mb rounded-pill "
                    href="/map"
                  >
                    <MdLocationOn className=" float-map-logo  mb-1 text-danger" />

                    <span className="map-view-float">Map View</span>
                  </Nav.Link>
                </form>
              
            <form class="form-inline my-2 my-lg-0 me-auto">
                <UserDetail posts={posts} setPosts={setPosts} />
              </form>
          </Navbar.Collapse>
      </Navbar>
      <Drop_Down_Image show={show} setShow={setShow} Dropdown={Dropdown} />
    </>
  );
};

export default Flotinggnavbar;
