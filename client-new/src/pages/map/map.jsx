import React,{useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./map.scss";
import instance from "../../apis/Axios";

import MultiRangeSlider from "./multiRangeSlider";
import { useJsApiLoader } from "@react-google-maps/api";
import Markers from "./marker";
import IconsSlection from "./iconsSlection";
import { MultiSelect } from "react-multi-select-component";

const Map = () => {
  const [medias,setMedias] = useState([])
  const [price,setprice] = useState([])
  const [illumna, setIllumna] = useState([]);
  const [mlocation, setMlocation] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);

  const hording = [];

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDUxCgbNSGMkX-rNarQmh4eS_MAAzWncyY"
  });

  const getAllDetails =() =>{
    console.log(illumna,price,hording, mlocation);
  }

  function multichecked(e){
    if (e.currentTarget.checked) {
      hording.push(e.target.value)
    } else {
      for (let i = 0; i < hording.length; i++) {
        e.target.value = hording[i];
        hording.splice(i, 1);
      }
    }
    console.log(hording);
  }


useEffect(() => {
  const medias  = async ()=>{
    const {data} = await instance.post("media/searchMedia",
    {
      category_name : "traditional-ooh-media",
      city_name : "Delhi"
    }
    )
    console.log(data);
    setMedias(data);
  }
  medias();
}, []);


 let ILLUMINATION = [
  { label: "Nonlit", value: " Nonlit" },
  {
    label: "Frontlit",
    value: "Frontlit",
  },
  {
    label: "Backlit",
    value: "Backlit",
  },
  {
    label: "Ambilit",
    value: "Ambilit",
  },
  {
    label: "LED",
    value: "LED",
  },
  {
    label: "Digital",
    value: "Digital",
  }
];

 let HoldingType = [
  { label: "Nonlit", value: " Nonlit" },
  {
    label: "Frontlit",
    value: "Frontlit",
  },
  {
    label: "Backlit",
    value: "Backlit",
  },
  {
    label: "Ambilit",
    value: "Ambilit",
  },
  {
    label: "LED",
    value: "LED",
  },
  {
    label: "Digital",
    value: "Digital",
  }
];
 let Location = [
  { label: "Nonlit", value: " Nonlit" },
  {
    label: "Frontlit",
    value: "Frontlit",
  },
  {
    label: "Backlit",
    value: "Backlit",
  },
  {
    label: "Ambilit",
    value: "Ambilit",
  },
  {
    label: "LED",
    value: "LED",
  },
  {
    label: "Digital",
    value: "Digital",
  }
];

  return (
    <div className="container-fluid mh-100">
      <div className="row" id="map-view-row">
        <div className="col-lg-3 col-md-3 col-sm-12 p-0 border-end position-relative">
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
            <div className="media-items p-2 accordion-collapse collapse show map-media-item-list" id="collapseT1" data-bs-parent="#accordionTest">
              <div className="accordion items mb-2 rounded" id="accordionExample">


                <div className="accordion-item border rounded mb-2">
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                   {!medias ? <>Loading .... Please wait</> :<>
                   {medias.map((item,i) =>(
                    <>
                     <div className="row m-0">
                      <p className="my-2">
                        {item.page_title.substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-xl-4 col-lg-12 col-md-12 col-sm-6 map-media-items">
                        <img
                          src={`https://${(item.mediaownercompanyname.trim().split(' ').slice(0,2).join('_')).toLowerCase()}.odoads.com/media/${(item.mediaownercompanyname.trim().split(' ').slice(0,2).join('_')).toLowerCase()}/media/images/new${item.thumb}`}
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-xl-8 col-lg-12 col-md-12 col-sm-6">
                        <ul className="list-unstyled">
                          <li>Code : {item.code}</li>
                          <li>FTF : {item.ftf}</li>
                          <li>Size : {item.size} feet</li>
                          <li>
                            Price : <a href="JavaScript:void(0)">Login to see</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
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
                    </>
                   ))}
                   </>} 
                   
                  </div>
                </div>

              </div>
            </div>
            <div className="poi-items accordion-collapse collapse" id="collapseT2" data-bs-parent="#accordionTest">
              {/* Icons for selection */}
                            <IconsSlection/>
          
             
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
                <div id="flush-collapseOne" className="accordion-collapse collapse bg-secondary bg-opacity-25 pt-2" aria-labelledby="flush-headingOne" data-bs-parent="#accordionTest2">
                            <div className="price-range">
                            <MultiRangeSlider min={0} max={1000000}
      onChange={({ min, max }) => setprice(`min = ${min}, max = ${max}`)}
      />
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
                  <div className="accordion-body pt-0">
                  <div className="pe-3 mb-2 pt-1">
                <input type="search" placeholder="Search Hoarding Type" className="w-100" onChange={event => setQuery(event.target.value)}/>
                </div>
                <div className="checkbox-items py-2">
                { HoldingType.filter(obj => {
                if (query == '') {
                  return obj;
                } else if (obj.label.toLowerCase().includes(query.toLowerCase())  ) {
                  return obj;
                }
              }).map((illum,i) =>(
                <>
                  <input type="checkbox" id={i} 
                  className="me-1"
                        value={illum.value}
                        // onChange={(e) => multicheck(e)} 
                        />
                  <span>{illum.label}</span>
                  <br />
                </>

                ))}
                
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
                  <div className="accordion-body pt-0">
                  <div className="pe-3 mb-2 pt-1">
                <input type="search" placeholder="Search Hoarding Type" className="w-100"  onChange={event => setQuery(event.target.value)} />
                </div>
                <div className="checkbox-items py-2">
                  
                { Location.filter(obj => {
                if (query == '') {
                  return obj;
                } else if (obj.label.toLowerCase().includes(query.toLowerCase())  ) {
                  return obj;
                }
              }).map((illum,i) =>(
                <>
                  <input type="checkbox" id={i} 
                        value={illum.value}
                        // onChange={(e) => multicheck(e.target.value)}
                         />
                  <span>{illum.label}</span>
                  <br />
                </>

                ))}
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
                      {ILLUMINATION.map((illumation,i) =>(

                      <div className="col-xl-6 col-lg-6 col-sm-12 col-xxl-4">
                        <input type="checkbox" id={i} 
                        value={illumation.value}
                        onChange={(e) => multichecked(e)}/>
                        <label htmlFor="1" className="ps-2">{illumation.label}</label>
                      </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="poi-submit">
            <button type="submit" className="btn btn-warning btn-outline-dark px-4" onClick={getAllDetails}>Apply</button>
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
                    
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-xl-4 col-lg-12 col-md-12 col-sm-6 map-media-items">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-xl-8 col-lg-12 col-md-12 col-sm-6">
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
                    
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-xl-4 col-lg-12 col-md-12 col-sm-6 map-media-items">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-xl-8 col-lg-12 col-md-12 col-sm-6">
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
                    
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-xl-4 col-lg-12 col-md-12 col-sm-6 map-media-items">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-xl-8 col-lg-12 col-md-12 col-sm-6">
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
                    
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-xl-4 col-lg-12 col-md-12 col-sm-6 map-media-items">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-xl-8 col-lg-12 col-md-12 col-sm-6">
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
                    
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-xl-4 col-lg-12 col-md-12 col-sm-6 map-media-items">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-xl-8 col-lg-12 col-md-12 col-sm-6">
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
                    
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-xl-4 col-lg-12 col-md-12 col-sm-6 map-media-items">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-xl-8 col-lg-12 col-md-12 col-sm-6">
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
                    
                    <div className="row m-0">
                      <p className="my-2">
                        {"UNIPOLE - E-359 NEW ASHOK NAGAR,NEW DELHI IN NEW DELHI".substring(
                          0,
                          20
                        ) + "..."}
                      </p>
                      <div className="col-xl-4 col-lg-12 col-md-12 col-sm-6 map-media-items">
                        <img
                          src="./images/media.jpg"
                          alt="N/A"
                          className="w-100 mt-2 pt-2"
                        />
                      </div>
                      <div className="col-xl-8 col-lg-12 col-md-12 col-sm-6">
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

          <div id="map-view-mobile">
          <div className="aval-hoarding d-inline-block position-absolute">
              <div className="map-btns d-inline-block p-1 pe-2 border-end">
                <img src="./assests/map-icons/billboard.png" alt="N/A" className="p-2" />
                <span className="pe-2">Available</span>
              </div>
              <div className="map-btns d-inline-block p-1 pe-2">
                <img src="./assests/map-icons/billboard.png" alt="N/A" className="p-2" />
                <span className="pe-2">Not Available</span>
              </div>
            </div>
              { isLoaded ? <Markers /> : null }
          </div>

          <div className="row cart-icons m-0 position-absolute w-100 bottom-0">
          <div className="col-lg-9 col-sm-12 rupee d-inline-block text-center py-2 shadow-sm border-bottom-0 border">
              <p className="m-0"><img src="./assests/map-icons/rupee.png" alt="N/A" /> : 999999</p>
            </div>
            <div className="col-lg-3 col-sm-12 p-0 bag d-inline-block text-center py-2 shadow-sm border-bottom-0 border collapse-none" data-bs-toggle="collapse" data-bs-target="#collapseC1" aria-expanded="false" aria-controls="collapseC1">
              <img src="./assests/map-icons/bag.png" alt="N/A" />
            </div>
          </div>
        </div>
        <div className="col-9 p-0" id="map-view">
          <div className="aval-hoarding d-inline-block position-absolute">
              <div className="map-btns d-inline-block p-1 pe-2 border-end">
                <img src="./assests/map-icons/billboard.png" alt="N/A" className="p-2" />
                <span className="pe-2">Available</span>
              </div>
              <div className="map-btns d-inline-block p-1 pe-2">
                <img src="./assests/map-icons/billboard.png" alt="N/A" className="p-2" />
                <span className="pe-2">Not Available</span>
              </div>
            </div>
              { isLoaded ? <Markers /> : null }
        </div>
      </div>
    </div>
  );
};

export default Map;