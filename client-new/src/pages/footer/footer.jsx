import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import './footer.scss'
import { Link, useNavigate } from "react-router-dom";
import {CgCheck} from 'react-icons/cg'
import axios from "axios";

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


const Footer = () => {
const navigate = useNavigate()
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

const contactPage = async() => {
 navigate('/contact')
}

return (
    <>
<div className="footer pb-3 w-100 p-0 bg-dark px-5 py-5">
<div className="container-fluid">
            <div className="row w-100">
              <div className="col py-3">
              <img src="./images/logo.png" alt="" className="brand " />
                <h5 className=" text-muted pt-5">

                India's Largest Outdoor Advertising Company
                </h5>
                <h6 className="text-muted pt-5">
                It's advertising network spread across 130 cities with more than 1.2 lakh OOH and DOOH sites offering hassle-free branding experiences at an unmatched price.
                </h6>
              </div>
              <div className="col  py-3 ">
                <div className="quick-links text-light">
                  <h4 className="fw-bold  text-nowrap text-muted ps-5">Quick Links</h4>
                  <ul className="position-relative text-muted pt-3">
                      <li href="/register" className="text-nowrap"> <CgCheck/>Singup As media Owner</li>
                      <li href="/login" className="text-nowrap"> <CgCheck/>Singin As Media Owner</li>
                      <li href="/register" className="text-nowrap"> <CgCheck/>Register As Advertiser</li>
                      <li href="/login" className="text-nowrap"> <CgCheck/>Login As Advertiser</li>
                    <span className="pos-absolute ">
                        <li className="text-nowrap" href="https://www.odoads.com/"  target="_blank">  <CgCheck/> Odoads</li>
                        <li className="text-nowrap" href="https://www.gohoardings.com/blog/" target="_blank"> <CgCheck/> Blog</li>
                        <li className="text-nowrap" href="https://www.gohoardings.com/blog/" target="_blank"> <CgCheck/> About Us</li>
                        <li className="text-nowrap" href="https://www.gohoardings.com/blog/" target="_blank"> <CgCheck/> Team</li>
                        <li className="text-nowrap" href="https://www.gohoardings.com/blog/" target="_blank"> <CgCheck/> Contact</li>
                        <li className="text-nowrap" href="https://www.gohoardings.com/blog/" target="_blank"> <CgCheck/> Privacy Policy</li>
                    </span>
                  </ul>
                </div>
              </div>
              <div className="col  py-3">
                <div className="popular-services text-light">
                  <h4 className="fw-bold text-nowrap text-muted ps-5">Popular Services</h4>
                  <ul className="   pt-3 text-muted">
                    <li>
                      <Link
                  to={`/services/${"traditional-ooh-media"}/${"delhi"}`}
                  className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                  > <CgCheck/> Traditional OOH</Link>
                </li>
                    <li>
                      <Link
                  to={`/services/${"digital-media"}/${"delhi"}`}
                  className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                > <CgCheck/> Digital Media</Link></li>
                    <li>
                      <Link
                  to={`/services/${"transit-media"}/${"delhi"}`}
                  className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                > <CgCheck/> Transit-Media</Link></li>
                    <li>
                   <Link
                  to={`/services/${"mall-media"}/${"delhi"}`}
                  className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                > <CgCheck/> Mall Media</Link></li>
                    <span className="pos-absolute end-0 top-0 me-5">
                      <li>
                       <Link
                  to={`/services/${"airport-media"}/${"delhi"}`}
                  className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                > <CgCheck/> Airport Media</Link></li>
                      <li>
                        <Link
                  to={`/services/${"inflight_media"}/${"delhi"}`}
                  className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                > <CgCheck/> Inflight Media</Link></li>
                    </span>
                  </ul>
                </div>
              </div>
              <div className="col  py-3">
              <h4 className="fw-bold text-nowrap text-muted ps-5">Trending Cities</h4>
              <ul className="position-relative pt-3 text-muted">
                    <li>
                      <Link
                  to={`/services/${"traditional-ooh-media"}/${"delhi"}`}
                  className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                  > <CgCheck/> Traditional OOH</Link>
                </li>
                    <li>
                      <Link
                  to={`/services/${"digital-media"}/${"delhi"}`}
                  className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                > <CgCheck/> Digital Media</Link></li>
                    <li>
                      <Link
                  to={`/services/${"transit-media"}/${"delhi"}`}
                  className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                > <CgCheck/> Transit-Media</Link></li>
                    <li>
                   <Link
                  to={`/services/${"mall-media"}/${"delhi"}`}
                  className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                > <CgCheck/> Mall Media</Link></li>
                    <span className="pos-absolute end-0 top-0 me-5">
                      <li>
                       <Link
                  to={`/services/${"airport-media"}/${"delhi"}`}
                  className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                > <CgCheck/> Airport Media</Link></li>
                      <li>
                        <Link
                  to={`/services/${"inflight_media"}/${"delhi"}`}
                  className="button text-light text-nowrap is-small is-info text-decoration-none text-muted"
                > <CgCheck/> Inflight Media</Link></li>
                    </span>
                  </ul>
              </div>
          
        
        </div>
        <div className="row  w-100 ">
            <div className="col-12 col-sm-3 text-light py-3">
            <h4 className="fw-bold  text-nowrap ms-2 text-muted">Payment Option</h4>
            <img className="w-50 h-auto  pt-3" src="https://cdn.shopify.com/s/files/1/0075/1009/7979/files/credit-card-icons-footer-2_6c2944f9-234e-49f3-b545-deca18efbfb9.png"  alt="payment"/>
            </div>
             <div class="col-12 col-sm-4 py-3">
                <h4 className=" fw-bold  text-nowrap text-muted  ">Address</h4>
              <h6 className="text-muted  pt-3">E-82, 3rd Floor, Sector 6, Noida - 201301 Landmark : Near Paytm Office</h6>
              <span className="strong   text-light">Phone: </span><span className="highlighted text-light">+91 77778 71717</span>
              </div>
              <div className="col-12 col-sm-4 py-3">
                  <h4 className="fw-bold text-muted  text-wrap">Best deals in your inbox</h4>
                  <h6 className=" p-2 text-muted">Join our newsletter for the most recent information.</h6>        
                   <form  className="d-flex flex-sm-row flex-column flex-lg-row flex-md-column p-2">
                      <input className="text-dark bg-light rounded-3"  type="email" placeholder="Enter you email address" formcontrolname="email"/>
                     <input className="text-dark btn bg-black ms-lg-2 mt-2 rounded-3" type="submit" value="Contact" />
                    </form>
                  
       
              </div>
        </div>
      
        <div className="row  w-100">
                <div className="col-sm-8  py-3">
                  <h4 className="fw-bold text-nowrap text-muted">Contact with Us</h4>
                  <ul className="d-flex list-inline ">
                  <Nav.Link  href="https://www.facebook.com/gohoardings/"  className="px-1" target="_blank"><img src="./images/Facebook.png" alt="facebook"/></Nav.Link>
                    <Nav.Link className="px-1" href="https://www.instagram.com/gohoardings/" target="_blank"><img src="./images/Instagram.png"  alt="instagram"/></Nav.Link>
                    <Nav.Link className="px-1" href="https://www.linkedin.com/company/gohoardings/" target="_blank"><img src="./images/Linkedin.png"  alt="linkedin"/></Nav.Link>
                    <Nav.Link className="px-1" href="https://twitter.com/gohoardings" target="_blank"><img src="./images/Twitter.png"  alt="twitter"/></Nav.Link>
                  </ul>
                  </div>
                <div className="col-sm-4  py-3 text-sm-end text-start text-bottom">
                  <h6 className="text-white fw-bolder">
                    copyrights &#169; 2022 Gohaordings.com
                  </h6>
                </div> 
        </div>
        </div>
      </div>
      </>
)
}
export default Footer;