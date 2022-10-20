import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import { AccountContext } from "../../APIS/ApiContext";
import axios from "axios";
import { remove } from "../../reducer/adminReducer";
import { useDispatch, useSelector } from "react-redux";
import { cartitems } from "../../action/adminAction";
import "./cart.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import instance from "../../APIS/Axios";

const Cart = () => {
  const [Start, setStart] = useState(new Date());
  const [End, setEnd] = useState(new Date());
  const {addRemove} = useContext(AccountContext)
  const [totaldays, setTotaldays] = useState([]);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  const apiCartItems = useSelector((state) => state.item.items)
  const [posts,setPosts] = useState([])

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
    addRemove({type:"DECR"})
    removeCart(obj)
  };

  const getAllData = async () => {
    // dispatch(cartitems());
    const {data} = await instance.get('cart/cartitems');
    setPosts(data);
  };

  useEffect(() => {
    getAllData();
  }, []);
  
  const removeCart = async(event) =>{
    let data = [...posts]
    data.forEach((element) =>{
      if(element.code == event.code){
        element.isDelete = 1
        setPosts(data)
      }
    })
  }

  return (
    <>
      <div className="navbar-section p-0">
        <Navbar />
      </div>
      <div className="container cart-box">
        <div className="row">
          <div className="col-9 dates position-relative pb-2 pt-4">
            <div className="dates">
              <div className="start-date">
                <input
                  type="date"
                  onChange={(e) => StartDate(e.target.value)}
                  className="input-group overflow-hidden border round-pill"
                />
              </div>
              <div className="end-date position-absolute">
                <input
                  type="date"
                  onChange={(e) => EndDate(e.target.value)}
                  className="input-group overflow-hidden border ms-3 round-pill"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cart-items">
          <div className="row">
            <div className="col-lg-8">
              <div className="grey my-3 round-circle">
                <h4 className="pt-1 ps-3 text-light fw-normal">
                  SELECTED MEDIA
                </h4>
              </div>
              <div className="col-lg-1"></div>
              <div className="row pt-3 my-3 rounded-4 m-0 cart-item">
               {!posts ? <><h1>Loding...</h1></>:<>
               {posts.length > 0 && posts.map((obj) => (
                  <>
                    {obj.isDelete == 0 ? <>
                      <div className="col-4">
                      <img
                        src="./images/media.jpg"
                        alt="N/A"
                        className="media-img"
                      />
                    </div>
                    <div className="col-8 mb-3 position-relative">
                      <ul className="list-unstyled">
                        <li>
                          <h5 className="text-light">
                            {obj.areadescription}
                          </h5>
                        </li>
                        <li className="text-light">{obj.code}</li>
                        <li className="text-light">{obj.size}</li>
                        <li className="text-light">{obj.iLLUMINATION}</li>
                        <li>
                          <input
                            type="number"
                            min={5}
                            placeholder="5"
                            className="input-days"
                          />
                        </li>
                      </ul>
                      <div className="position-relative">
                        <button className="position-absolute btn bottom-0 remove-btn border-warning text-light" onClick={() => removefroCart(obj)}>
                          Remove
                        </button>
                      </div>
                    </div>
                    </>:<>
                    <h1 >Your Item Deleted Successfully</h1>
                    </>}
                  </>
                ))}
               </>}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center position-sticky total-price">
                <div className="rounded-5">
                  <h4 className="my-3 rounded-5 py-2 text-light gross-total">
                    Gross Total
                  </h4>
                </div>
                <div className="cart-total text-light">
                  <h5 className="pt-3">
                    total media : <span>3</span>
                  </h5>
                  <div>
                    <input
                      type="number"
                      min={5}
                      placeholder="5"
                      className="total-days mt-2 mb-4"
                    />
                  </div>
                  <h5>
                    GST(18%) : <span>Rs 9999</span>
                  </h5>
                  <h5 className="mt-3">
                    total media : <span>Rs 69999</span>
                  </h5>
                  <button className="btn btn-warning my-4">
                    Check Availability
                  </button>
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
