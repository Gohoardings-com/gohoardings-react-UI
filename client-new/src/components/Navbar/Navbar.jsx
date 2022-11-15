import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from "react-bootstrap/Navbar";
import './navbar.scss'
import {MdLocationOn} from 'react-icons/md'
import { useNavigate } from "react-router-dom";
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
        <div className="navbar container-fluid py-md-0 ">
          {/* <Dropdown
            onMouseOver={() => setShow(true)}>
            <Dropdown.Toggle variant="transparent" id="dropdown-basic" > */}
              <Navbar.Brand >
                <img src="./images/logo.png" className="brand ms-sm-5 ms-3" onClick={home} />
            </Navbar.Brand>
             {/*  </Dropdown.Toggle>

          </Dropdown> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ms-auto me-5">
              <Nav.Link
                className="navLink ps-3"
                href="https://odoads.com/"
                target="_blank"
              >
                Odoads
              </Nav.Link>
              <Nav.Link
                className="navLink ps-3"
                href="https://www.gohoardings.com/blog/"
                target="_blank"
              >
                Blog
              </Nav.Link>
              <Nav.Link
                className="navLink ps-3 pe-3"
                href="https://gohoardings.com/contact-us"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                className="mapLink text-white text-center  px-lg-3 text-nowrap rounded-pill bold"
                href="https://gohoardings.com/map-view"
              >
                <MdLocationOn className="ps-0"/>
                Map View
              </Nav.Link>
              {/* <UserDetail /> */}
              <Nav.Link
                  className="navLink ps-3"
                  href="/register"
                >
                  Register
                </Nav.Link>
                <Nav.Link
                  className="navLink ps-3"
                  href="/login"
                >
                  Sign In
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {/* <Drop_Down_Image show={show} setShow={setShow} Dropdown={Dropdown} /> */}
    </>
  );
};

export default NewNAvbar;
