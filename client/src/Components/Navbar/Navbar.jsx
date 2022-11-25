import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from "react-bootstrap/Navbar";
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
       <Navbar expand="lg px-md-4">
        <div className="container-fluid py-md-4 px-md-4">
        <Dropdown
      onMouseOver={() => setShow(true)}>
      <Dropdown.Toggle variant="transparent"  id="dropdown-basic" >   
          <Navbar.Brand >
            <img src="./images/logo.png" alt="" srcSet="" className="brand" onClick={home} />
          </Navbar.Brand>
          </Dropdown.Toggle>  
         
          </Dropdown> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          
            <Nav className="ms-auto">
              <Nav.Link
                className="text-light normal"
                href="https://odoads.com/"
                target="_blank"
              >
                Odoads
              </Nav.Link>
              <Nav.Link
                className="text-light normal"
                href="https://www.gohoardings.com/blog/"
                target="_blank"
              >
                Blog
              </Nav.Link>
              <Nav.Link
                className="text-light normal"
                href="https://gohoardings.com/contact-us"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                className="text-light normal px-lg-3 round-circle"
                href="https://gohoardings.com/map-view"
              >
                Map View
              </Nav.Link>
              <UserDetail />

            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Drop_Down_Image show={show} setShow={setShow} Dropdown={Dropdown}/>
    </>
  );
};

export default NewNAvbar;
