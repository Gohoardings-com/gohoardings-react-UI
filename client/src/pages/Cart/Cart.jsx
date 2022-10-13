import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import axios from "axios";
import "./cart.scss";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from "../../Components/Footer/Footer";

const Cart = () => {
  const [Start, setStart] = useState(new Date());
  const [End, setEnd] = useState(new Date());
  const [totaldays, setTotaldays] = useState([]);

  const StartDate = (e) => {
    setStart(e);
  };
  const EndDate = (e) => {
    setEnd(e);
  };

  return (
    <>
        <div className="navbar-section p-0">
            <Navbar/>
        </div>
      <div className="container cart-box">
        <div className="dates position-relative pb-2 pt-4">
          <div className="start-date">
            <input type="date" onChange={(e) => StartDate(e.target.value)} className="input-group overflow-hidden border" />
          </div>
          <div className="end-date position-absolute">
            <input type="date" onChange={(e) => EndDate(e.target.value)} className="input-group overflow-hidden border ms-3" />
          </div>
        </div>
        <div className="cart-items">
          <div className="row">
            <div className="col-lg-9">
              <div className="bg-dark">
                <h4 className="my-3 py-1 ps-3 text-light">SELECTED MEDIA</h4>
              </div>
              <div className="row pt-3">
                <div className="col-4">
                  <img src="./images/media.jpg" alt="N/A" className="media-img"/>
                </div>
                <div className="col-8">
                  <ul className="list-unstyled">
                    <li>
                      <h5 className="text-light">type - name of the media</h5>
                    </li>
                    <li className="text-light">details</li>
                    <li className="text-light">details</li>
                    <li className="text-light">details</li> 
                    <li>
                      <input type="number" min={5} placeholder="5" className="input-days"/>
                    </li>
                  </ul>
                </div>
                <div className="position-relative mt-3">
                  <button className="position-absolute btn btn-secondary mt-2 remove-btn">Remove</button>
                  <hr />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-4">
                  <img src="./images/media.jpg" alt="N/A" className="media-img"/>
                </div>
                <div className="col-8">
                  <ul className="list-unstyled">
                    <li>
                      <h5 className="text-light">type - name of the media</h5>
                    </li>
                    <li className="text-light">details</li>
                    <li className="text-light">details</li>
                    <li className="text-light">details</li> 
                    <li>
                      <input type="number" min={5} placeholder="5" className="input-days"/>
                    </li>
                  </ul>
                </div>
                <div className="position-relative mt-3">
                  <button className="position-absolute btn btn-secondary mt-2 remove-btn">Remove</button>
                  <hr />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-4">
                  <img src="./images/media.jpg" alt="N/A" className="media-img"/>
                </div>
                <div className="col-8">
                  <ul className="list-unstyled">
                    <li>
                      <h5 className="text-light">type - name of the media</h5>
                    </li>
                    <li className="text-light">details</li>
                    <li className="text-light">details</li>
                    <li className="text-light">details</li> 
                    <li>
                      <input type="number" min={5} placeholder="5" className="input-days"/>
                    </li>
                  </ul>
                </div>
                <div className="position-relative mt-3">
                  <button className="position-absolute btn btn-secondary mt-2 remove-btn">Remove</button>
                  <hr />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-4">
                  <img src="./images/media.jpg" alt="N/A" className="media-img"/>
                </div>
                <div className="col-8">
                  <ul className="list-unstyled">
                    <li>
                      <h5 className="text-light">type - name of the media</h5>
                    </li>
                    <li className="text-light">details</li>
                    <li className="text-light">details</li>
                    <li className="text-light">details</li> 
                    <li>
                      <input type="number" min={5} placeholder="5" className="input-days"/>
                    </li>
                  </ul>
                </div>
                <div className="position-relative mt-3">
                  <button className="position-absolute btn btn-secondary mt-2 remove-btn">Remove</button>
                  <hr />
                </div>
              </div>
            </div>
            
            <div className="col-lg-3">
              <div className="bg-secondary text-center position-sticky total-price">
                <div className="bg-dark">
                  <h4 className="my-3 py-1 text-light">Gross Total</h4>
                </div>
                <div>
                  <h5>
                    total media : <span>3</span>
                  </h5>
                  <div>
                    <input type="number" min={5} placeholder="5" className="total-days mt-2 mb-4"/>
                  </div>
                  <h5>
                    GST(18%) : <span>Rs 9999</span>
                  </h5>
                  <h5 className="mt-3">
                    total media : <span>Rs 69999</span>
                  </h5>
                  <button className="btn btn-warning my-4">Check Availability</button>
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
export default Cart;