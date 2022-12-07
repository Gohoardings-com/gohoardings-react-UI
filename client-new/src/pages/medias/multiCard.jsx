import React from "react";
import "./media.scss";
import {MdOutlineRemoveShoppingCart, MdOutlineAddShoppingCart} from 'react-icons/md'
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const MultiCard = ({ slice, loading, addonCart, removefroCart, priceState, locatetologin}) => {  
  return (

    <div className="row row-cols-md-4 p-0 ms-2  mt-1">
      {loading ? 
        <>
          <h1>Loading... Please Wait</h1>
        </>
       : 
        <>
          {slice.map((item, i) => (
            <>
              <Card className="  multi-card p-2 mt-2 w-25">
                <Card.Img
                  variant="top"
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
                          .toLowerCase()}/media/images/new${item.thumb}`
                  }
                  alt="About media "
                  className="media-card-img ps-0 pe-0"
                  
                />
                <Card.Body className="pb-1 ps-0 pe-0 ">
                  <Card.Title>
                    {" "}
                    <h5 className=" overflow-hidden media-filter-text-card-head ">
                      {item.page_title.substring(0, 42) + "..."}
                    </h5>
                  </Card.Title>
                  <Card.Text>
                    <div className="row">
                      <div className="col pt-1">
                        {/* <p className=" mb-0 media-filter-text-card-detail">Code : {item.code}</p> */}
                        <p className="mb-0 media-filter-text-card-detail" >Size : {item.size}</p>
                        <p className="mb-0 media-filter-text-card-detail">
                          Price:{" "}
                          {!priceState ? (
                            <a
                              onClick={locatetologin}
                              className="text-decoration-none text-danger media-filter-text-card-detail "
                            >
                              Login to view
                            </a>
                          ) : (
                            item.price
                          )}
                        </p>
                      </div>
                      <div className="col  pb-0 mb-0">
                        <div className="row pb-0 mb-0">
                          <div className="col">
                            <Link
                              to={`/details/${item.category_name}/${item.meta_title}`}
                              className="text-decoration-none  text-center  d-flex mt-2 "
                            >
                            
                                <p className="btn p-1 btn-outline-secondary mb-0 detail-btn media-filter-text-card-detail">   Details  </p>    
                           
                            </Link>
                          </div>
                          <div className="col p-1">
                            {item.userid == null ||
                            item.isDelete == null ||
                            (item.userid != null && item.isDelete == 1) ? (
                              < MdOutlineAddShoppingCart
                             
                                onClick={() => addonCart(item)}
                                className="addonCart mt-2 addonCart-plus  "
                              />
                            ) : (
                              <>
                                {" "}
                                <MdOutlineRemoveShoppingCart
                                  onClick={() => removefroCart(item)}
                                  className="addonCart text-danger mt-2 "
                                />
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </>
          ))}
        </>
      }
    </div>
  );
};

export default MultiCard;
