import React, { useState, useEffect, useContext } from "react";
import {useDispatch, useSelector} from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import { AccountContext } from "../../apis/apicontext";
import moment from "moment";
import { Dropdown } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaRupeeSign } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import "./cart.scss";
import instance from "../../apis/axios";
import Fixednavbar from "../../components/navbar/fixednavbar";
import { toast, ToastContainer } from "react-toastify";
import {userDetails} from '../../action/adminAction';

const Cart = () => {

  
  const [Start, setStart] = useState(new Date());
  let defaultEndDate = new Date(new Date().setDate(Start.getDate() + 5));
  const [End, setEnd] = useState(defaultEndDate);
  const { addRemove, initalState } = useContext(AccountContext);
  const [posts, setPosts] = useState([]);
  const [price, setPrice] = useState();
  
  const {user, loading} = useSelector((state) => state.user)

  useEffect(() => {
    topFunction();
  }, []);

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const getAllData = async () => {
    const { data } = await instance.get("cart/cartitems");
    data.map((obj, i) => {
      obj["days"] = 5;
    });
    setPosts(data);
  };


  useEffect(() => {
    getAllData();
  }, []);


  const setCommonDays = (daysdifference) => {
    posts.map((obj) => {
          obj.days  = parseInt(daysdifference);
        setPosts(posts);

    });
   
  }

  const StartDate = (e) => {
    var diff = End.getTime() - e.getTime(); 
    let daysdifference = diff / (1000 * 60 * 60 * 24); 
    setCommonDays(daysdifference + 1);
    setStart(e);
  };

  const EndDate = (e) => {
      var diff = e.getTime() - Start.getTime(); 
      let daysdifference = diff / (1000 * 60 * 60 * 24); 
      setCommonDays(daysdifference + 1);
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
    let data = [...posts];
    data.forEach((element) => {
      if (element.code == event.code) {
        element.isDelete = 1;
      }

      const result = data.filter((word) => word.isDelete === 0);
      setPosts(result);
    });
  };

  const increaseDays = async (obj) => {
    let data = [...posts];
    data.map((element) => {
      if (element.id == obj.id) {
          obj.days += 1;
          setPosts(data);
      }
    
    });
  };

  // Decrement days on of cart item
  const decreaseDays = async (obj) => {
    let data = [...posts];

    data.map((element) => {
      if (element.id === obj.id) {
        if (obj.days > 5) {
          obj.days -= 1;
          setPosts(data);
        }
   
      }
    });
  };

  const sumbitALlProduct = async () => {
    console.log(user[0].userid);
    await instance.post("cart/processdCart", {
      start_date: Start,
      end_date: End,
      produts: posts,
      user : user[0].userid,
      phone : user[0].phonenumber,
      

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
              <div className="input-box active-grey ">
                <label className="input-label">Start Date</label>
                <div type="text " className="input-1 d-flex bg-light">
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
                      <Calendar
                        value={Start}
                        onChange={StartDate}
                        minDate={new Date()}
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="input-box active-grey">
                <label className="input-label">End Date</label>
                <div type="text " className="input-1 d-flex bg-light ">
                  <h6 className="me-2  calender-logo  text-dark">
                    {  moment(End).format("DD/MM/YYYY")}
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
                      <Calendar value={End} onChange={EndDate} minDate={defaultEndDate} />
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
                      <div className="card mb-3 mt-3 maincard" key={index}>
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
                                  {obj.illumination} - {obj.medianame}
                                  <span
                                    className="float-end"
                                    onClick={() => removefroCart(obj)}
                                  >
                                    <img
                                      src="../../clientslogo/delet-icon.png"
                                      className="delet-icon"
                                    />
                                  </span>
                                </h4>
                                <div className="row ">
                                  <div className="button-section  card-text">
                                    Days :
                                    <img
                                      src="../../clientslogo/plus.png"
                                      className="quantitey ms-2"
                                      onClick={() => {
                                        decreaseDays(obj);
                                      }}
                                    />
                                    <span
                                      type="button"
                                      className=" fw-bold  rounded bg-transparent  border-0 ps-2 pe-2   text-dark"
                                    >
                                      {obj.days}
                                    </span>
                                    <img
                                      src="../../clientslogo/minus.png"
                                      className="quantitey"
                                      onClick={() => {
                                        increaseDays(obj);
                                      }}
                                    />
                                  </div>
                                  <span className="project-creator mt-4 ms-0 card-text">
                                    <img
                                      src="../../gohoarding/new-icon/offer-logo.png"
                                      className="rupees-logo me-2"
                                    />
                                    {obj.price}

                                    <span className="text-muted text-decoration-line-through ms-2 card-text">
                                      {" "}
                                      {parseInt((obj.price * 11) / 10)}{" "}
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
                                    <span className=" ms-1 card-text">
                                      {parseInt((obj.price * 18) / 100)}
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
                                    <span className=" ms-1 card-text">
                                 
                                      {parseInt(
                                            obj.price * obj.days +
                                              (obj.price * obj.days * 18) / 100
                                          )}
                                    </span>
                                    <span className=" ms-2 off-text">
                                      For <b>{obj.days}{" "}
                                      days including gst{" "}</b>
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
              </>
            )}
          </div>
          <div className="col-md-3 ">
            <h5 className=" p-2 ps-3 news-heading ">Gross Total</h5>
            <div className="card  bill-card mt-3 bg-light ">
              <div className="card-body">
                <h5 className="card-title">
                  Total media :
                  <span type="button" className=" ms-1">
                    {initalState}
                  </span>
                </h5>
                <hr/>
                <div className="">
                 
                  <h5 className="mt-3 card-text">
                    Total amount : <FaRupeeSign />
                    {cartItemprice }
                  </h5>
                  <h5 className="mt-3 card-text">
                    GST(18%) : <FaRupeeSign />{" "}
                    {
                   ( cartItemprice * 18) / 100
                      }
                  </h5>
                  <hr/>
                  <h5 className="mt-3 card-text">
                    Final amount : <FaRupeeSign />
                    {cartItemprice + ( cartItemprice * 18) / 100}
                  </h5>
                </div>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="rounded chek-avl-btn btn-lg m-2"
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                  <h5 className="text-light  mt-2 card-title">
                    Check Availability
                  </h5>
                </button>
                <ToastContainer />
              </div>
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">

      <div class="modal-body">
        Thank you for bieng a part of gohoardings family. Our team will be pleased to serve you the best.
      </div>
      <div class="modal-footer">
        
        <button type="button" class="btn chek-avl-btn text-light" data-bs-dismiss="modal" onClick={sumbitALlProduct} >Continue</button>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
