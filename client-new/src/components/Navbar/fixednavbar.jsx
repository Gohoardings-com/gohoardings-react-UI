import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { getAllCity } from "../../apis/apis";
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

  const getCity = async () => {
    const  data  = await getAllCity();
    setCity(data);
  };

  useEffect(() => {
    getCity();
    setPosts(posts);
  }, []);

  const [value, setValue] = useState("delhi");
  const [userType, setUserType] = useState("traditional-ooh-media");

  let City = [];
  city.forEach((obj) => {
    City.push({ label: obj.name, value: obj.name });
  });

  return (
    <>
      <Navbar expand="lg px-md-0 pb-2 pt-0  navbar-main-floating">
       
          <Navbar.Brand href="/" id="home">
            <img
              src="../../images/logo.png"
              className="brand  border-0 ms-5   float-brand"
              onMouseOver={() => setShow(true)}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav mx-auto  ">
             
                <Select
                  defaultValue={value}
                  onChange={setValue}
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
                  onSelect={(e) => setUserType(e)}
                  className=""
                >

                  {/* <Dropdown.Item eventKey="traditional-ooh-media">
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
                  </Dropdown.Item> */}
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
                <Link to={`/${userType}/${value.label ? value.label : "delhi"}`}>
                  <Button
                    className="border-0  btn-danger ms-2 "
                    id="search-button-flotnav"
                  >
                    <MdOutlineSearch className="search-logo " />
                  </Button>
                </Link>

            </Nav>
            <form class="form-inline  ">
                  <Nav.Link
                    className="mapLink float-map-btn  ps-1  pt-1 rounded-pill "
                    href="/map"
                  >
                    <img src="../../gohoarding/new-icon/map-icon.png" className=" float-map-logo ps-0 p-0 me-1" />

                    <span className="map-view-float ">Map View</span>
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
