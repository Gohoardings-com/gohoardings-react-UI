import React from "react";
import "./media.scss";
import {MdOutlineRemoveShoppingCart, MdOutlineAddShoppingCart} from 'react-icons/md'
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {ImEye} from "react-icons/im"

const MultiCard = ({ slice,loading, addonCart, removefroCart, priceState, locatetologin }) => {

   
  return (
    <div className="row row-cols-md-4 p-0 ms-2  mt-1">
      {!slice ? (
        <>
          <h1>Loading.... Please Wait</h1>
        </>
      ) : (
        <>
          {slice.map((item, i) => (
            <>
              <Card className="p-2 m-2 multi-card" style={{ width: "20rem" }}>
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
                  className="media-card-img"
                />
                <Card.Body className="pb-1 ps-0 pe-0">
                  <Card.Title>
                    {" "}
                    <h5 className=" overflow-hidden ">
                      {item.page_title.substring(0, 30) + "..."}
                    </h5>
                  </Card.Title>
                  <Card.Text>
                    <div className="row">
                      <div className="col ">
                        <p className=" mb-0">Code : {item.code}</p>
                        <p className="mb-0">Size : {item.size}</p>
                        <p className="mb-0">
                          Price:{" "}
                          {!priceState ? (
                            <a
                              onClick={locatetologin}
                              className="text-decoration-none text-danger"
                            >
                              Login to view
                            </a>
                          ) : (
                            item.price
                          )}
                        </p>
                      </div>
                      <div className="col ">
                        <div className="row mt-3 ">
                          <div className="col">
                            <Link
                              to={`/details/${item.category_name}/${item.meta_title}`}
                              className="text-decoration-none text-dark text-center  d-flex mt-3 btn-outline-info"
                            >
                            
                                <p className="btn btn-outline-secondary mb-0 fw-bold ">   Details  </p>    
                           
                            </Link>
                          </div>
                          <div className="col ">
                            {item.userid == null ||
                            item.isDelete == null ||
                            (item.userid != null && item.isDelete == 1) ? (
                              < MdOutlineAddShoppingCart
                             
                                onClick={() => addonCart(item)}
                                className="addonCart mt-4 addonCart-plus  "
                              />
                            ) : (
                              <>
                                {" "}
                                <MdOutlineRemoveShoppingCart
                                  onClick={() => removefroCart(item)}
                                  className="addonCart text-danger mt-4 "
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
      )}
    </div>
  );
};

export default MultiCard;
