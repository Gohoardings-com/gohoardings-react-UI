import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Home = () => {

return (
  <>
    <Navbar expand="lg px-md-4">
      <div className="container-fluid py-md-4 px-md-4">
        <Navbar.Brand href="#home">
          <img src="./images/logo.png" alt="" srcset="" className="brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-light sub-head" href="#">
              Odoads
            </Nav.Link>
            <Nav.Link className="text-light sub-head" href="#">
              Blog
            </Nav.Link>
            <Nav.Link className="text-light sub-head" href="#">
              Contact
            </Nav.Link>
            <Nav.Link
              className="text-light sub-head px-lg-3 py-1 round-circle"
              href="#"
            >
              Map View
            </Nav.Link>
            <Nav.Link className="text-light sub-head" href="#">
              Register
            </Nav.Link>
            <Nav.Link className="text-light sub-head" href="#">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    <div className="container-fluid home-heading px-4">
      <div className="px-5 home-heading-main">
        <p className="mb-0 pt-md-3">
          <span className="text-light fw-bold search-headline text-center">
            Over 200,000 Hoardings across 3500 Cities
          </span>
        </p>
        <div className="search">
          <img
            src="./images/Hoardings.png"
            alt=""
            srcset=""
            className="mt-4 ps-5 mobile-hide"
          />
          <img
            src="./images/Hoardings.png"
            className="scale mt-4 mobile-hide"
            alt=""
            srcset=""
          />
          <div className="location">
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <div class="input-group mb-3 rounded-pill overflow-hidden border">
                    <span
                      class="input-group-text border-0 pe-1"
                      id="basic-addon1"
                    ><img src="./images/search.svg" alt="" /></span>
                    <input
                      type="search"
                      class="form-control hide-focus border-0"
                      placeholder="Search"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-5">
                  <div class="input-group mb-3 rounded-pill overflow-hidden border">
                    <span
                      class="input-group-text border-0 pe-1"
                      id="basic-addon1"
                    ><img src="./images/search.svg" alt="" /></span>
                    <input
                      type="search"
                      class="form-control hide-focus border-0"
                      placeholder="Search"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div class="input-group mb-3 rounded-pill overflow-hidden border">
                    <span
                      class="input-group-text border-0 pe-1"
                      id="basic-addon1"
                    ><img src="./images/search.svg" alt="" /></span>
                    <input
                      type="search"
                      class="form-control hide-focus border-0"
                      placeholder="Search"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div class="input-group mb-3 rounded-pill overflow-hidden border">
                    <span
                      class="input-group-text border-0 pe-1"
                      id="basic-addon1"
                    ><img src="./images/search.svg" alt="" /></span>
                    <input
                      type="search"
                      class="form-control hide-focus border-0"
                      placeholder="Search"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-light sub-head py-3 ps-5">
          Continue your Search....
        </p>
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
              <p className="fw-bold fs-head fs-heading lh-sm pt-5">
                India's
                <br />
                Largest Outdoor
                <br />
                Advertising Agency
              </p>
              <p className="sub-head fw-normal">
                OOH Advertising made easy
                <br />
                Search Media. Check Availability. Book Online.
              </p>
            </div>
          </div>
          <div className="col-lg-4 position-relative">
            <img src="./images/Dots.png" alt="" className="dots mobile-hide" />
            <div className="search-buttons">
              <span className="text-light search-cities">Explore Cities</span>
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
              <p className="fs-head pt-5 fw-bold">
                India's Leading Chain Of OOH Advertising Services Agency
              </p>
              <p className="fs-6 text-muted pt-4">
                More Sites. More Ease. More Affordable.
              </p>
              <div className="d-flex pt-2">
                <div>
                  <p className="pt-3 fw-bold fs-3 lh-1">
                    28 <br />
                    <span className="fs-6 fw-light">Cities</span>
                  </p>
                </div>
                <div>
                  <p className="display-3 fw-bold px-5">/</p>
                </div>
                <div>
                  <p className="pt-3 fw-bold fs-3 lh-1">
                    157,000+ <br />{" "}
                    <span className="fs-6 fw-light">
                      Hoardings & Billboards
                    </span>
                  </p>
                </div>
              </div>
              <ul className="d-flex list-inline ul-list pt-3 ps-3 sub-head">
                <li className="pe-5 me-xxl-5">
                  Delhi &nbsp;&nbsp;&nbsp;&nbsp;
                </li>
                <li className="pe-5 me-xxl-5">Chennai&nbsp;</li>
                <li className="pe-5 me-xxl-5">
                  Hyderabad&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
                <li className="pe-5 me-xxl-5">Pune</li>
              </ul>
              <ul className="d-flex list-inline ul-list pt-2 ps-3 sub-head">
                <li className="pe-5 me-xxl-5">Mumbai</li>
                <li className="pe-5 me-xxl-5">Bnaglore</li>
                <li className="pe-5 me-xxl-5">Ahamadabad</li>
                <li className="pe-5 me-xxl-5">Jiapur</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="footer pt-3 mt-4">
      <div className="row-1 footer-bottom-line">
        <div className="container-fluid px-5 py-4">
          <div className="row">
            <div className="col-xl-2">
              <img src="./images/logo.png" alt="" className="brand pb-3" />
            </div>
            <div className="col-xl-5">
              <p>
                <span className="text-light">
                  India's Leading Chain Of OOH Advertising Services Agency
                </span>
              </p>
            </div>
            <div className="col-xl-4">
              <p className="text-light text-xl-end">
                Join our network and grow your buisness!
              </p>
            </div>
            <div className="col-xl-1">
              <input type="button" value=" text text text " />
            </div>
          </div>
        </div>
      </div>
      <div className="row-2">
        <div className="container-fluid px-5 py-4">
          <div className="row">
            <div className="col">
              <p className="text-light px-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus impedit, labore assumenda optio ipsum, odio sunt
                numquam deserunt laborum autem quis nam facilis ab ducimus illo
                laboriosam consequatur reiciendis accusantium cupiditate saepe?
                Id, accusamus fugiat.
              </p>
            </div>
            <div className="col mobile footer-side-line">
              <div className="quick-links text-light">
                <p className="fs-3 text-center">Quick Links</p>
                <ul className="position-relative px-5">
                  <li>Register As Medai Owner</li>
                  <li>Login As Media Owner</li>
                  <li>Register As Advertiser</li>
                  <li>Login As Advertiser</li>
                  <span className="pos-absolute end-0 top-0 me-5">
                    <li>Odoads</li>
                    <li>Blog</li>
                  </span>
                </ul>
              </div>
            </div>
            <div className="col mobile footer-side-line">
              <div className="popular-services text-light">
                <p className="fs-3 text-center">Popular Services</p>
                <ul className="position-relative px-5">
                  <li>Traditional OOH</li>
                  <li>Mall Media</li>
                  <li>Digital OOH Media</li>
                  <li>Airport Medai</li>
                  <span className="pos-absolute end-0 top-0 me-5">
                    <li>Office Space Advertising</li>
                    <li>Transit Media</li>
                  </span>
                </ul>
              </div>
            </div>
            <div className="footer-bottom-short-line pt-4"></div>
          </div>
        </div>
      </div>
      <div className="row-3">
        <div className="trending-cities">
          <div className="container-fluid px-5 text-light">
            <p className="fs-3 ps-4 ms-2">Trending Cities</p>
            <div className="row">
              <div className="col">
                <ul>
                  <li>Hoardings near me</li>
                  <li>Hoardings in Manali</li>
                  <li>Hoardings in Nanital</li>
                  <li>Hoardings in Mount Abu</li>
                  <li>Hoardings in Agra</li>
                  <li>Hoardings in Haridwar</li>
                  <li>Hoardings in Coimbatore</li>
                  <li>Hoardings in Gurgaon</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>Hoardings near me</li>
                  <li>Hoardings in Manali</li>
                  <li>Hoardings in Nanital</li>
                  <li>Hoardings in Mount Abu</li>
                  <li>Hoardings in Agra</li>
                  <li>Hoardings in Haridwar</li>
                  <li>Hoardings in Coimbatore</li>
                  <li>Hoardings in Gurgaon</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>Hoardings near me</li>
                  <li>Hoardings in Manali</li>
                  <li>Hoardings in Nanital</li>
                  <li>Hoardings in Mount Abu</li>
                  <li>Hoardings in Agra</li>
                  <li>Hoardings in Haridwar</li>
                  <li>Hoardings in Coimbatore</li>
                  <li>Hoardings in Gurgaon</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>Hoardings near me</li>
                  <li>Hoardings in Manali</li>
                  <li>Hoardings in Nanital</li>
                  <li>Hoardings in Mount Abu</li>
                  <li>Hoardings in Agra</li>
                  <li>Hoardings in Haridwar</li>
                  <li>Hoardings in Coimbatore</li>
                  <li>Hoardings in Gurgaon</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>Hoardings near me</li>
                  <li>Hoardings in Manali</li>
                  <li>Hoardings in Nanital</li>
                  <li>Hoardings in Mount Abu</li>
                  <li>Hoardings in Agra</li>
                  <li>Hoardings in Haridwar</li>
                  <li>Hoardings in Coimbatore</li>
                  <li>Hoardings in Gurgaon</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom-short-line pt-4"></div>
          </div>
        </div>
      </div>
      <div className="row-5">
        <div className="social-links">
          <div className="container-fluid px-5">
            <div className="row">
              <div className="col-md-4 link-center">
                <ul className="d-flex text-light list-inline pt-3 ps-3">
                  <li className="ps-3">fb</li>
                  <li className="ps-3">insta</li>
                  <li className="ps-3">in</li>
                  <li className="ps-3">twit</li>
                </ul>
              </div>
              <div className="col-md-8 link-center">
                <p className="text-light text-end pt-3">
                  copyrights &#169; 2022 Gohaordings.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
 }
export default Home


