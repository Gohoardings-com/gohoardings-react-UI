import React, { useEffect, useState } from 'react'
import { MdOutlineMail } from 'react-icons/md'
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import './fixednavbar.scss'
function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth]);



  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}




function useWindowScroll() {
  const [scrollPosition, setScrollPosition] = useState([window.pageYOffset]);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition([window.pageYOffset]);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollPosition;
}
const Fixednavbar = () => {
  const [scroll] = useWindowScroll();
  const [scrollcss, setScrollcss] = useState(false);

  useEffect(() => {
    const handleCss = () => {
      if (scroll > 500) {
        setScrollcss(false);
      } else {
        setScrollcss(true);
      }
    };
    handleCss();
  }, [scroll]);

  return (
    <>
      <div style={scrollcss ? { display: "none" } : { display: "block" }} className="new-search w-100 p-0 ">
          <div className="container-fluid px-md-4">
        <Navbar expand="lg px-md-4 colapse-search-bar rounded-4">
            <Dropdown  >
              {/* onMouseOver={() => setShow(true)} */}
              <Dropdown.Toggle variant="transparent"   >
                <Navbar.Brand href="#home" id="home">
                  {/* <div className="brand-logo"> */}
                  <img src="./images/logo.png" alt="" srcSet="" className="brand" />
                  {/* <div className="text-light"></div> */}
                  {/* </div> */}
                </Navbar.Brand>
              </Dropdown.Toggle>
            </Dropdown>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* <Drop_Down_Image show={show} setShow={setShow} Dropdown={Dropdown}/> */}
            <Navbar.Collapse id="basic-navbar-nav" className="new-search-fields">
              <div className="border border-dark h-auto input-group ms-lg-3 overflow-hidden rounded-pill w-50">
               
                <Form.Select aria-label="Default select example"   className="form-control hide-focus border-0 py-2">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
               
              </div>
              <div className="border border-dark h-auto input-group ms-lg-3 overflow-hidden rounded-pill w-50">
              
              <Form.Select aria-label="Default select example"   className="form-control hide-focus border-0  py-2">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
              </div>
            
              <Nav>
              <Nav.Link
                  className="fw-bolder ms-1 nav-link  text-dark"
                  href="/register"
                >
                  Register
                </Nav.Link>
                <Nav.Link
                  className="fw-bolder ms-1 nav-link  text-nowrap text-dark"
                  href="/login"
                >
                  Sign In
                </Nav.Link>
              </Nav>

            </Navbar.Collapse>
        </Navbar>
          </div>
      </div>
    </>
  )
}

export default Fixednavbar
