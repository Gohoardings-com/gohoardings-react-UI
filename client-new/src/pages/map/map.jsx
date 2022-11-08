import React from "react";
import GoogleMapReact from "google-map-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./map.scss";
import Slider from "./slider.jsx";
import { useState } from "react";
import MultiRangeSlider from "./multiRangeSlider";

const AnyReactComponent = () => <div><img src="./assests/map-icons/billboard.png" alt="" /></div>;

const Map = () => {

  const [ Distance, Setdistance] = useState(0);

  function HandleDistance(Dis) {
    Setdistance(Dis)
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 p-0 border-end position-relative">
          <div className="row filter-icons m-0">
            <div className="col-4 list d-inline-block text-center py-2 shadow-sm border-top-0 border collapse-none" data-bs-toggle="collapse" data-bs-target="#collapseT1" aria-expanded="true" aria-controls="collapseT1">
              <img src="./assests/map-icons/list.png" alt="N/A" />
            </div>
            <div className="col-4 poi d-inline-block text-center py-2 shadow-sm border-top-0 border collapse-none" id="test" data-bs-toggle="collapse" data-bs-target="#collapseT2" aria-expanded="false" aria-controls="collapseT2">
              <img src="./assests/map-icons/poi.png" alt="N/A" />
            </div>
            <div className="col-4 filter d-inline-block text-center py-2 shadow-sm border-top-0 border collapse-none" data-bs-toggle="collapse" data-bs-target="#collapseT3" aria-expanded="false" aria-controls="collapseT3">
              <img src="./assests/map-icons/filter.png" alt="N/A" />
            </div>
          </div>
          <div id="accordionTest">
            <div className="media-items p-2 accordion-collapse collapse show" id="collapseT1" data-bs-parent="#accordionTest">
              <div className="accordion items mb-2 rounded" id="accordionExample">
                <div className="accordion-item border rounded mb-2">
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {/* <div className=""> */}
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-4">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>Code : GOH00M61</li>
                          <li>FTF : Unipole</li>
                          <li>Size : 30 x 20 feet</li>
                          <li>
                            Price : <a href="JavaScript:void(0)">Login to see</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* </div> */}
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong>{" "}
                        It is shown by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can modify
                        any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML
                        can go within the <code>.accordion-body</code>, though the
                        transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border rounded mb-2">
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    {/* <div className=""> */}
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-4">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>Code : GOH00M61</li>
                          <li>FTF : Unipole</li>
                          <li>Size : 30 x 20 feet</li>
                          <li>
                            Price : <a href="JavaScript:void(0)">Login to see</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* </div> */}
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong>{" "}
                        It is shown by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can modify
                        any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML
                        can go within the <code>.accordion-body</code>, though the
                        transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border rounded mb-2">
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    {/* <div className=""> */}
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-4">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>Code : GOH00M61</li>
                          <li>FTF : Unipole</li>
                          <li>Size : 30 x 20 feet</li>
                          <li>
                            Price : <a href="JavaScript:void(0)">Login to see</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* </div> */}
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong>{" "}
                        It is shown by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can modify
                        any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML
                        can go within the <code>.accordion-body</code>, though the
                        transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border rounded mb-2">
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    {/* <div className=""> */}
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-4">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>Code : GOH00M61</li>
                          <li>FTF : Unipole</li>
                          <li>Size : 30 x 20 feet</li>
                          <li>
                            Price : <a href="JavaScript:void(0)">Login to see</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* </div> */}
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong>{" "}
                        It is shown by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can modify
                        any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML
                        can go within the <code>.accordion-body</code>, though the
                        transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border rounded mb-2">
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="true"
                    aria-controls="collapseFive"
                  >
                    {/* <div className=""> */}
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-4">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>Code : GOH00M61</li>
                          <li>FTF : Unipole</li>
                          <li>Size : 30 x 20 feet</li>
                          <li>
                            Price : <a href="JavaScript:void(0)">Login to see</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* </div> */}
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong>{" "}
                        It is shown by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can modify
                        any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML
                        can go within the <code>.accordion-body</code>, though the
                        transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border rounded mb-2">
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="true"
                    aria-controls="collapseSix"
                  >
                    {/* <div className=""> */}
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-4">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>Code : GOH00M61</li>
                          <li>FTF : Unipole</li>
                          <li>Size : 30 x 20 feet</li>
                          <li>
                            Price : <a href="JavaScript:void(0)">Login to see</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* </div> */}
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong>{" "}
                        It is shown by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can modify
                        any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML
                        can go within the <code>.accordion-body</code>, though the
                        transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border rounded mb-2">
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="true"
                    aria-controls="collapseSeven"
                  >
                    {/* <div className=""> */}
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-4">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>Code : GOH00M61</li>
                          <li>FTF : Unipole</li>
                          <li>Size : 30 x 20 feet</li>
                          <li>
                            Price : <a href="JavaScript:void(0)">Login to see</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* </div> */}
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong>{" "}
                        It is shown by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can modify
                        any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML
                        can go within the <code>.accordion-body</code>, though the
                        transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="poi-items accordion-collapse collapse" id="collapseT2" data-bs-parent="#accordionTest">

                <div className="row">
                <div className="col-4 d-inline-block text-center py-4 shadow-sm border position-relative collapsed" data-bs-toggle="collapse" data-bs-target="#poiOne" aria-expanded="false">
                  <img src="./assests/map-icons/education.png" alt="N/A" />
                  <span className="bg-light bg-opacity-75 position-absolute start-0 top-0 h-100 w-100 accordion-collapse collapse" id="poiOne"><img src="./assests/map-icons/check.png" className="poi-check" /></span>
                </div>
                <div className="col-4 d-inline-block text-center py-4 shadow-sm border position-relative collapsed" data-bs-toggle="collapse" data-bs-target="#poiTwo" aria-expanded="false">
                  <img src="./assests/map-icons/bar.png" alt="N/A" />
                  <span className="bg-light bg-opacity-75 position-absolute start-0 top-0 h-100 w-100 accordion-collapse collapse" id="poiTwo"><img src="./assests/map-icons/check.png" className="poi-check" /></span>
                </div>
                <div className="col-4 d-inline-block text-center py-4 shadow-sm border position-relative collapsed" data-bs-toggle="collapse" data-bs-target="#poiThree" aria-expanded="false">
                  <img src="./assests/map-icons/hotel.png" alt="N/A" />
                  <span className="bg-light bg-opacity-75 position-absolute start-0 top-0 h-100 w-100 accordion-collapse collapse" id="poiThree"><img src="./assests/map-icons/check.png" className="poi-check" /></span>
                </div>
                <div className="col-4 d-inline-block text-center py-4 shadow-sm border position-relative collapsed" data-bs-toggle="collapse" data-bs-target="#poiFour" aria-expanded="false">
                  <img src="./assests/map-icons/restaurant.png" alt="N/A" />
                  <span className="bg-light bg-opacity-75 position-absolute start-0 top-0 h-100 w-100 accordion-collapse collapse" id="poiFour"><img src="./assests/map-icons/check.png" className="poi-check" /></span>
                </div>
                <div className="col-4 d-inline-block text-center py-4 shadow-sm border position-relative collapsed" data-bs-toggle="collapse" data-bs-target="#poiFive" aria-expanded="false">
                  <img src="./assests/map-icons/hospital.png" alt="N/A" />
                  <span className="bg-light bg-opacity-75 position-absolute start-0 top-0 h-100 w-100 accordion-collapse collapse" id="poiFive"><img src="./assests/map-icons/check.png" className="poi-check" /></span>
                </div>
                <div className="col-4 d-inline-block text-center py-4 shadow-sm border position-relative collapsed" data-bs-toggle="collapse" data-bs-target="#poiSix" aria-expanded="false">
                  <img src="./assests/map-icons/spa.png" alt="N/A" />
                  <span className="bg-light bg-opacity-75 position-absolute start-0 top-0 h-100 w-100 accordion-collapse collapse" id="poiSix"><img src="./assests/map-icons/check.png" className="poi-check" /></span>
                </div>
                <div className="col-4 d-inline-block text-center py-4 shadow-sm border position-relative collapsed" data-bs-toggle="collapse" data-bs-target="#poiSeven" aria-expanded="false">
                  <img src="./assests/map-icons/cinema.png" alt="N/A" />
                  <span className="bg-light bg-opacity-75 position-absolute start-0 top-0 h-100 w-100 accordion-collapse collapse" id="poiSeven"><img src="./assests/map-icons/check.png" className="poi-check" /></span>
                </div>
                <div className="col-4 d-inline-block text-center py-4 shadow-sm border position-relative collapsed" data-bs-toggle="collapse" data-bs-target="#poiEight" aria-expanded="false">
                  <img src="./assests/map-icons/gym.png" alt="N/A" />
                  <span className="bg-light bg-opacity-75 position-absolute start-0 top-0 h-100 w-100 accordion-collapse collapse" id="poiEight"><img src="./assests/map-icons/check.png" className="poi-check" /></span>
                </div>
              </div>
              <div className="distance p-2 m-3">
                <p className="m-1 mb-4 pb-2">Distance</p>
                <Slider Distance={Distance} onChange={HandleDistance}/>
                <div className="row pt-3 ps-3 km-distance">
                  <div className="col-lg-3 col-sm-2 ps-1">0km</div>
                  <div className="col-lg-3 col-sm-2 ps-2">1km</div>
                  <div className="col-lg-3 col-sm-2 ps-3">2km</div>
                  <div className="col-lg-3 col-sm-2 ps-4">3km</div>
                </div>
              </div>
              <div className="poi-submit">
            <button type="submit" className="btn btn-warning btn-outline-dark px-4">Apply</button>
          </div>
            </div>
            <div className="filter-items p-2 accordion accordion-collapse collapse" id="collapseT3" data-bs-parent="#accordionTest">

            <div id="accordionTest2">
            <div className="accordion-item mb-3 mt-1">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed bg-secondary bg-opacity-25" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Price
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse bg-secondary bg-opacity-25" aria-labelledby="flush-headingOne" data-bs-parent="#accordionTest2">
                            <div className="price-range">
                            <MultiRangeSlider min={0} max={1000000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}/>
                            </div>
                </div>
              </div>
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed bg-secondary bg-opacity-25" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Hoarding Type
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse bg-secondary bg-opacity-25" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionTest2">
                  <div className="accordion-body">
                  <div className="pe-3 mb-2 pt-1">
                <input type="search" placeholder="Search Hoarding Type" className="w-100" />
                </div>
                <div className="checkbox-items py-2">
                <input type="checkbox" name="Unipole" className="me-1" />
                <span>Unipole</span>
                <br />
                <input type="checkbox" name="Unipole" className="me-1" />
                <span>Unipole</span>
                <br />
                <input type="checkbox" name="Unipole" className="me-1" />
                <span>Unipole</span>
                <br />
                <input type="checkbox" name="Unipole" className="me-1" />
                <span>Unipole</span>
                <br />
                <input type="checkbox" name="Unipole" className="me-1" />
                <span>Unipole</span>
                <br />
                </div>
                  </div>
                </div>
              </div> 
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed bg-secondary bg-opacity-25" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Locations
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse bg-secondary bg-opacity-25" aria-labelledby="flush-headingThree" data-bs-parent="#accordionTest2">
                  <div className="accordion-body">
                  <div className="pe-3 mb-2 pt-1">
                <input type="search" placeholder="Search Hoarding Type" className="w-100" />
                </div>
                <div className="checkbox-items py-2">
                <input type="checkbox" name="Unipole" className="me-1" />
                <span>Unipole</span>
                <br />
                <input type="checkbox" name="Unipole" className="me-1" />
                <span>Unipole</span>
                <br />
                <input type="checkbox" name="Unipole" className="me-1" />
                <span>Unipole</span>
                <br />
                <input type="checkbox" name="Unipole" className="me-1" />
                <span>Unipole</span>
                <br />
                <input type="checkbox" name="Unipole" className="me-1" />
                <span>Unipole</span>
                <br />
                </div>
                  </div>
                </div>
              </div> 
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button className="accordion-button collapsed bg-secondary bg-opacity-25" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Illumination
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse bg-secondary bg-opacity-25" aria-labelledby="flush-headingFour" data-bs-parent="#accordionTest2">
                  <div className="container">
                    <div className="row pb-2">
                      <div className="col-4">
                        <input type="checkbox" id="1" />
                        <label htmlFor="1" className="ps-2">Frontlit</label>
                      </div>
                      <div className="col-4">
                        <input type="checkbox" id="2" />
                        <label htmlFor="2" className="ps-2">Backlit</label>
                      </div>
                      <div className="col-4">
                        <input type="checkbox" id="3" />
                        <label htmlFor="3" className="ps-2">Amblit</label>
                      </div>
                      <div className="col-4">
                        <input type="checkbox" id="1" />
                        <label htmlFor="1" className="ps-2">Nonlit</label>
                      </div>
                      <div className="col-4">
                        <input type="checkbox" id="2" />
                        <label htmlFor="2" className="ps-2">Digital</label>
                      </div>
                      <div className="col-4">
                        <input type="checkbox" id="3" />
                        <label htmlFor="3" className="ps-2">LED</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="poi-submit">
            <button type="submit" className="btn btn-warning btn-outline-dark px-4">Apply</button>
          </div>







            </div>
            <div className="media-items p-2 accordion-collapse collapse" id="collapseC1" data-bs-parent="#accordionTest">
              <div className="accordion items border mb-2" id="accordionExample">
                <div className="accordion-item">
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {/* <div className=""> */}
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-4">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>Code : GOH00M61</li>
                          <li>FTF : Unipole</li>
                          <li>Size : 30 x 20 feet</li>
                          <li>
                            Price : <a href="JavaScript:void(0)">Login to see</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* </div> */}
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong>{" "}
                        It is shown by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can modify
                        any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML
                        can go within the <code>.accordion-body</code>, though the
                        transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    {/* <div className=""> */}
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-4">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>Code : GOH00M61</li>
                          <li>FTF : Unipole</li>
                          <li>Size : 30 x 20 feet</li>
                          <li>
                            Price : <a href="JavaScript:void(0)">Login to see</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* </div> */}
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong>{" "}
                        It is shown by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can modify
                        any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML
                        can go within the <code>.accordion-body</code>, though the
                        transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    {/* <div className=""> */}
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-4">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>Code : GOH00M61</li>
                          <li>FTF : Unipole</li>
                          <li>Size : 30 x 20 feet</li>
                          <li>
                            Price : <a href="JavaScript:void(0)">Login to see</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* </div> */}
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong>{" "}
                        It is shown by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can modify
                        any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML
                        can go within the <code>.accordion-body</code>, though the
                        transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    {/* <div className=""> */}
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-4">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>Code : GOH00M61</li>
                          <li>FTF : Unipole</li>
                          <li>Size : 30 x 20 feet</li>
                          <li>
                            Price : <a href="JavaScript:void(0)">Login to see</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* </div> */}
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong>{" "}
                        It is shown by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can modify
                        any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML
                        can go within the <code>.accordion-body</code>, though the
                        transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="true"
                    aria-controls="collapseFive"
                  >
                    {/* <div className=""> */}
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-4">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>Code : GOH00M61</li>
                          <li>FTF : Unipole</li>
                          <li>Size : 30 x 20 feet</li>
                          <li>
                            Price : <a href="JavaScript:void(0)">Login to see</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* </div> */}
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong>{" "}
                        It is shown by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can modify
                        any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML
                        can go within the <code>.accordion-body</code>, though the
                        transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="true"
                    aria-controls="collapseSix"
                  >
                    {/* <div className=""> */}
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-4">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>Code : GOH00M61</li>
                          <li>FTF : Unipole</li>
                          <li>Size : 30 x 20 feet</li>
                          <li>
                            Price : <a href="JavaScript:void(0)">Login to see</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* </div> */}
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong>{" "}
                        It is shown by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can modify
                        any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML
                        can go within the <code>.accordion-body</code>, though the
                        transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="true"
                    aria-controls="collapseSeven"
                  >
                    {/* <div className=""> */}
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-4">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>Code : GOH00M61</li>
                          <li>FTF : Unipole</li>
                          <li>Size : 30 x 20 feet</li>
                          <li>
                            Price : <a href="JavaScript:void(0)">Login to see</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* </div> */}
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong>{" "}
                        It is shown by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can modify
                        any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML
                        can go within the <code>.accordion-body</code>, though the
                        transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row cart-icons m-0 position-absolute w-100 bottom-0">
            <div className="col-6 bag d-inline-block text-center py-2 shadow-sm border-bottom-0 border collapse-none" data-bs-toggle="collapse" data-bs-target="#collapseC1" aria-expanded="false" aria-controls="collapseC1">
              <img src="./assests/map-icons/bag.png" alt="N/A" />
            </div>
            <div className="col-6 rupee d-inline-block text-center py-2 shadow-sm border-bottom-0 border">
              <p className="m-0"><img src="./assests/map-icons/rupee-symbol.png" alt="N/A" /> : 999999</p>
            </div>
          </div>
        </div>
        <div className="col-9 p-0">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDUxCgbNSGMkX-rNarQmh4eS_MAAzWncyY",
            }}
            resetBoundsOnResize={true}
            defaultCenter={{ lat: 28.5355, lng: 77.391 }}
            style={{ height: `100vh` }}
            defaultZoom={15}
          >
            <AnyReactComponent lat={28.5355} lng={77.391} />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default Map;
