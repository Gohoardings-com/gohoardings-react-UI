import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../pages/home/home.scss";

const Test = () => {
  return (
    <div>
      <div className="scroll-navigation">
        <div className="px-4 pt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <img
                  src="./images/logo.png"
                  alt=""
                  srcSet=""
                  className="brand"
                />
              </div>
              <div className="col">
                <div className="input-group mb-3 rounded-pill overflow-hidden border">
                  <span
                    className="input-group-text border-0 pe-1"
                    id="basic-addon1"
                  >
                    <img src="./images/search.svg" alt="" />
                  </span>
                  <input
                    type="search"
                    className="form-control hide-focus border-0"
                    placeholder="Search"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="col">
                <div className="input-group mb-3 rounded-pill overflow-hidden border">
                  <span
                    className="input-group-text border-0 pe-1"
                    id="basic-addon1"
                  >
                    <img src="./images/search.svg" alt="" />
                  </span>
                  <input
                    type="search"
                    className="form-control hide-focus border-0"
                    placeholder="Search"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="col">
                <div className="input-group mb-3 rounded-pill overflow-hidden border">
                  <span
                    className="input-group-text border-0 pe-1"
                    id="basic-addon1"
                  >
                    <img src="./images/search.svg" alt="" />
                  </span>
                  <input
                    type="search"
                    className="form-control hide-focus border-0"
                    placeholder="Search"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="col d-flex pt-2">
                <Nav.Link
                  className="text-light normal"
                  href="https://gohoardings.com/Register"
                >
                  Register
                </Nav.Link>
                <Nav.Link
                  className="text-light normal"
                  href="https://gohoardings.com/Signin"
                >
                  Sign In
                </Nav.Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navbar expand="lg px-md-4 colapse-search-bar">
        <div className="container-fluid px-md-4">
          <Navbar.Brand href="#home" id="home">
            <div className="brand-logo">
              <img src="./images/logo.png" alt="" srcSet="" className="brand" />
              <div className="text-light"></div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
                <div className="input-group rounded-pill overflow-hidden border h-100 me-2 ms-5">
                <span
                  className="input-group-text border-0 pe-1"
                  id="basic-addon1"
                >
                  <img src="./images/search.svg" alt="" />
                </span>
                <input
                  type="search"
                  className="form-control hide-focus border-0 py-2"
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                </div>
                <div className="input-group rounded-pill overflow-hidden border h-100 me-2 ms-2">
                <span
                  className="input-group-text border-0 pe-1"
                  id="basic-addon1"
                >
                  <img src="./images/search.svg" alt="" />
                </span>
                <input
                  type="search"
                  className="form-control hide-focus border-0 py-2"
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                </div>
                <Nav.Link className="text-center rounded-pill border search-btn-icon me-5 ms-2">
              <span
                  className="input-group-text border-0"
                  id="basic-addon1"
                >
                  <img src="./images/search.svg" alt="" />
                </span>
    
                </Nav.Link>
            <Nav className="ms-auto">
              <Nav.Link className="text-light normal" href="/Signup">
                Register
              </Nav.Link>
              <Nav.Link className="text-light normal" href="/Signin">
                SignIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Test;
