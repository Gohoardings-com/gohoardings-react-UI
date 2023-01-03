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
import {  MdOutlineSearch } from "react-icons/md";
import {  Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import MediaDropDown from "../Media_dropDown/mediaDropDown";

const Flotinggnavbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [city, setCity] = useState([]);
  const [posts, setPosts] = useState();

  const getCity = async () => {
    const  data  = await getAllCity();
    setCity(data);
  };
  const data=async() =>{
    await dispatch(mediawithcity({category_name:"traditional-ooh-media", city_name:"delhi"}))
    navigate('/map')
    }
    const onSearch = (searchTerm) => {
      setValue(searchTerm);
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
      <Navbar expand="lg px-md-0 p-1   navbar-main-floating fixed-top ">
       
          <Navbar.Brand href="/" id="home">
            <img
              src="../../images/logo.png"
              className="border-0 brand float-brand  "
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
                  openMenuOnClick={onSearch}
                  isSearchable
                  placeholder="Select your City"
                  id="search-location-box"
                  className="me-2  "
                />
                <MediaDropDown userType={userType} setUserType={setUserType}/>
                <Link to={`/${userType}/${value.label ? value.label : "delhi"}`}>
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
                    <img src="../../gohoarding/new-icon/map-icon.png" className=" float-map-logo ps-0 p-0 me-1" />

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
