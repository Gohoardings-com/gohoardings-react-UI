import React from "react";
import {BsFillRecord2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./dropdown.scss";
const Drop_Down_Image = ({ show, setShow, Dropdown }) => {

  return (
    <>
      <Dropdown.Menu
        show={show}
        onMouseLeave={() => setShow(false)}
        className="drop-menu w-100  pe-4 ps-4 position-fixed "
      >
        <div className="container-fluid ">
          <div className="row pt-2 ">
            <div className="col-6  ">
              <h5 className="ms-5  ">BROWSE MEDIA</h5>
            </div>
            <div className="col-3">
              <h5 className="ms-4  ">GOHOARDINGS</h5>
            </div>
            <div className="col-3">
              <h5 className="ms-3 "> SUPPORT & FAQ</h5>
            </div>
          </div>
          <hr />
          <div className="row m-1 drop-data">
            <div className="col-3 p-0  border-box mb-3">
              <ul className="list-none ms-2">
                <li>
                  <BsFillRecord2Fill className="me-2" /> 
                  <Link        
                  to={`/traditional-ooh-media/delhi`}
                  className="button text-dark text-nowrap is-small is-info text-decoration-none"
                  >  Traditional OOH</Link>
                 
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" /> 
  <Link        
                  to={`/mall-media/delhi`}
                  className="button text-dark text-nowrap is-small is-info text-decoration-none"
                  > Mall Media</Link>
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                <Link        
                  to={`/airport-media/delhi`}
                  className="button text-dark text-nowrap is-small is-info text-decoration-none"
                  >   Airport Media</Link>
                 
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                <Link        
                  to={`/multiplex-advertising/delhi`}
                  className="button text-dark text-nowrap is-small is-info text-decoration-none"
                  >  Multiplex Advertising</Link>
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                <Link        
                  to={`/office-branding/delhi`}
                  className="button text-dark text-nowrap is-small is-info text-decoration-none"
                  >  Office Branding</Link>
                  
                </li>
              </ul>
            </div>
            <div className="col-3 p-0 m-0 border-box mb-3">
              <ul className="list-none">
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  <Link        
                  to={`/digital-media/delhi`}
                  className="button text-dark text-nowrap is-small is-info text-decoration-none"
                  >Digital Screen</Link>
                  
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  <Link        
                  to={`/inFlight-branding/delhi`}
                  className="button text-dark text-nowrap is-small is-info text-decoration-none"
                  >InFlight Branding</Link>
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  <Link        
                  to={`/transit-media/delhi`}
                  className="button text-dark text-nowrap is-small is-info text-decoration-none"
                  >Transit Media</Link>
                  
                </li>
              </ul>
            </div>
            <div className="col-3 p-0 m-0 border-box mb-3">
              <ul className="list-none">
                <li>
                  <BsFillRecord2Fill className="me-2" />
                 <a href="/about" className="text-decoration-none text-dark">About Us</a>
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  <a href="/team" className="text-decoration-none text-dark">Team</a>
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  <a href="/news" className="text-decoration-none text-dark">News & Media</a>
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  <a href="/testimonial" className="text-decoration-none text-dark">Testimonials</a>
                  
                </li>
                {/* <li>
                  <BsFillRecord2Fill className="me-2" />
                  Case Studies
                </li> */}
                <li>
                  <BsFillRecord2Fill className="me-2" />
                 <a href="/contact" className="text-decoration-none text-dark">Conatct</a>
                </li>
              </ul>
            </div>
            <div className="col-3 p-0 m-0 mb-3">
              <ul className="list-none">
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  <a href="https://www.gohoardings.com/blog/" className="text-decoration-none text-dark" target="_blank">Blogs</a>
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  <a href="/faqs" className="text-decoration-none text-dark">FAQs</a>
                </li>
              </ul>
            </div>

            <hr />
          </div>

          <div className="row mb-2">
            <div className="col-6 ms-5">
              <h5>Get Instant Quote</h5>
              <h2 className="mt-3 text-danger">Call us on: +91 7777871717</h2>
            </div>
            <div className="col ">
              <button className="btn  float-end  border-0 mt-4 me-5 text-center " id="write-btn"><h4 className="text-light"><a className="text-decoration-none text-dark" href="/contact">Write To Us</a></h4></button>
            </div>
          </div>
          <hr/>
        </div>
      </Dropdown.Menu>
    </>
  );
};

export default Drop_Down_Image;
