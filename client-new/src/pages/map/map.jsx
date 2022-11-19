import React,{useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./map.scss";
import "./icons.scss"
import instance from "../../apis/Axios";
import MultiRangeSlider from "./multiRangeSlider";
import { useJsApiLoader } from "@react-google-maps/api";
import Markers from "./marker";
import IconsSlection from "./iconsSlection";

const Map = () => {
  const [medias,setMedias] = useState([])
  const [price,setprice] = useState([])
  const [query, setQuery] = useState("");
  const [category, setcategory] = useState([]);
  const [cartItem, setcartItem] = useState([]);

  const hording = [];
  const type = [];

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDUxCgbNSGMkX-rNarQmh4eS_MAAzWncyY"
  });

  const getAllDetails = async () =>{
    console.log(type,price,hording);
    const { data } = await instance.post('filter/categoryfilter', {
      hordingtype: type,
      price :price,
      hording:hording
    })
    setMedias(data)
  }

  function multicheck(e){
    if (e.currentTarget.checked) {
      type.push(e.target.value)
    } else {
      // for (let i = 0; i < hording.length; i++) {
        // if (e.target.value == hording[i]) {
          var index = type.indexOf(e.target.value)
          if (index > -1) { // only splice array when item is found
            type.splice(index, 1); // 2nd parameter means remove one item only
          }
    }
  }
  function multichecked(e){
    if (e.currentTarget.checked) {
      type.push(e.target.value)
    } else {
      // for (let i = 0; i < hording.length; i++) {
        // if (e.target.value == hording[i]) {
          var index = type.indexOf(e.target.value)
          if (index > -1) { // only splice array when item is found
            type.splice(index, 1); // 2nd parameter means remove one item only
          }
    }
  }


useEffect(() => {

  const mediasData  = async ()=>{
    console.log("asda");
   // let {data}  = []
    const {data} = await instance.post("media/searchMedia")
    if (data.length > 0) {
      console.log(data);
      setMedias(data);
    }
  }
  mediasData();
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

const holdingtype = async() =>{
  const {data} = await instance.get('filter/categoryfilter')
  setcategory(data)
}

const userCartItem = async() =>{
  const {data} = await instance.get('cart/cartitems');
  console.log(data);
  setcartItem(data)
}


useEffect(() =>{
  holdingtype();
},[])

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


                   {!medias ? <>Loading .... Please wait</> :<>
                   {medias.map((item,i) =>(
                     <>
                <div className="accordion-item border rounded mb-2">
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
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
                  </div>
                </div>
                    </>
                   ))}
                   </>} 
                   

              </div>
            </div>
            <IconsSlection setMedias={setMedias}/>
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
                 { category.filter(obj => {
                if (query == '') {
                  return obj;
                } else if (obj.name.toLowerCase().includes(query.toLowerCase())  ) {
                  return obj;
                }
              }).map((illum,i) =>(
                <>
                  <input type="checkbox" id={i} 
                  className="me-1"
                        value={illum.name}
                        onChange={(e) => multicheck(e)} 
                        />
                  <span>{illum.name}</span>
                  <br />
                </>

                ))} 
                
                </div>
                  </div>
                </div>
              </div>


              {/* <div className="accordion-item mb-3">
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
              </div>  */}
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
               
                   {!cartItem ? <><h1>Loading... Please Wait</h1></>:<>
                {cartItem.map((item) =>(
                  <>
                <div className="accordion-item">
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >  
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
                   
                  </div>
                </div>
                   </>
                ))}
                </>}
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
              {/* { isLoaded ? <Markers /> : null } */}
          </div>

          <div className="row cart-icons m-0 position-absolute w-100 bottom-0">
          <div className="col-lg-9 col-sm-12 rupee d-inline-block text-center py-2 shadow-sm border-bottom-0 border">
              <p className="m-0"><img src="./assests/map-icons/rupee.png" alt="N/A" /> : 999999</p>
            </div>
            <div className="col-lg-3 col-sm-12 p-0 bag d-inline-block text-center py-2 shadow-sm border-bottom-0 border collapse-none" data-bs-toggle="collapse" data-bs-target="#collapseC1" aria-expanded="false" aria-controls="collapseC1" onClick={() => userCartItem()}>
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
              { isLoaded && medias && medias.length > 0 ? <Markers data={medias}/> : null }
        </div>
      </div>
    </div>
  );
};

export default Map;