import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from "react-bootstrap/Navbar";
import './navbar.css'
import {MdLocationOn} from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import UserDetail from "./UserDetail";
import Drop_Down_Image from "../DropDrown/Drop_Down_Image";


const NewNAvbar = () => {

  const navigate = useNavigate();

  const [show, setShow] = useState(false);


  const home = async () => {
    navigate('/')
  }

  return (
    <>
      <Navbar expand="lg px-md-0">
        <div className="navbar container-fluid py-md-0 px-md-4">
          {/* <Dropdown
            onMouseOver={() => setShow(true)}>
            <Dropdown.Toggle variant="transparent" id="dropdown-basic" > */}
              <Navbar.Brand >
                <img src="./images/logo.png" className="brand" onClick={home} />
            </Navbar.Brand>
             {/*  </Dropdown.Toggle>

          </Dropdown> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className=" ms-auto">
              <Nav.Link
                className="navLink  ps-3"
                href="https://odoads.com/"
                target="_blank"
              >
                Odoads
              </Nav.Link>
              <Nav.Link
                className="navLink ps-3 "
                href="https://www.gohoardings.com/blog/"
                target="_blank"
              >
                Blog
              </Nav.Link>
              <Nav.Link
                className="navLink ps-3 pe-2"
                href="https://gohoardings.com/contact-us"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                className="mapLink text-white text-center ps-5  px-lg-3 rounded-pill bold"
                href="https://gohoardings.com/map-view"
              >
                <MdLocationOn/>
                Map View
              </Nav.Link>
              <UserDetail />

            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {/* <Drop_Down_Image show={show} setShow={setShow} Dropdown={Dropdown} /> */}
    </>
  );
};

export default NewNAvbar;
