import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useSelector, useDispatch} from 'react-redux'
import "./home.scss";
import Nav from "react-bootstrap/Nav";
import {cartitems} from '../../action/adminAction'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from "../../Components/Footer/Footer";
import SearchMedia from "../SearchMedia/SeachMedia";
import { Button } from "bootstrap";

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
  const dispatch = useDispatch()
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

const Home = () => {
  const [scroll] = useWindowScroll();
  const [scrollcss, setScrollcss] = useState(false);
  useEffect(() => {
    const handleCss = () => {
      if (scroll > 270) {
        setScrollcss(false);
      } else {
        setScrollcss(true);
      }
    };
    handleCss();
  }, [scroll]);

  const [width] = useWindowSize();
  const [widthcss, setWidthcss] = useState(false);
  useEffect(() => {
    const handleCss = () => {
      if (width > 767) {
        setWidthcss(false);
      } else {
        setWidthcss(true);
      }
    };
    handleCss();
  }, [width]);
 


  return (
    <>
      <div className="navbar-section p-0">
       <Navbar/>
      </div>
      <div className="home-section">
        <div
          className="container-fluid home-heading px-4"
          style={widthcss ? { display: "none" } : { display: "block" }}
        >
          <div className="px-5 home-heading-main">
            <p className="mb-0 pt-md-3">
              <span className="text-light fw-bold search-headline subhead text-center">
                Over 200,000 Hoardings across 3500 Cities
              </span>
            </p>
           <SearchMedia/>
            <p className="text-light normal py-3 ps-5">
              Continue your Search....
            </p>
          </div>
        </div>

        <div
          className="home-heading"
          style={widthcss ? { display: "block" } : { display: "none" }}
        >
          <div className="pt-3 text-center text-light">
            <p>Over 200,000 Hoardings across 3500 cities</p>
          </div>
          <div className="container-fluid px-3">
            <div className="row">
              <div className="col-12">
                <div className="input-group mb-3 rounded-pill overflow-hidden border-0 py-4 location">
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
              <div className="col-sm-7">
                <div className="input-group mb-3 rounded-pill overflow-hidden border-0 py-4 location">
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
              <div className="col-sm-5">
                <div className="input-group mb-3 rounded-pill overflow-hidden border-0 py-4 location">
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
              <div className="col-12">
                <input
                  className="btn btn-light py-3 w-100 mb-4"
                  type="submit"
                  value="Submit"
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div style={scrollcss ? { display: "none" } : { display: "block" }}>

          <div className="scroll-navigation">
            <div className="px-4">
              <div className="container-fluid mt-3">
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

        </div>

        <div className="pt-3 pb-md-5">
          <div className="container-fluid home-main pt-5">
            <div className="row">
              <div className="col-lg-4 ps-5">
                <div className="img-square mobile-hide">
                  <img src="./images/PIC.png" alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="main-heading text-light text-center">
                  <img
                    src="./images/Icons.png"
                    alt=""
                    className="icons mobile-hide"
                  />
                  <p className="fw-bold head fs-heading lh-sm pt-5">
                    India's
                    <br />
                    Largest Outdoor
                    <br />
                    Advertising Agency
                  </p>
                  <p className="normal fw-normal">
                    OOH Advertising made easy
                    <br />
                    Search Media. Check Availability. Book Online.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 position-relative">
                <img
                  src="./images/Dots.png"
                  alt=""
                  className="dots mobile-hide"
                />
                <div className="search-buttons">
                  <span className="text-light search-cities">
                    Explore Cities
                  </span>
                  <span className="text-light search-media">Explore Media</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-map py-5 px-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6">
                <div className="india-map">
                  <img src="./images/India_map.png" alt="" />
                </div>
              </div>
              <div className="col-xl-6 cities-top">
                <div className="cities text-light">
                  <p className="subhead pt-5 fw-bold">
                    India's Leading Chain Of OOH Advertising Services Agency
                  </p>
                  <p className="text-muted pt-4">
                    More Sites. More Ease. More Affordable.
                  </p>
                  <div className="d-flex pt-2">
                    <div>
                      <p className="pt-3 fw-bold subhead lh-1">
                        28 <br />
                        <span className="fw-light normal">Cities</span>
                      </p>
                    </div>
                    <div>
                      <p className="display-3 fw-bold px-5">/</p>
                    </div>
                    <div>
                      <p className="pt-3 fw-bold subhead lh-1">
                        157,000+ <br />
                        <span className="fw-light normal">
                          Hoardings & Billboards
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="position-relative">
                    <div className="row">
                      <div className="left">
                        <ul className="d-flex list-inline ul-list pt-3 ps-lg-3 normal left-cities">
                          <li className="pe-5 me-xxl-5">
                            Delhi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </li>
                          <li className="pe-5 me-xxl-5">Chennai&nbsp;&nbsp;</li>
                          <li className="pe-5 me-xxl-5">
                            Ahamadabad&nbsp;&nbsp;&nbsp;&nbsp;
                          </li>
                          <li className="pe-5 me-xxl-5">Pune</li>
                        </ul>
                      </div>
                      <div className="right">
                        <ul className="d-flex list-inline ul-list pt-3 ps-lg-3 normal right-cities">
                          <li className="pe-5 me-xxl-5">Mumbai</li>
                          <li className="pe-5 me-xxl-5">Bnaglore</li>
                          <li className="pe-5 me-xxl-5">Hyderabad</li>
                          <li className="pe-5 me-xxl-5">Jiapur</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  );
};
export default Home;
