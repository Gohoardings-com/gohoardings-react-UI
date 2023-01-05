import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AccountContext } from "../../apis/apiContext";
import moment from "moment";
import { Dropdown } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaRupeeSign } from "react-icons/fa";

import { FaCalendarAlt } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./cart.scss";
import instance from "../../apis/axios";
import Fixednavbar from "../../components/navbar/fixednavbar";

const Cart = () => {
  const [Start, setStart] = useState(new Date());
  const [End, setEnd] = useState(new Date());
  const { addRemove, initalState } = useContext(AccountContext);
  const [posts, setPosts] = useState([]);
  const [price, setPrice] = useState();
  const current = new Date();

  const totalDays = new Date(moment(End) - moment(Start)).getDate() - 1;

  const startd = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  useEffect(() => {
    topFunction();
  }, []);

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const getAllData = async () => {
    const { data } = await instance.get("cart/cartitems");
    data.map((obj) => {
      obj["days"] = 5;
    });
    setPosts(data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    getAllData();
  }, []);

  const StartDate = (e) => {
    setStart(e);
  };

  const EndDate = (e) => {
    setEnd(e);
  };
  const removefroCart = async (obj) => {
    await instance.post("cart/deleteFromCart", {
      code: obj.code,
    });
    addRemove({ type: "DECR" });
    const pricese = obj.price * obj.days;
    const withGST = (pricese * 18) / 100;
    const heloo = pricese + withGST;
    const finalStep = parseInt(price - heloo);
    setPrice(finalStep);
    removeCart(obj);
  };

  const removeCart = async (event) => {
    console.log(event);
    let data = [...posts];
    data.forEach((element) => {
      if (element.code == event.code) {
        element.isDelete = 1;
      }

      const result = data.filter((word) => word.isDelete === 0);
      setPosts(result);
    });
  };

  // Increament days on of cart item

  const increaseDays = async (obj) => {
    let data = [...posts];
    data.map((element) => {
      if (element.id == obj.id) {
        if (obj.isDelete == 0) {
          obj.days += 1;
        }
      }
      setPosts(data);
    });
  };

  // Decrement days on of cart item
  const decreaseDays = async (obj) => {
    let data = [...posts];

    data.map((element) => {
      if (element.id === obj.id) {
        if (obj.days > 5) {
          obj.days -= 1;
          if (obj.isDelete == 0) {
          }
        }
        setPosts(data);
      }
    });
  };

  const sumbitALlProduct = async () => {
    await instance.post("cart/processdCart", {
      start_date: Start,
      end_date: End,
      produts: posts,
    });
  };

  const cartItemprice = posts.reduce(
    (totalPrice, item) => totalPrice + parseInt(item.price * item.days),
    0
  );

  return (
    <>
      <Fixednavbar />
      <div className="container-xxl  container-xl container-lg container-md  cart-content">
        <div className="p-0 m-0 date-select-section">
          <div className="row">
            <div className="col-md-3 ps-0">
              <div class="input-box active-grey ">
                <label class="input-label">Start Date</label>
                <div type="text " class="input-1 d-flex bg-light">
                  <h6 className="me-2 calender-logo  text-dark">
                    {moment(Start).format("DD/MM/YYYY")}
                  </h6>
                  <Dropdown className="p-0">
                    <Dropdown.Toggle
                      variant="transparent"
                      id="dropdown-basic"
                      className="p-0 m-0"
                    >
                      <FaCalendarAlt className="calender-logo ms-4 mb-1 text-dark" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Calendar value={Start} onChange={StartDate} />
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="input-box active-grey">
                <label class="input-label">End Date</label>
                <div type="text " class="input-1 d-flex bg-light ">
                  <h6 className="me-2  calender-logo  text-dark">
                    {moment(End).format("DD/MM/YYYY")}
                  </h6>

                  <Dropdown className="p-0 m-0">
                    <Dropdown.Toggle
                      variant="transparent"
                      id="dropdown-basic"
                      className="p-0 m-0"
                    >
                      <FaCalendarAlt className="calender-logo ms-4 mb-1 text-dark" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Calendar value={End} onChange={EndDate} />
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 ">
          <div className="col-md-9">
            <h5 className=" p-2 ps-3 news-heading ">SELECTED MEDIA</h5>

            {!posts ? (
              <>
                <h1>Loading... Please wait</h1>
              </>
            ) : (
              <>
                {posts.length > 0 &&
                  posts.map((obj, index) => (
                    <>
                      <>
                        <div className="card mb-3 mt-3 maincard ">
                          <div className="row">
                            <div className="d-flex ">
                              <div className="col-md-4 pe-0 me-0">
                                <img
                                  src={
                                    obj.thumb.startsWith("https")
                                      ? obj.thumb
                                      : `https://${obj.mediaownercompanyname
                                          .trim()
                                          .split(" ")
                                          .slice(0, 2)
                                          .join("_")
                                          .toLowerCase()}.odoads.com/media/${obj.mediaownercompanyname
                                          .trim()
                                          .split(" ")
                                          .slice(0, 2)
                                          .join("_")
                                          .toLowerCase()}/media/images/new${
                                          obj.thumb
                                        }`
                                  }
                                  className="img-fluid w-100 rounded-3  m-2 cart-media-img"
                                  alt="..."
                                />
                              </div>
                              <div className="col-md-8 ms-0 ps-3 ">
                                <div className="card-body pb-1">
                                  <h4 className="card-title">
                                    {obj.areadescription}
                                    <span
                                      className="float-end"
                                      onClick={() => removefroCart(obj)}
                                    >
                                      <img src="../../clientslogo/delet-icon.png" className="delet-icon" />
                                    </span>
                                  </h4>
                                  <div className="row ">
                                    <div className="button-section  card-text">
                                      Days : 
                                  
                                       <img src="../../clientslogo/plus.png" className="quantitey ms-2"   onClick={() => {
                                          decreaseDays(obj);
                                        }} />
                                 
                                      <span
                                        type="button"
                                        class=" fw-bold  rounded bg-transparent  border-0 ps-2 pe-2   text-dark"
                                      >
                                        {obj.days}
                                      </span>
                                   
                                        <img src="../../clientslogo/minus.png" className="quantitey"      onClick={() => {
                                          increaseDays(obj);
                                        }} />
                                      
                                    </div>
                                    <span className="project-creator mt-3 ms-0 card-text">
                                      <img
                                        src="../../gohoarding/new-icon/offer-logo.png"
                                        className="rupees-logo me-2"
                                      />
                                      {obj.price}
                                    
                                      <span className="text-muted text-decoration-line-through ms-2 card-text">
                                        {" "}
                                        {parseInt(
                                          (obj.price* 11) / 10
                                        )}{" "}
                                      </span>
                                      <span className=" ms-2 off-text">
                                        {" "}
                                        9% off
                                      </span>
                                    </span>
                                    <span className="project-creator mt-1 ms-0 card-text">
                                      <img
                                        src="../../clientslogo/tax-icon.png"
                                        className="rupees-logo"
                                      />{" "}
                                    {/* Total {""} */}
                                      <span className=" ms-1 card-text">
                                      {parseInt(
                                        
                                            (obj.price* 18) / 100
                                        )}
                                      </span>
                                      <span className=" ms-2 off-text">
                                        {" "}
                                        18% gst 
                                      </span>
                                    </span>
                                    <span className="project-creator mt-1 ms-0 ">
                                      <img
                                        src="../../gohoarding/new-icon/rupees-logo.png"
                                        className="rupees-logo"
                                      />{" "}
                                    {/* Total {""} */}
                                      <span className=" ms-1 card-text">
                                      {parseInt(
                                          obj.price * obj.days +
                                            (obj.price * obj.days * 18) / 100
                                        )}
                                      </span>
                                      <span className=" ms-2 off-text">
                                        For  {obj.days} days include gst  {" "}
                                        
                                      </span>
                                    </span>


                                    {/* <span className="project-creator mt-2 ms-0">
                                      <img
                                        src="../../gohoarding/new-icon/offer-logo.png"
                                        className="offer-logo"
                                      />{" "}
                                      Total {""}
                                      {parseInt(
                                        obj.price * obj.days +
                                          (obj.price * obj.days * 18) / 100
                                      )}
                                    </span> */}

                                    {/* <h6 className="text-secondary card-text-price mt-5">
                                        <FaRupeeSign />{" "}
                                        {parseInt(
                                          (obj.price * obj.days * 18) / 100
                                        )}
                                        /gst(18%)
                                      </h6> */}
                                    {/* <h6 className="text-secondary card-text-price">
                                        <FaRupeeSign />
                                        {parseInt(
                                          obj.price * obj.days +
                                            (obj.price * obj.days * 18) / 100
                                        )}
                                        /total
                                      </h6> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    </>
                  ))}
              </>
            )}
          </div>
          <div className="col-md-3 ">
            <h5 className=" p-2 ps-3 news-heading ">Gross Total</h5>
            <div class="card text-center bill-card mt-3 bg-light ">
              <div class="card-body">
                <h5 class="card-title">
                  Total media :
                  <span type="button" class=" ms-1">
                    {initalState}
                  </span>
                </h5>
                <div class="">
                  <h5 className="mt-3 card-text">
                    Media Start on {moment(Start).format("DD/MM/YYYY")}
                  </h5>
               
                  <h5 className="mt-3 card-text">
                    Media End on {moment(End).format("DD/MM/YYYY")}
                  </h5>

                  <h5 className=" mt-3 card-text">
                    Total : {totalDays ? totalDays : 5} Days
                  </h5>

                  <h5 className="mt-3 card-text">
                    GST(18%) : <FaRupeeSign /> {(cartItemprice * 18) / 100}
                  </h5>

                  <h5 className="mt-3 card-text">
                    Total ammount : <FaRupeeSign />
                    {cartItemprice + (cartItemprice * 18) / 100}
                  </h5>
                </div>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="rounded chek-avl-btn btn-lg m-2"
                  onClick={sumbitALlProduct}
                >
                  <h5
                    className="text-light  mt-2 card-title"
                    onClick={sumbitALlProduct}
                  >
                    Chek Availiblity
                  </h5>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
