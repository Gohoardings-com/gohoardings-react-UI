import React,{ useState,useContext } from "react";
import {remove} from '../../reducer/adminReducer'
import {AccountContext} from '../../context/Context'
import { useSelector, useDispatch } from "react-redux";
import NewNAvbar from "../../components/Navbar/Navbar";
import axios from "axios";
const Cart = () => {
  const dispatch = useDispatch();
  const {cartit} = useContext(AccountContext)

  const removefroCart = async(e) =>{
    dispatch(remove(e))
    await axios.post('http://localhost:8080/api/v1/cart/deleteFromCart', {
        userid: 5717,
       code :e.code,
      })
  }  

  return (
    <>
      <NewNAvbar />
     {cartit ? <>
      {cartit.map((obj) => (
        <div className="bg-dark text-center text-light rounded">
          <img
            className="img-fluid rounded"
            src="./images/media.jpg"
            style={{ height: "190px", width: "auto" }}
            alt=""
          />
          <div className="data text-left">
            <h6 className="pt-2">{obj.areadescription}</h6>
            <h5>{obj.code}</h5>
            <h5>{obj.size}</h5>
            <div className="d-flex flex-row bd-highlight">
              <h5>{obj.illumination}</h5>
              <img
                className="img-fluid viewMe rounded ms-auto text-white-50"
                src="./images/view.png"
                style={{ height: "20px", width: "20px" }}
              />
              <h6 className="viewText ml-auto text-white-50">View Details</h6>
            </div>
            <div className="d-flex flex-row bd-highlight">
              <div className="rupees">
                <img
                  className="img-fluid rupes border-warning rounded mh-100 bg-dark text-warning"
                  src="./images/rupee.png"
                  style={{ height: "30px", width: "30px" }}
                />
              </div>
              <div className="listCahnge">
                <img
                  className="img-fluid cart"
                  src="./images/cart.png"
                  style={{ height: "30px", width: "30px" }}
                />
              </div>
              <button onClick={() => removefroCart(obj)}>Remove From Cart</button>
              
              <h6 className="loginPriceText ms-auto text-white-50">Login to see Price</h6>
            </div>
          </div>
        </div>
      ))} 
     </>:<>
     <h1>Loading</h1>
     </>}
    </>
  );
};

export default Cart;
