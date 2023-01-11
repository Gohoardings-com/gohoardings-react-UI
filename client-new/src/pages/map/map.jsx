import React, {useContext, useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {AccountContext} from "../../apis/apicontext";
import {useNavigate} from "react-router-dom";
import "./map.scss";
import Fixednavbar from "../../components/navbar/fixednavbar";
import {mediawithcity, priceSubIllu} from "../../action/adminAction";
import "./icons.scss";
import {useDispatch, useSelector} from "react-redux";
import instance from "../../apis/axios";
import Multirangeslider from "./multirangeslider";
import {useJsApiLoader} from "@react-google-maps/api";
import Markers from "./marker";
import Iconsselection from "./iconsselection";
import {MdOutlineArrowDownward} from "react-icons/md";

const BASE_URL = process.env.REACT_APP_CRYPTO_URL;

const Map = () => {
  const {isLoggedIn} = useSelector((state) => state.LoginStatus);
  const dispatch = useDispatch();
  const {search, loading} = useSelector((state) => state.search);
  const navigate = useNavigate();
  const [medias, setMedias] = useState(search);
  const {addRemove} = useContext(AccountContext);
  const [mediaData, setMediadata] = useState([]);
  const [price, setprice] = useState([]);
  const [query, setQuery] = useState("");
  const [singlemedia, setsingleMedia] = useState([]);
  const [category, setcategory] = useState([]);
  const [cartItem, setcartItem] = useState([]);
  const [newIllum, setnewIllum] = useState([]);
  const [newCate, setnewCate] = useState([]);
  const [news, setNews] = useState([]);
  const [noOfLogo, setnoOfLogo] = useState(8);
  const { initalState } = useContext(AccountContext);
  const [disable, setDisable] = useState(true);


  const addonCart = async (e) => {
    const { data } = await instance.post("cart/addOnCart", {
      mediaid: e.code,
      mediatype: e.category_name,
    });
    if (data.message == "Login First") {
      window.localStorage.setItem("locate", `/map`);
      navigate("/login");
    } else {
      addRemove({ type: "INCR" });
      add(e);
    }
  };

  const add = (event) => {
    let data = [...medias];
    data.forEach((element) => {
      if (element.code == event.code) {
        element.isDelete = 0;
        setcartItem(data);
      }
    });
  };

  const previousData = async () => {
    dispatch(
      mediawithcity({
        category_name: "traditional-ooh-media",
        city_name: "delhi",
      })
    );
  };

  const userCartItem = async () => {
    const { data } = await instance.get("cart/cartitems");
    setcartItem(data);
  };

  useEffect(() => {
    userCartItem();
  }, [initalState]);

  function topFunction() {
    document.body.scrollTop = 0; // htmlFor Safari
    document.documentElement.scrollTop = 0; // htmlFor Chrome, Firefox, IE and Opera
  }
  useEffect(() => {
    topFunction();
    getDataByApi()
  }, []);


  let ILLUMINATION;
  const getDataByApi = async () => {
    const value = [...search];
    const category_name = value[0].category_name;
    const city_name = value[0].city_name;
    const { data } = await instance.post("media/searchMedia", {
      category_name,
      city_name,
    });
    const mediaDatas = [...data];
    setMediadata(mediaDatas);
  };


  const fff = mediaData.map((o) => o.illumination);
  ILLUMINATION = [...new Set(fff)];


  function categoryFilter(cate) {
    category.forEach((el) => {
      if (el === cate && news.indexOf(el) > -1) {
        news.splice(news.indexOf(el), 1);
        setNews(news);
      } else if (el === cate && !news.indexOf(el) > -1) {
        news.push(cate);
        setNews(news);
      }
    });
  }

  function illuminationfilter(illum) {
    if (!loading) {
      const data = mediaData.filter((el) => el.illumination == illum);
      const hhh = data.map((el) => el.subcategory);
      const category = [...new Set(hhh)];
      setcategory(category);
      setDisable(false);
    }
  }

  const cartItemprice = cartItem.reduce(
    (totalPrice, item) => totalPrice + parseInt(item.price),
    0
  );

  let slice;
  if (!loading) {
    slice = search.slice(0, noOfLogo);
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: BASE_URL,
  });

  const getAllDetails = async () => {
    const value = [...search];
    const table = value[0].category_name;
    const city = value[0].city_name;
    dispatch(priceSubIllu(news, price, singlemedia, table, city))
  };

  const removefroCart = async (obj) => {
    await instance.post("cart/deleteFromCart", {
      code: obj.code,
    });
    addRemove({ type: "DECR" });
    remove(obj);
  };

  const remove = (event) => {
    let data = [...cartItem];
    data.forEach((element) => {
      if (element.code == event.code) {
        element.isDelete = 1;
        setcartItem(data);
      }
    });
  };

  const locatetologin = async () => {
    window.localStorage.setItem("locate", `/map`);
    navigate("/login");
  };

  const More = async () => {
    if (search.length >= noOfLogo) {
      await setnoOfLogo(noOfLogo + 6);
    }
  };
  const Less = async () => {
    if (noOfLogo >= 2) {
      await setnoOfLogo(noOfLogo - 6);
    }
  };

  return (
  <>
  { <Fixednavbar/> }
  <div className="container-fluid mh-100">
      <div className="row" id="map-view-row">
        <div className="col-lg-3 col-md-3 col-sm-12 p-0 border-end position-relative">
          <div className="row filter-icons mt-5 pt-1">
            <div
              className="col-4 list d-inline-block text-center py-2 shadow-sm border-top-0 border collapse-none"
              data-bs-toggle="collapse"
              data-bs-target="#collapseT1"
              aria-expanded="true"
              aria-controls="collapseT1"
            >
              <img src="./assests/map-icons/list.png" alt="N/A" />
            </div>
            <div
              className="col-4 poi d-inline-block text-center py-2 shadow-sm border-top-0 border collapse-none"
              id="test"
              data-bs-toggle="collapse"
              data-bs-target="#collapseT2"
              aria-expanded="false"
              aria-controls="collapseT2"
            >
              <img src="./assests/map-icons/poi.png" alt="N/A" />
            </div>
            <div
              className="col-4 filter d-inline-block text-center py-2 shadow-sm border-top-0 border collapse-none"
              data-bs-toggle="collapse"
              data-bs-target="#collapseT3"
              aria-expanded="false"
              aria-controls="collapseT3"
            >
              <img src="./assests/map-icons/filter.png" alt="N/A" />
            </div>
          </div>

          <div id="accordionTest">
            <div
              className="media-items p-2 accordion-collapse collapse show map-media-item-list"
              id="collapseT1"
              data-bs-parent="#accordionTest"
            >
              <div
                className="accordion items mb-2 rounded"
                id="accordionExample"
              >
                {loading ? (
                  <>Loading .... Please wait</>
                ) : (
                  <>
                    {slice.length == 0 ? (
                      <>No Data Found</>
                    ) : (
                      <>
                        {slice.map((item, i) => (
                          <>
                            <div className="accordion-item border rounded mb-2" key={i}>
                              <div
                                data-bs-toggle="collapse"
                                data-bs-target={"#" + item.code + ""}
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                <div className="row m-0">
                                  <div className="col-xl-4 col-lg-12 col-md-12 col-sm-6 map-media-items">
                                    <img
                                      src={
                                        item.thumb.startsWith("https")
                                          ? item.thumb
                                          : `https://${item.mediaownercompanyname
                                              .trim()
                                              .split(" ")
                                              .slice(0, 2)
                                              .join("_")
                                              .toLowerCase()}.odoads.com/media/${item.mediaownercompanyname
                                              .trim()
                                              .split(" ")
                                              .slice(0, 2)
                                              .join("_")
                                              .toLowerCase()}/media/images/new${
                                              item.thumb
                                            }`
                                      }
                                      alt="N/A"
                                      className="w-100 h-75 mt-2 pt-2"
                                    />
                                  </div>
                                  <div className="col-xl-8 col-lg-12 col-md-12 col-sm-6">
                                    <ul className="list-unstyled">
                                      <li>
                                        {item.page_title.substring(0, 20) +
                                          "..."}
                                      </li>
                                      <li>Code : {item.code}</li>
                                      <li>FTF : {item.ftf}</li>
                                      <li>Size : {item.size} feet</li>

                                      <li>
                                        Price: {item.price}{" "}
                                        {/* {item.isDelete == null ||
                                        item.isDelete == 0 ? (
                                          <img
                                            src="../../gohoarding/new-icon/add-cart.png"
                                            onClick={() => addonCart(item)}
                                            className="addonCart addonCart-plus sitemark float-end"
                                          />
                                        ) : (
                                          <img
                                            src="../../gohoarding/new-icon/remove-cart.png"
                                            onClick={() => removefroCart(item)}
                                            className="addonCart text-danger sitemark float-end "
                                          />
                                        )} */}
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <div
                                  id={item.code}
                                  className="accordion-collapse collapse "
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    <strong>
                                      This is the first item's accordion body.
                                    </strong>{" "}
                                    {item.geoloc}
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                      </>
                    )}
                  </>
                )}
                {/* <div className="d-flex">
                  <button onClick={() => More()} >View More</button>
                  <button className="ms-3" onClick={() => Less()}>View Less</button>
                </div> */}

                <div className="text-center map-btn-more">
                  <button className=" buttonload btn-hover" onClick={() => More()}>
                    View More <MdOutlineArrowDownward />
                  </button>
                  {}
                  {/* <button className=" ms-5 buttonload btn-hover" onClick={() => Less()}>
            View Less <MdArrowUpward />
          </button> */}
                </div>
              </div>
            </div>
            {search && search.length > 0 ? (
              <Iconsselection slice={slice} loading={loading} fnmedia={search} />
            ) : null}
            <div
              className="filter-items p-2 accordion accordion-collapse collapse"
              id="collapseT3"
              data-bs-parent="#accordionTest"
            >
              <div id="accordionTest2">
                <div className="accordion-item mb-3 mt-1">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed bg-secondary bg-opacity-25"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Price
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse bg-secondary bg-opacity-25 pt-2"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionTest2"
                  >
                    <div className="price-range">
                      <Multirangeslider
                        min={0}
                        max={1000000}
                        onChange={({ min, max }) =>
                          setprice(`min=${min},max=${max}`)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="container">
                      <div className="row pb-2">
                      <h4 className="accordion-header" id="flush-headingFour">
                    {/* <button
                      className="accordion-button collapsed bg-secondary bg-opacity-25"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                    </button> */}
                      Illumination
                  </h4>
                        {ILLUMINATION.map((illumation, i) => (
                          <div className="col-xl-6 col-lg-6 col-sm-12 col-xxl-4"  key={i}>
                             <input
                             
                            
                              name="radio"
                              type="radio"
                              onChange={(e) => illuminationfilter(illumation)}
                              onClick={(e) => setsingleMedia(illumation)}
                              // data-bs-toggle="collapse"
                              // data-bs-target="#collapseT2"
                              // aria-expanded="false"
                              // aria-controls="collapseT2"
                            />
                            <label htmlFor="1" className="ps-2">
                              {illumation}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
              {!disable &&   <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="flush-headingTwo">
                  
                      Hoarding Type
               
                  </h2>
                  <div
                  
                  >
                
                     
                      <div className="checkbox-items py-2">
                      {category
                         
                         .map((cate, i) => (
                           <>
                            <div className="m-0 p-0" key={i}>
                            <input
                               type="checkbox"
                              
                               className="me-1"
                               value={cate}
                               onChange={(e) => categoryFilter(cate)}
                             />
                            </div>
                             <span className="text-wrap  media-filter-text-card-detail-filt ">
                               {cate.substring(0, 13)}
                             </span>
                             <br />
                           </>
                         ))}
                      </div>
                    </div>
                  </div>
               }

                {/* location filter */}

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
               
                  {/* <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse bg-secondary bg-opacity-25"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionTest2"
                  >
                   
                  </div> */}
                </div>
              </div>

              <div className="text-center map-btn-more">
                <button
                  className=" buttonload btn-hover m-2 "
                  onClick={getAllDetails}
                >
                  Apply
                </button>
                <button
                  className=" buttonload btn-hover m-2"
                  onClick={previousData}
                >
                  Clear All
                </button>
              </div>
            </div>
            <div
              className="media-items p-2 accordion-collapse collapse"
              id="collapseC1"
              data-bs-parent="#accordionTest"
            >
              <div
                className="accordion items border mb-2"
                id="accordionExample"
              >
                {!cartItem ? (
                  <>
                    <h1>Loading... Please Wait</h1>
                  </>
                ) : (
                  <>
                    {cartItem.map((item, i) => (
                      <>
                        {item.isDelete == 0 ? (
                          <div className="accordion-item" 
                            
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                              key={i}>
                              <div className="row m-0">
                                <p className="my-2">
                                  {item.page_title.substring(0, 20) + "..."}
                                </p>
                                <div className="col-xl-4 col-lg-12 col-md-12 col-sm-6 map-media-items">
                                  <img
                                    src={
                                      item.thumb.startsWith("https")
                                        ? item.thumb
                                        : `https://${item.mediaownercompanyname
                                            .trim()
                                            .split(" ")
                                            .slice(0, 2)
                                            .join("_")
                                            .toLowerCase()}.odoads.com/media/${item.mediaownercompanyname
                                            .trim()
                                            .split(" ")
                                            .slice(0, 2)
                                            .join("_")
                                            .toLowerCase()}/media/images/new${
                                            item.thumb
                                          }`
                                    }
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
                                      Price:
                                      {item.price}
                                      <img
                                        src="../../gohoarding/new-icon/remove-cart.png"
                                        onClick={() => removefroCart(item)}
                                        className="addonCart text-danger float-end "
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                     
                        ) : (
                          <h6 className="text-center">
                            Your Item Deleted Successfully
                          </h6>
                        )}
                      </>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>

          <div id="map-view-mobile">
            <div className="aval-hoarding d-inline-block position-absolute">
              <div className="map-btns d-inline-block p-1 pe-2 border-end">
                <img
                  src="./assests/map-icons/billboard.png"
                  alt="N/A"
                  className="p-2"
                />
                <span className="pe-2">Available</span>
              </div>
              <div className="map-btns d-inline-block p-1 pe-2">
                <img
                  src="./assests/map-icons/billboard.png"
                  alt="N/A"
                  className="p-2"
                />
                <span className="pe-2">Not Available</span>
              </div>
            </div>
            {/* { isLoaded ? <Markers /> : null } */}
          </div>

          <div className="row cart-icons m-0 position-absolute w-100 bottom-0">
            <div className="col-lg-9 col-sm-12 rupee d-inline-block text-center py-2 shadow-sm border-bottom-0 border">
              {/* Total Price */}
              <p className="m-0">
                <img src="./assests/map-icons/rupee.png" alt="N/A" /> :{" "}
                {cartItemprice}
              </p>
            </div>
            <div
              className="col-lg-3 col-sm-12 p-0 bag d-inline-block text-center py-2 shadow-sm border-bottom-0 border collapse-none"
              data-bs-toggle="collapse"
              data-bs-target="#collapseC1"
              aria-expanded="false"
              aria-controls="collapseC1"
            >
              <img src="./assests/map-icons/bag.png" alt="N/A" />
            </div>
          </div>
        </div>
        <div className="col-9 p-0" id="map-view">
          <div className="aval-hoarding d-inline-block position-absolute">
            <div className="map-btns d-inline-block p-1 pe-2 border-end">
              <img
                src="./assests/map-icons/billboard.png"
                alt="N/A"
                className="p-2"
              />
              <span className="pe-2">Available</span>
            </div>
            <div className="map-btns d-inline-block p-1 pe-2">
              <img
                src="./assests/map-icons/billboard.png"
                alt="N/A"
                className="p-2"
              />
              <span className="pe-2">Not Available</span>
            </div>
          </div>
          {isLoaded && slice && slice.length > 0 ? (
            <Markers data={slice} add={addonCart} />
          ) : null}
        </div>
      </div>
    </div>
  </>
  );
};

export default Map;
