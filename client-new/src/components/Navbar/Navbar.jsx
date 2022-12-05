import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from "react-bootstrap/navbar";
import './navbar.scss'
import { MdLocationOn } from 'react-icons/md'
import Drop_Down_Image from "../drop_down/drop_down_image";
import UserDetail from "./userDetail";

const NewNAvbar = () => {
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState()
  
useEffect(() => {
  setPosts(posts)
}, [posts]);
  return (
    <>
      <Navbar expand="lg px-md-0 pb-0 fixd-nabar">
        <div className="navbar container-fluid py-md-0 ">
          <Navbar.Brand >
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
                href="/map"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/2991/2991231.png" className="ps-0 p-0 me-1  pb-1 font-map-logo" />
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

