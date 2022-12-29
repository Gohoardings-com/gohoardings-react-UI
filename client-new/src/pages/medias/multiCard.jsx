import React from "react";
import "./media.scss";
import { TfiEye } from "react-icons/tfi";

import { Link } from "react-router-dom";

const MultiCard = ({
  slice,
  loading,
  addonCart,
  removefroCart,
}) => {
  return (
    <div className="m-auto mt-1 multi-card-contaier row row-cols-md-4 row-cols-xl-3">
      {loading ? (
        <>
          <h1>Loading... Please Wait</h1>
        </>
      ) : (
        <>
          {slice.map((item, i) => (
            <>
              <div className="project text-center m-auto">
                <figure className="img-responsive  ">
                  <img
                    className="img-responsive-media rounded-top"
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
                  />
                  <figcaption className="rounded-top">
                    <span className="project-details">
                      {" "}
                      {item.page_title.substring(9, 28)}
                    </span>

                    <span className="project-creator mt-2 ms-0 ">
                      <img
                        src="../../gohoarding/new-icon/rupees-logo.png"
                        onClick={() => removefroCart(item)}
                        className="rupees-logo"
                      />{" "}
                      Price {""}
                     
                          <span className="text-muted text-decoration-line-through">
                            {" "}
                            {parseInt((item.price * 11) / 10)}{" "}
                          </span>
                          <span className=" ms-2 off-text">
                            {" "}
                            9% off 
                          </span>

                        
                     
                    </span>
                    <span className="project-creator mt-2 ms-0">
                      <img
                        src="../../gohoarding/new-icon/offer-logo.png"
                        className="offer-logo"
                      />{" "}
                      Offer {""}
                     
                       
                       { parseInt(item.price)}
                      
                    </span>

                    <span className="project-price">
                      {item.isDelete === 0 ? (
                        <img
                          src="../../gohoarding/new-icon/remove-cart.png"
                          onClick={() => removefroCart(item)}
                          className="addonCart text-danger  "
                        />
                      ) : (
                        <img
                          src="../../gohoarding/new-icon/add-cart.png"
                          onClick={() => addonCart(item)}
                          className="addonCart addonCart-plus  "
                        />
                      )}
                    </span>
                  </figcaption>
                  <span className="actions rounded-top">
                    <Link
                      to={`/details/${item.category_name}/${item.meta_title}`}
                      className="text-decoration-none"
                    >
                      <button className="btn  bnt-action p-0 border-0">
                        <TfiEye className="eye-icon display-4 " />
                      </button>
                    </Link>
                  </span>
                </figure>
              </div>
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default MultiCard;
