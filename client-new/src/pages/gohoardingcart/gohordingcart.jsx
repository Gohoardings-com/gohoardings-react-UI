import React from 'react'
import './gohordingcart.scss'


const GohordingCart = () => {
    return (
        <>
            <div className="navbar-section">
            </div>
            <div className="container cart-box">
                <div className="row">
                    <div className="col-9 dates position-relative p-4">
                        <div className="dates">
                            <div className="start-date">
                                <input
                                    type="date"
                                    className="input-group overflow-hidden border round-pill"
                                />
                            </div>
                            <div className="end-date position-absolute">
                                <input
                                    type="date"
                                    className="input-group overflow-hidden border ms-3 round-pill"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-items">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="grey my-3 mt-3 round-circle rounded-5">
                                <h4 className="pt-2 pb-2 ps-5 text-light fw-normal ">
                                    SELECTED MEDIA
                                </h4>
                            </div>
                            <div className="row pt-3 m-2 rounded-4 cart-item ">
                                <div className="col-6">
                                    <img
                                        src="./images/media.jpg"
                                        alt="N/A"
                                        className="media-img rounded-3"
                                    />
                                </div>
                                <div className="col-6 position-relative p-2">
                                    <ul className="list-unstyled">
                                        <li>
                                            <h5 className="text-light">
                                                areadescription
                                            </h5>
                                        </li>
                                        <li className="text-light"><span>&#8377;</span>11000/months</li>
                                        <li className="text-light"><span>&#8377;</span>11000/days</li>
                                        <li className="text-light"><span>&#8377;</span>11000/original price</li>
                                        <li className="text-light"><span>&#8377;</span>11000/price after discount</li>
                                        <li className="text-light"><span>&#8377;</span>11000/gst(18%)</li>
                                        <li className="text-light"><span>&#8377;</span>11000/total</li>
                                        <li className="text-light mt-1">
                                            <span className=''>Days</span>
                                            <input
                                                type="number"
                                                min={5}
                                                placeholder="5"
                                                className="input-days ms-3 text-light border rounded w-25 text-center"
                                            />
                                        </li>
                                    </ul>
                                    <div className="position-relative">
                                        <button className="position-absolute btn bottom-0 cart-btn remove-btn text-dark" >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center position-sticky total-price">
                                <div className="rounded-5">
                                    <h4 className="mt-3 rounded-5 py-2 text-light gross-total">
                                        Gross Total
                                    </h4>
                                </div>
                                <div className="cart-total text-dark rounded-5">
                                    <h5 className="mt-3">
                                        Total Media : <span>3</span>
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
                                        GST(18%) : <span>Rs. 9999</span>
                                    </h5>
                                    <h5 className="mt-3">
                                        Total Media : <span>Rs. 69999</span>
                                    </h5>
                                    <button className="btn cart-btn my-4">
                                        Check Availability
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GohordingCart
