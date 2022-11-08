import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux'
import "./home.scss";
import SearchMedia from '../SearchMedia/seachMedia'
import Navbar from '../../components/Navbar/navbar'
import Nav from "react-bootstrap/Nav";
import { useNavigate,Link } from "react-router-dom";
// import Navbar from '../../components/Navbar/navbar'
// import SearchMedia from "../SearchMedia/seachMedia";
import Drop_Down_Image from "../../components/DropDrown/Drop_Down_Image";
import Dropdown from 'react-bootstrap/Dropdown';
import UserDetail from "../../components/Navbar/UserDetail";
import Header from "../../components/header/header";
import Ourservices from "../ourservices/ourservices";
import City from "../citylist/city";
import Enquire from "../enquire/enquire";
import Footer from "../footer/footer";
import Trandingcity from "../trandingcity/trandingcity";
import Fixednavbar from "../../components/Navbar/fixednavbar";

// function useWindowSize() {
//   const [size, setSize] = useState([window.innerWidth]);



//   useEffect(() => {
//     const handleResize = () => {
//       setSize([window.innerWidth]);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return size;
// }




// function useWindowScroll() {
//   const dispatch = useDispatch()
//   const [scrollPosition, setScrollPosition] = useState([window.pageYOffset]);
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition([window.pageYOffset]);
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return scrollPosition;
// }

