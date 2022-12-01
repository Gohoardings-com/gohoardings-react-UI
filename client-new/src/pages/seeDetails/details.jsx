import React, { useState, useEffect, useContext } from "react";
import { RiUser3Fill } from "react-icons/ri";
import { AccountContext } from "../../apis/ApiContext";
import { useParams } from "react-router-dom";
import { IoIosSettings, IoMdLocate } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import "./details.scss";
import {
  MdOutlineRemoveShoppingCart,
  MdOutlineAddShoppingCart,
} from "react-icons/md";
import instance from "../../apis/Axios";
import Fixednavbar from "../../components/navbar/fixednavbar";

const Details = () => {
  const priceState = window.localStorage.getItem("user");
  const { category_name, meta_title } = useParams();
  const { addRemove } = useContext(AccountContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const getMedia = async () => {
    const { data } = await instance.post("product/product", {
      meta_title: meta_title,
      category_name: category_name,
    });
    console.log(data);
    setPosts(data);
  };
  const locatetologin = async () => {
    window.localStorage.setItem("locate", `/${meta_title}/${category_name}`);
    navigate("/login");
  };
  const addonCart = async (e) => {
    const { data } = await instance.post("cart/addOnCart", {
      mediaid: e.code,
      mediatype: e.category_name,
    });
    if (data.message == "Login First") {
      window.localStorage.setItem("locate", `/${meta_title}/${category_name}`);
      navigate("/login");
    } else {
      addRemove({ type: "INCR" });
      add(e);
    }
  };
  const removefroCart = async (obj) => {
    console.log(obj);
    await instance.post("cart/deleteFromCart", {
      code: obj.code,
    });
    addRemove({ type: "DECR" });
    remove(obj);
  };

  const add = (event) => {
    let data = [...posts];
    data.forEach((element) => {
      if (element.code == event.code) {
        console.log(element);
        element.isDelete = 0;
        setPosts(data);
      }
    });
  };

  const remove = (event) => {
    let data = [...posts];
    data.forEach((element) => {
      if (element.code == event.code) {
        element.isDelete = 1;
        setPosts(data);
      }
    });
  };
  useEffect(() => {
    getMedia();
  }, []);
  return (
    <>
      <Fixednavbar />
      <div className="detailsHeader d-flex flex-row justify-content-center w-100 p-0">
        <div className="icon-left-border ps-3 pe-3">
          <RiUser3Fill className="mb-1 text-dark" />{" "}
          <a className="heading-text text-dark" id="test" href="#media">
            About Media
          </a>
        </div>
        <div className="icon-left-border ps-3 pe-3 ">
          <IoIosSettings className="mb-1 text-dark" />{" "}
          <a className="heading-text text-dark" href="#highlights">
            Highlights
          </a>
        </div>
        <div className="icon-left-border ps-3 pe-3 ">
          <IoMdLocate className="mb-1 text-dark" />{" "}
          <a className="heading-text text-dark" href="#location">
            Location
          </a>
        </div>
      </div>
      {!posts ? (
        <>
          <h1>Loading... Please wait</h1>
        </>
      ) : (
        <>
          {posts.map((item, i) => (
            <div className="conatiner-fluid">
              <div className="row mt-sm-5  mb-5 pb-5 mt-3 ms-sm-5 ps-sm-5 me-sm-5 pe-sm-5">
                <div className="col ">
                  <div className="maindivbordermediadetails rounded-3 p-2">
                    <img
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
                      alt="About media"
                      className="w-100 h-auto rounded-3 img-fluid "
                    />
                  </div>
                </div>

                <div className="col " id="media">

                  <div className="ms-3 me-3 maindivbordermediadetails p-3 mb-2 rounded-2">
                    <h4 className=" pt-3 fw-bolder addonCart-plus ">{item.page_title}</h4>

                    <div className="row ">
                      <div className="col pt-4">
                        <h6 className=" text-muted">
                          Code :<span className="text-dark"> {item.code}</span>
                        </h6>
                        <h6 className="fw-bold overflow-wrap">
                          Price:{" "}
                          {!priceState ? (
                            <a
                              onClick={locatetologin}
                              className="text-decoration-none text-danger"
                            >
                              Please Login first
                            </a>
                          ) : (
                            item.price
                          )}
                        </h6>
                      </div>
                      <div className="col mt-4 d-flex offset-4">
                        <a href="/map" className=" text-decoration-none ms-5">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
                            className="ms-4 mt-1"
                            id="detail-map-location"
                          />
                        </a>
                        {item.userid == null ||
                        item.isDelete == null ||
                        (item.userid != null && item.isDelete == 1) ? (
                          <MdOutlineAddShoppingCart
                            onClick={() => addonCart(item)}
                            className="addonCart mt-3 ms-5 addonCart-plus  "
                          />
                        ) : (
                          <>
                            {" "}
                            <MdOutlineRemoveShoppingCart
                              onClick={() => removefroCart(item)}
                              className="addonCart text-danger mt-3 ms-5 "
                            />
                          </>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 singlemediashow ">
                      {/* <div className=" p-2 datail-heading">
                        <h4 className="text-light">Highlights</h4>
                      </div> */}
                      <div className="d-flex flex-row mt-3 pb-2 mediaAllDetails">
                        <h6 className="fw-bold pt-2">Address</h6>
                        <span className="ms-auto ">{item.areadescription}</span>
                      </div>
                      <div className="d-flex flex-row mt-2 pb-2 mediaAllDetails">
                        <h6 className="fw-bold pt-2">Media Type</h6>
                        <span className="ms-auto input-group-text  mediatype">
                          {item.subcategory}
                        </span>
                      </div>
                      <div className="d-flex flex-row mt-2 pb-2 mediaAllDetails">
                        <h6 className="fw-bold pt-2">Illumination</h6>
                        <span className="ms-auto input-group-text  mediatype">
                          {item.illumination}
                        </span>
                      </div>
                      <div className="d-flex flex-row mt-2 pb-2 mediaAllDetails">
                        <h6 className="fw-bold pt-2">Height X Width</h6>
                        <span className="ms-auto input-group-text  ">
                          {item.size}
                        </span>
                      </div>

                      <div className="d-flex flex-row mt-2 pb-2 mediaAllDetails">
                        <h6 className="fw-bold pt-2">FTF</h6>
                        <span className="ms-auto input-group-text ">
                          {item.ftf}
                        </span>
                      </div>
                      <div className="d-flex flex-row mt-2 pb-2 ">
                        <h6 className="fw-bold pt-2">Total Area</h6>
                        <span className="ms-auto input-group-text">
                          {item.area}
                        </span>
                      </div>
                    </div>
                  </div>

                 {/* form section */}
                  <div className="row ms-3 me-3 mt-5 maindivbordermediadetails rounded-3 p-2">
                     <div className=" p-2 datail-heading  rounded-3">
                        <h4 className="text-light ">GET A FREE CONSULTATION!</h4>
                      </div>
                      <form class="row g-3 needs-validation ms-1" novalidate>
  <div class="col-md-6 position-relative">
    <label for="validationTooltip01" class="form-label">Name</label>
    <input type="text" class="form-control" id="validationTooltip01"  required/>

  </div>
  <div class="col-md-6 position-relative">
    <label for="validationTooltip02" class="form-label">Number</label>
    <input type="number" class="form-control" id="validationTooltip02" required/>
 
  </div>
  <div class="col-md-6 position-relative">
    <label for="validationTooltip03" class="form-label">Email</label>
    <input type="text" class="form-control" id="validationTooltip03" required/>
  
  </div>
  <div class="col-md-6 position-relative">
    <label for="validationTooltip03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationTooltip03" required/>
 
  </div>
  <div class="col-md-12 position-relative">
    <label for="validationTextarea" class="form-label">Textarea</label>
    <textarea class="form-control " id="validationTextarea" placeholder="Required example textarea" required></textarea>
  </div>

  <div class="col-12 d-grid ">
    <button class="btn get-btn text-light " type="submit">Send request</button>
  </div>
</form>
                </div>
                </div>
                
              </div>
            </div>
          ))}
        </>
      )}
     
    </>
  );
};

export default Details;
