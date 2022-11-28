import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import instance from "../../apis/Axios";
import UserDetail from "./UserDetail";
import Drop_Down_Image from "../DropDrown/Drop_Down_Image";
import { MdLocationOn, MdOutlineSearch } from "react-icons/md";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Select from "react-select";

const Flotinggnavbar = () => {
  const [show, setShow] = useState(false);
  const [city, setCity] = useState([]);
  const [posts, setPosts] = useState();
  const [value, setValue] = useState("delhi");
  const [userType, setUserType] = useState("traditional-ooh-media");


  const getCity = async () => {
    const { data } = await instance.get("media/searchMedia");
    setCity(data);
  };

  useEffect(() => {
    getCity();
    setPosts(posts);
  }, [posts]);



  const handleSelect = (e) => {
    setUserType(e);
  };
  let City = [];
  city.forEach((obj) => {
      City.push({ "label": obj.name, "value": obj.name })
  });

  return (
    <>
      <Navbar expand="lg  colapse-search-bar navbar-main-floating pt-2 pb-3 m-0   ">
        <Dropdown onMouseOver={() => setShow(true)}>
          <Dropdown.Toggle variant="transparent border-0 ms-1 ">
            <Navbar.Brand href="/" id="home">
              <img src="../../images/logo.png" className="brand " />
            </Navbar.Brand>
          </Dropdown.Toggle>
        </Dropdown>
        <Navbar.Toggle aria-controls=" border-0 mt-1" />
        <Drop_Down_Image show={show} setShow={setShow} Dropdown={Dropdown} />
        <Navbar.Collapse>
            <Form className="d-flex  ms-3 ">
              <Select
                defaultValue={value}
                onChange={setValue}
                options={City}
                isSearchable
                placeholder="Select your City"
                 id="search-location-box"
                className="me-2 "
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
                <Dropdown.Item eventKey="mall_media">Mall Media</Dropdown.Item>
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
            </Form>
      
          <div className="d-flex ms-4  ">
            <Nav.Link
              className="mapLink float-map-btn pt-1 text-center   rounded-pill "
              href="/map"
            >
              <MdLocationOn className=" float-map-logo  mb-1 text-danger" />
            
              <span className="map-view-float">Map View</span>
            </Nav.Link>
            <Nav className="ms-auto">
              <UserDetail posts={posts} setPosts={setPosts} />
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Flotinggnavbar;
