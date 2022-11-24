import React from "react";
import {BsFillRecord2Fill } from "react-icons/bs";
import "./dropdown.scss";
const Drop_Down_Image = ({ show, setShow, Dropdown }) => {
  return (
    <>
      <Dropdown.Menu
        show={show}
        onMouseLeave={() => setShow(false)}
        className="drop-menu w-100  pe-4 ps-4"
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
                  <BsFillRecord2Fill className="me-2" /> Traditional OOH
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" /> Mall Media
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  Airport Media
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  Multiplex Advertising
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  Office Branding
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  Bus & Auto Branding
                </li>
              </ul>
            </div>
            <div className="col-3 p-0 m-0 border-box mb-3">
              <ul className="list-none">
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  Digital Screen
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  InFlight Branding
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  Transit Media
                </li>
              </ul>
            </div>
            <div className="col-3 p-0 m-0 border-box mb-3">
              <ul className="list-none">
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  About Us
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  Team
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  News & Media
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  Testimonials
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  Case Studies
                </li>
              </ul>
            </div>
            <div className="col-3 p-0 m-0 mb-3">
              <ul className="list-none">
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  Contact Us
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  Blogs
                </li>
                <li>
                  <BsFillRecord2Fill className="me-2" />
                  FAQs
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
              <button className="btn  float-end  border-0 mt-4 me-5 text-center " id="write-btn"><h4 className="text-light"> Write To Us</h4></button>
            </div>
          </div>
          <hr/>
        </div>
      </Dropdown.Menu>
    </>
  );
};

export default Drop_Down_Image;