const Home = () => {
//   const navigate = useNavigate()
//   const [scroll] = useWindowScroll();
//   const [scrollcss, setScrollcss] = useState(false);
//   const [category_name, setCategory] = useState("traditional-ooh-media");
//   const [city, setCity] = useState([]);
//   const [city_name, setgetCity] = useState("Delhi");
//   const [show, setShow] = useState(false);

//   const getCity = async () => {
//     const { data } = await axios.get(
//       "http://localhost:8080/api/v1/media/searchMedia"
//     );
//     setCity(data);
//   };

//   useEffect(() => {
//     const handleCss = () => {
//       if (scroll > 325) {
//         setScrollcss(false);
//       } else {
//         setScrollcss(true);
//       }
//     };
//     handleCss();
//   }, [scroll]);

//   const [width] = useWindowSize();
//   const [widthcss, setWidthcss] = useState(false);
//   useEffect(() => {
//     getCity()
//     const handleCss = () => {
//       if (width > 767) {
//         setWidthcss(false);
//       } else {
//         setWidthcss(true);
//       }
//     };
//     handleCss();
//   }, [width]);

//  const getCites =async() =>{
//   navigate('/city')
//  }

//  const getMedias = async() => {
//   navigate('./media')
//  }



  return (
    <>
      {/* <div className="navbar-section p-0">
       <NewNAvbar/>
      </div>
      <div className="home-section">
        <div
          className="container-fluid home-heading px-4"
          style={widthcss ? { display: "none" } : { display: "block" }}
        >
           <SearchMedia/>
        </div>

        <div style={scrollcss ? { display: "none" } : { display: "block" }} className="new-search">
                <Navbar expand="lg px-md-4 colapse-search-bar">
        <div className="container-fluid px-md-4">
        <Dropdown onMouseOver={() => setShow(true)} >
            <Dropdown.Toggle variant="transparent"   >  
          <Navbar.Brand href="#home" id="home">
        
              <img src="./images/logo.png" alt="" srcSet="" className="brand" />

    
          </Navbar.Brand>
          </Dropdown.Toggle>   
          </Dropdown> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Drop_Down_Image show={show} setShow={setShow} Dropdown={Dropdown}/>
        <Navbar.Collapse id="basic-navbar-nav" className="new-search-fields">
                <div className="input-group rounded-pill overflow-hidden border h-100 me-lg-2 ms-lg-5">
                <span
                  className="input-group-text border-0 pe-1"
                  id="basic-addon1"
                >
                
                    <select
                  className="form-control hide-focus border-0 text-white "
                  onChange={(e) => {
                    setgetCity(e.target.value);
                  }}
                >
                  {city.slice(0,10).map((obj) => (
                    <option className="text-dark" value={obj.name}>{obj.name}</option>
                  ))}
                </select>
 
                </span>
                <input
                  type="search"
                  className="form-control hide-focus border-0 py-2"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                </div>
                <div className="input-group rounded-pill overflow-hidden border h-100 me-lg-2 ms-lg-2">
                <span
                  className="input-group-text border-0 pe-1"
                  id="basic-addon1"
                >

               
                  <select   className="form-control hide-focus border-0 text-white py-2"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option className="text-dark" value="None">None</option>
                  <option className="text-dark" value="traditional-ooh-media">
                    traditional-ooh-media
                  </option>
                  <option className="text-dark" value="digital-media">digital-media</option>
                  <option className="text-dark" value="transit-media">transit-media</option>
                  <option className="text-dark" value="mall-media">mall-media</option>
                  <option className="text-dark" value="airport-media">airport-media</option>
                  <option className="text-dark" value="inflight_media">inflight_media</option>
                  <option className="text-dark" value="office-media">office-media</option>
                </select>
              
                </span>
                <input
                  className="form-control hide-focus border-0 py-2"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              
                </div>
                <Nav.Link className="text-center rounded-pill border search-btn-icon me-lg-5 ms-lg-2">
              <span
                  className="input-group-text border-0"
                  id="basic-addon1"
                >
                  <Link
                  to={`/services/${category_name}/${city_name}`}>
                  <img src="./images/search.svg" className="mb-3" alt="" />
                </Link>
                </span>
    
                </Nav.Link>
           <UserDetail/>
          </Navbar.Collapse>
 
   
        </div>
      </Navbar>
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
                  <span className="text-light search-cities" onClick={getCites}>
                    Explore Cities
                  </span>
                  <span className="text-light search-media" onClick={getMedias}>Explore Media</span>
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
                    <div className="row cities-list">
                      <div className="left">
                        <ul className="d-flex list-inline ul-list pt-3 ps-lg-3 normal left-cities">
                        <li  className="pe-5 me-xxl-5"><Link
                  to={`/services/${"traditional-ooh-media"}/${"delhi"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Delhi</Link></li>
                  <li  className="pe-5 me-xxl-5"><Link
                  to={`/services/${"traditional-ooh-media"}/${"chennai"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Chennai</Link></li>
                 <li  className="pe-5 me-xxl-5"><Link
                  to={`/services/${"traditional-ooh-media"}/${"ahamadabad"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Ahamadabad</Link></li>
                  <li  className="pe-5 me-xxl-5"><Link
                  to={`/services/${"traditional-ooh-media"}/${"pune"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Pune</Link></li>
                        </ul>
                      </div>
                      <div className="right">
                        <ul className="d-flex list-inline ul-list pt-3 ps-lg-3 normal right-cities">
                          <li  className="pe-5 me-xxl-5"><Link
                  to={`/services/${"traditional-ooh-media"}/${"mumbai"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Mumbai</Link></li>
                  <li  className="pe-5 me-xxl-5"><Link
                  to={`/services/${"traditional-ooh-media"}/${"bnaglore"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Bnaglore</Link></li>
                 <li  className="pe-5 me-xxl-5"><Link
                  to={`/services/${"traditional-ooh-media"}/${"hyderabad"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Hyderabad</Link></li>
                  <li  className="pe-5 me-xxl-5"><Link
                  to={`/services/${"traditional-ooh-media"}/${"jiapur"}`}
                  className="button text-light is-small is-info py-2 text-decoration-none"
                >Jiapur</Link></li>
                
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
<Header/>
<Navbar/>
<SearchMedia/>
<Fixednavbar/>
 <Ourservices/> 
 <City/>
<Enquire/>
{/* <Trandingcity/>  */}
<Footer/>

{/* <Navbar/>
<SearchMedia/> */}
    </>
  );
};
export default Home;
