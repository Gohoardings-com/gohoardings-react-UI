import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AccountContext } from "../../apis/apiContext";
import moment from "moment";
import { Dropdown } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaRupeeSign } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
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
  const totalDays = new Date(moment(End) - moment(Start)).getDate() - 1;

  const getAllData = async () => {
    const { data } = await instance.get("cart/cartitems");
    data.map((obj) => {
      obj["days"] = 5;
    });
    setPosts(data);
  };
   
  useEffect(() => {
    getAllData(); 
   
  },[]);


  if(posts.length!=0){
    console.log("drged");
  }
  if(posts.length!=0){
    console.log("abcd");
  }
  if(posts.length==0){
    console.log("empty");
  }
  

  //const cartItemprice = posts.reduce((totalPrice, item) => totalPrice + parseInt(item.price * item.days),0);

   
  const handelprice = () => {
   
    let ans = 0; 
    posts.map((item) => (ans += item.price*item.days));
    setPrice(ans);
  };


  // const removefroCart = async (obj) => {
  //   await instance.post("cart/deleteFromCart", {
  //     code: obj.code,
  //   });
  //   addRemove({ type: "DECR" });
  //   removeCart(obj);
  // };



  // Start date of user item
  const StartDate = (e) => {
    setStart(e);
  };
    // End date of user item
  const EndDate = (e) => {
    setEnd(e);
  };
// remove from cart
  const removefroCart = async (obj) => {
    await instance.post("cart/deleteFromCart", {
      code: obj.code,
    });
    addRemove({ type: "DECR" });
    const pricese =  obj.price * obj.days
    const withGST = (pricese * 18) / 100
    const heloo = pricese + withGST
    const finalStep = parseInt(price-heloo)
    setPrice(finalStep)
    removeCart(obj);
  };


  // useEffect(() => {
  //   nhhu()
  //       setPrice(price)
  //     },[price])
      
// Remove on item data
  const removeCart = async (event) => {
    let data = [...posts];
    data.forEach((element) => {
      if (element.code == event.code) {
        element.isDelete = 1;
          }
      setPosts(data);
    });

  };

 


  const increaseDays = async (obj) => {
    let data = [...posts];
    data.map((element) => {
      if (element.id == obj.id) {
        if(obj.isDelete == 0){
        obj.days += 1;
        //  nhhu()
        }
      }
      setPosts(data);

    });
     
  };

  // Decrement days on of cart item
  const decreaseDays = async (obj) => {
    let data = [...posts];

    data.map((element) => {
      if (element.id == obj.id) {
        if (obj.days > 5) {
          obj.days -= 1;
          if(obj.isDelete == 0){
            // nhhu()
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




  // const StartDate = (e) => {
  //   setStart(e);
  // };
  
  // const EndDate = (e) => {
  //   setEnd(e);
  // };
  
 
  const current = new Date();
  const startdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


  return (
    <>
      <Fixednavbar />
      <div className="container-fluid px-5  mt-5">
        <div className="p-0 m-0 date-select-section">
          <div className="row">
            <div className="col-md-3 ps-0">
              <div class="input-box active-grey ">
                <label class="input-label">Start Date</label>
                <div type="text " class="input-1 d-flex bg-light">
                  <h6 className="me-2 calender-logo  text-secondary">{startdate}</h6>
                  <Dropdown className="p-0">
                    <Dropdown.Toggle
                      variant="transparent"
                      id="dropdown-basic"
                      className="p-0 m-0"
                    >
                      <FaCalendarAlt  className="calender-logo ms-5 mb-1 text-secondary"/>
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
                  <h6 className="me-2  calender-logo  text-secondary">{startdate}</h6>

                  <Dropdown className="p-0 m-0">
                    <Dropdown.Toggle
                      variant="transparent"
                      id="dropdown-basic"
                      className="p-0 m-0"
                    >
                      <FaCalendarAlt className="calender-logo ms-5 mb-1 text-secondary" />
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
        <div className="row mt-5 ">
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
                      {obj.isDelete == 0 ? (
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
                                    className="img-fluid rounded-start  cart-media-img"
                                    alt="..."
                                  />
                                </div>
                                <div className="col-md-8 ms-0 ps-0">
                                  <div className="card-body pb-1">
                                    <h4 className="card-title">
                                      {obj.areadescription}
                                      <span
                                        className="float-end"
                                        onClick={() => removefroCart(obj)}
                                      >
                                        <MdDeleteForever className="mb-2  delet-icon" />
                                      </span>
                                    </h4>
                                    <div className="row mt-4">
                                      <div className="col-md-6">
                                        <h6 className="text-secondary">
                                          <FaRupeeSign />
                                          {parseInt(obj.price * 30)}/month
                                        </h6>
                                        <h6 className="text-secondary">
                                          <FaRupeeSign />
                                          {parseInt(obj.price)}/day
                                        </h6>
                                        <h6 className="text-secondary">
                                          <FaRupeeSign />{" "}
                                          {parseInt(
                                            (obj.price * obj.days * 11) / 10
                                          )}{" "}
                                          /original price
                                        </h6>
                                        <h6 className="text-secondary">
                                          <FaRupeeSign />{" "}
                                          {parseInt(obj.price * obj.days)}
                                          /after discount
                                        </h6>
                                        <h6 className="text-secondary">
                                          <FaRupeeSign />{" "}
                                          {parseInt(
                                            (obj.price * obj.days ) * 18/ 100
                                          )}
                                          /gst(18%)
                                        </h6>
                                        <h6 className="text-secondary">
                                          <FaRupeeSign />
                                          {parseInt(
                                            obj.price * obj.days +
                                              (obj.price * obj.days * 18) / 100
                                          )}
                                          /total
                                        </h6>
                                      </div>
                                      <div className="col-md-6 ">
                                        <div className="button-section">
                                          <button
                                            type="button"
                                            class="btn btn-success rounded-1 me-2"
                                            onClick={() => {
                                              increaseDays(obj);
                                            }}
                                          >
                                            <AiOutlinePlus className="quantitey" />
                                          </button>
                                          <span
                                            type="button"
                                            class="btn btn-outline-secondary rounded-1 me-2"
                                          >
                                            {obj.days} Days
                                          </span>
                                          <button
                                            type="button"
                                            class="btn btn-danger rounded-1"
                                            onClick={() => {
                                              decreaseDays(obj);
                                            }}
                                          >
                                            <AiOutlineMinus className="quantitey" />
                                          </button>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <h6 className="text-center text-secondary">
                            Your Item Deleted Successfully
                          </h6>
                        </>
                      )}
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
                <div class="card-text">
                  <h5 className="mt-4">Media Start on this date</h5>
                  <h6 className="mt-4">
                    {moment(Start).format("MMMM Do YYYY")}
                  </h6>
                  <h5 className="mt-4">Media End on this date</h5>

                  <h6 className="mt-4">{moment(End).format("MMMM Do YYYY")}</h6>
                  <h5 className=" mt-4">
                  Total  {totalDays ? totalDays : 5} Days
                  </h5>

                  <h5 className="mt-4">
                    GST(18%) : <FaRupeeSign /> {(price * 18) / 100}
                  </h5>
                  <h5 className="mt-4"> 
                    Total ammount : <FaRupeeSign /> {price+(price * 18) / 100}
                  </h5>
                
                </div>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="rounded bg-info chek-avl-btn btn-lg m-2"
                  onClick={sumbitALlProduct}
                >
                  <h5 className="text-light  mt-2" onClick={sumbitALlProduct}>
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
