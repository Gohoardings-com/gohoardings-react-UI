import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AccountContext } from "../../apis/ApiContext";
import moment, { parseZone } from "moment";
import { Button, Dropdown } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaRupeeSign } from "react-icons/fa";
import { parsePath, useNavigate } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import './cart.scss'
import instance from "../../apis/Axios";

const Cart = () => {
    const [Start, setStart] = useState(new Date());
    const [End, setEnd] = useState(new Date());
    const [Nowtotal, setNewTotal] = useState([]);
    const { addRemove, initalState } = useContext(AccountContext)
    const [posts, setPosts] = useState([])
    const totalDays = new Date(moment(End) - moment(Start)).getDate() - 1;

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
        addRemove({ type: "DECR" })
        removeCart(obj)
    };

    const getAllData = async () => {
        const { data } = await instance.get('cart/cartitems');
        setPosts(data);
    };

    useEffect(() => {
        getAllData();
    }, []);

    const removeCart = async (event) => {
        let data = [...posts]
        data.forEach((element) => {
            if (element.code == event.code) {
                element.isDelete = 1
                setPosts(data)
            }
        })
    }
    const handleChange = (e, i, p) => {
        setNewTotal({total : e.target.value, index: i})
        
    };

    const sumbitALlProduct = async () => {
        await instance.post("cartItems/processdCart", {
            start_date: Start,
            end_date: End,
            produts: posts,
        });
    };

    return (
        <>
            <div className="container-fluid px-5 bg-light  p-3 mt-5">
                <div className="container p-0 m-0">
                    <div className="row justify-content-end">
                        <div className="col ms-5 me-5">
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="secondary"
                                    id="dropdown-basic" >
                                    Start Date
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Calendar value={Start} onChange={StartDate} />
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="col ms-5 me-5">
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="secondary"
                                    id="dropdown-basic"
                                >
                                    End date
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Calendar value={End} onChange={EndDate} />
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 ">
                    <div className="col-md-9">
                        <h5 className=" p-2 ps-3 news-heading ">SELECTED MEDIA</h5>
                        <div className="card mb-3 maincard ">
                            <div className="row">
                                {!posts ? <><h1>Loading... Please wait</h1></> : <>
                                    {posts.length > 0 && posts.map((obj, index) => (
                                        <>
                                            {obj.isDelete == 0 ? <>
                                                <div className="d-flex mb-3">
                                                    <div className="col-md-4 pe-0 me-0">
                                                        <img
                                                            src={`https://${(obj.mediaownercompanyname.trim().split(' ').slice(0, 2).join('_')).toLowerCase()}.odoads.com/media/${(obj.mediaownercompanyname.trim().split(' ').slice(0, 2).join('_')).toLowerCase()}/media/images/new${obj.thumb}`}
                                                            className="img-fluid rounded-start  cart-media"
                                                            alt="..."
                                                        />
                                                    </div>
                                                    <div className="col-md-8 ms-0 ps-0">
                                                        <div className="card-body cart-media pb-1">
                                                            <h4 className="card-title">
                                                                {obj.areadescription}
                                                                <span className="float-end" onClick={() => removefroCart(obj)}>
                                                                    <MdDeleteForever className="mb-2  delet-icon" />
                                                                </span>
                                                            </h4>
                                                            <div className="row mt-4">
                                                                <div className="col-md-6">
                                                                    <h6 className="text-secondary">

                                                                        <FaRupeeSign />{parseInt(obj.price * 30)}/month
                                                                    </h6>
                                                                    <h6 className="text-secondary">

                                                                        <FaRupeeSign />{parseInt(obj.price)}/day
                                                                    </h6>
                                                                    <h6 className="text-secondary">

                                                                        <FaRupeeSign /> {index == Nowtotal.index ? parseInt(obj.price * Nowtotal.total) : parseInt(obj.price * 5)} /original
                                                                        price
                                                                    </h6>
                                                                    <h6 className="text-secondary">

                                                                        <FaRupeeSign />   {index == Nowtotal.index ? parseInt(obj.price + obj.price / 10 * Nowtotal.total) : parseInt(obj.price + (obj.price / 10) * 5)}/price after discount
                                                                    </h6>
                                                                    <h6 className="text-secondary">

                                                                        <FaRupeeSign /> {index == Nowtotal.index ? parseInt((obj.price / 100) * 18 * Nowtotal.total) : parseInt((obj.price / 100) * 18 * 5)}/gst(18%)
                                                                    </h6>
                                                                    <h6 className="text-secondary">

                                                                        <FaRupeeSign /> {index == Nowtotal.index ? parseInt((obj.price + (obj.price / 10) * Nowtotal.total) + ((obj.price / 100) * 18 * Nowtotal.total)) : parseInt(obj.price + parseInt((obj.price / 10) * 5) + parseInt((obj.price / 100) * 18 * 5))} /total
                                                                    </h6>
                                                                </div>
                                                                <div className="col-md-6 ">
                                                                    <div className="button-section">
                                                                    <input
                                                type="number"
                                                min="5"
                                                defaultValue={5}
                                                
                                                onChange={(e) => handleChange(e, index, obj)}/>
                                                                       
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </> : <>
                                                <h6 className="text-center">Your Item Deleted Successfully</h6>
                                            </>}
                                        </>
                                    ))}
                                </>}

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5 className=" p-2 ps-3 news-heading ">Gross Total</h5>
                        <div class="card text-center bill-card ">
                            <div class="card-body">
                                <h5 class="card-title">
                                    Total media :
                                    <span type="button" class=" ms-1">
                                        {initalState}
                                    </span>
                                </h5>
                                <div class="card-text">

                                    <h5 className="mt-4">Your Media Start on this date</h5>
                                    <h6 className="mt-4">
                                        {moment(Start).format("MMMM Do YYYY")}
                                    </h6>
                                    <h5 className="mt-4"> and Media End this date</h5>

                                    <h6 className="mt-4">
                                        {moment(End).format("MMMM Do YYYY")}
                                    </h6>
                                    <h5 className=" mt-4" >{totalDays} Total Days</h5>
                                    <h5 className="mt-4">
                                        GST(18%) : <FaRupeeSign /> 675656
                                    </h5>
                                    <h5 className="mt-4">
                                        Total ammount : <FaRupeeSign /> 55000
                                    </h5>
                                </div>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="rounded bg-info chek-avl-btn btn-lg m-2" onClick={sumbitALlProduct}>
                                    <h5 className="text-light  mt-2" onClick={sumbitALlProduct}>Chek Availiblity</h5>
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
