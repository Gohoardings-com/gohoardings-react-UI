import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { mediawithcity } from "../../action/adminAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/navbar";
import './navbar.scss'
import UserDetail from "./userDetail";

const NewNAvbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [posts, setPosts] = useState()


  const data=async() =>{
  await dispatch(mediawithcity({category_name:"traditional-ooh-media", city_name:"delhi"}))
  navigate('/map')
  }
  
useEffect(() => {
  setPosts(posts)
}, []);

  return (
    <>
      <Navbar expand="lg px-md-0 pb-0 fixd-nabar2">
        <div className="navbar container-fluid py-md-0 ">
          <Navbar.Brand href="/">
            <img src="./images/logo.png" className="brand-logo ms-sm-5 ms-3" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ms-auto me-5">
              <Nav.Link
                className="me-2    nav-text-btn  text-center"
                href="https://odoads.com/"
                target="_blank"
              >
                Odoads
              </Nav.Link>
              <Nav.Link
                className=" me-2  nav-text-btn text-center "
                href="https://www.gohoardings.com/blog/"
                target="_blank"
              >
                Blog
              </Nav.Link>
              <Nav.Link 
                className="me-3    nav-text-btn text-center"
                href="/contact"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                className="mapLink font-map-btn text-white  text-nowrap rounded-pill "
                onClick={(e) => data(e)}
      
              >
                <img src="./gohoarding/new-icon/map-icon.png" className="ps-0 p-0 me-1  pb-1 font-map-logo" />
                Map View
              </Nav.Link>
              <UserDetail posts={posts} setPosts={setPosts}/>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NewNAvbar;

