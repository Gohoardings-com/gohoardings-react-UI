import React from "react";
import GoogleMapReact from "google-map-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./map.scss";
import Slider from "./slider.jsx";
import { useState } from "react";
import MultiRangeSlider from "./multiRangeSlider";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
              <div class="accordion items mb-2 rounded" id="accordionExample">
                <div class="accordion-item border rounded mb-2">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
                <div class="accordion-item border rounded mb-2">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
                <div class="accordion-item border rounded mb-2">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
                <div class="accordion-item border rounded mb-2">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
                <div class="accordion-item border rounded mb-2">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
                <div class="accordion-item border rounded mb-2">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
                <div class="accordion-item border rounded mb-2">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
                <div className="col-4 d-inline-block text-center py-4 shadow-sm border">
                  <img src="./assests/map-icons/bag.png" alt="N/A" />
                </div>
                <div className="col-4 d-inline-block text-center py-4 shadow-sm border">
                  <img src="./assests/map-icons/rupee-symbol.png" alt="N/A" />
                </div>
                <div className="col-4 d-inline-block text-center py-4 shadow-sm border">
                  <img src="./assests/map-icons/toggle.png" alt="N/A" />
                </div>
                <div className="col-4 d-inline-block text-center py-4 shadow-sm border">
                  <img src="./assests/map-icons/bag.png" alt="N/A" />
                </div>
                <div className="col-4 d-inline-block text-center py-4 shadow-sm border">
                  <img src="./assests/map-icons/rupee-symbol.png" alt="N/A" />
                </div>
                <div className="col-4 d-inline-block text-center py-4 shadow-sm border">
                  <img src="./assests/map-icons/toggle.png" alt="N/A" />
                </div>
                <div className="col-4 d-inline-block text-center py-4 shadow-sm border">
                  <img src="./assests/map-icons/bag.png" alt="N/A" />
                </div>
                <div className="col-4 d-inline-block text-center py-4 shadow-sm border">
                  <img src="./assests/map-icons/rupee-symbol.png" alt="N/A" />
                </div>
              </div>

              <Slider Distance={Distance} onChange={HandleDistance}/>


            </div>
            <div className="filter-items p-2 accordion accordion-collapse collapse" id="collapseT3" data-bs-parent="#accordionTest">

            <MultiRangeSlider min={0} max={1000000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}/>
              <br /><br />
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion Item #1
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
              </div>   
              <br />
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                  <div className="pe-3 mb-2">
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

              








            </div>
            <div className="media-items p-2 accordion-collapse collapse" id="collapseC1" data-bs-parent="#accordionTest">
              <div class="accordion items border mb-2" id="accordionExample">
                <div class="accordion-item">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
                <div class="accordion-item">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
                <div class="accordion-item">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
                <div class="accordion-item">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
                <div class="accordion-item">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
                <div class="accordion-item">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
                <div class="accordion-item">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
            <div className="media-items p-2 accordion-collapse collapse" id="collapseC2" data-bs-parent="#accordionTest">
              <div class="accordion items border mb-2" id="accordionExample">
                <div class="accordion-item">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
                <div class="accordion-item">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
                <div class="accordion-item">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
            <div className="media-items p-2 accordion-collapse collapse" id="collapseC3" data-bs-parent="#accordionTest">
              <div class="accordion items border mb-2" id="accordionExample">
                <div class="accordion-item">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
                <div class="accordion-item">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
                <div class="accordion-item">
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
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
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
            <div className="col-4 bag d-inline-block text-center py-2 shadow-sm border-bottom-0 border collapse-none" data-bs-toggle="collapse" data-bs-target="#collapseC1" aria-expanded="false" aria-controls="collapseC1">
              <img src="./assests/map-icons/bag.png" alt="N/A" />
            </div>
            <div className="col-4 rupee d-inline-block text-center py-2 shadow-sm border-bottom-0 border collapse-none" data-bs-toggle="collapse" data-bs-target="#collapseC2" aria-expanded="false" aria-controls="collapseC2">
              <img src="./assests/map-icons/rupee-symbol.png" alt="N/A" />
            </div>
            <div className="col-4 filter d-inline-block text-center py-2 shadow-sm border-bottom-0 border collapse-none" data-bs-toggle="collapse" data-bs-target="#collapseC3" aria-expanded="false" aria-controls="collapseC3">
              <img src="./assests/map-icons/toggle.png" alt="N/A" />
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
            defaultZoom={10}
          >
            <AnyReactComponent lat={28.5355} lng={77.391} text="My Marker" />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default Map;
