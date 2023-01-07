import React, {useContext, useEffect, useState} from "react";
import {RiUser3Fill} from "react-icons/ri";
import {AccountContext} from "../../apis/apicontext";
import {useNavigate, useParams} from "react-router-dom";
import {IoIosSettings, IoMdLocate} from "react-icons/io";
import {useSelector} from "react-redux";
import "./details.scss";
import instance from "../../apis/axios";
import Fixednavbar from "../../components/navbar/fixednavbar";

const Details = () => {
  const {category_name, meta_title} = useParams();
  const {addRemove} = useContext(AccountContext);
  const navigate = useNavigate();
  const [markers, setPosts] = useState([]);
  const {isLoggedIn} = useSelector((state) => state.LoginStatus);



  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  useEffect(() => {
    
    topFunction();
  }, []);

  const getMedia = async () => {
    const { data } = await instance.post("product/product", {
      meta_title: meta_title,
      category_name: category_name,
    });
    setPosts(data);
  };
  const locatetologin = async () => {
     localStorage.setItem("locate", `/${meta_title}/${category_name}`);
    navigate("/login");
  };
  const addonCart = async (e) => {
    const { data } = await instance.post("cart/addOnCart", {
      mediaid: e.code,
      mediatype: e.category_name,
    });
    if (data.message == "Login First") {
       localStorage.setItem("locate", `/${meta_title}/${category_name}`);
      navigate("/login");
    } else {
      addRemove({ type: "INCR" });
      add(e);
    }
  };
  const removefroCart = async (obj) => {
    await instance.post("cart/deleteFromCart", {
      code: obj.code,
    });
    addRemove({ type: "DECR" });
    remove(obj);
  };

  const add = (event) => {
    let data = [...markers];
    data.forEach((element) => {
      if (element.code == event.code) {
        element.isDelete = 0;
        setPosts(data);
      }
    });
  };

  const remove = (event) => {
    let data = [...markers];
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
      <div className=" detailsHeader d-flex flex-row justify-content-center  p-0">
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
      {!markers ? (
        <>
          <h1>Loading... Please wait</h1>
        </>
      ) : (
        <>
          {markers.map((item, i) => (
            <div className="container-xxl  container-xl container-lg container-md my-5" key={i}>
              <div className="row pt-5 ">
                <div className="col-md-6 text-center">
                  <div className=" rounded-3 p-2">
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
                      className="rounded-3  detail-mg p-2"
                    />
                  </div>
                  <div style={{width:"20px", height:"20px"}}>
                   {/* <Markers markers={markers} /> */}
                  </div>
                </div>

                <div className="col " id="media">

                  <div className="ms-3 me-3 detail-mg-detail p-3 pt-0  pb-1 rounded-2 mt-2">
                    <h4 className=" pt-3 fw-bold">{item.page_title}</h4>

                    <div className="row ">
                      <div className="col pt-4">
                        <h6 className=" ">
                          Code :<span className="text-dark"> {item.code}</span>
                        </h6>
                        <h6 className="overflow-wrap">
                          Price:{" "}
                          {!isLoggedIn ? (
                            <a
                              onClick={locatetologin}
                              className="text-decoration-none text-danger"
                            >
                              Login first
                            </a>
                          ) : (
                            item.price
                          )}
                        </h6>
                      </div>
                      <div className="col mt-4 d-flex offset-4">
                        <a href="/map" className=" text-decoration-none logo-set">
                          <img
                            src="../../gohoarding/new-icon/detail-map.png"
                            className="ms-4 "
                            id="detail-map-location"
                          />
                        </a>
                        {item.isDelete === 0 ? (
                        <img
                          src="../../gohoarding/new-icon/remove-cart.png"
                          onClick={() => removefroCart(item)}
                          className="detail-Cart ms-3"
                          
                        />
                      ) : (
                        <img
                          src="../../gohoarding/new-icon/add-cart.png"
                          onClick={() => addonCart(item)}
                          className="detail-Cart ms-3"
                        />
                      )}
                      </div>
                    </div>
                    <div className="mt-3 singlemediashow ">
                    
                      <div className="d-flex flex-row mt-3 pb-2 mediaAllDetails">
                        <h6 className=" pt-2">Address</h6>
                        <span className="ms-auto ">{item.areadescription}</span>
                      </div>
                      <div className="d-flex flex-row mt-2 pb-2 mediaAllDetails">
                        <h6 className=" pt-2">Media Type</h6>
                        <span className="ms-auto input-group-text  mediatype">
                          {item.subcategory}
                        </span>
                      </div>
                      <div className="d-flex flex-row mt-2 pb-2 mediaAllDetails">
                        <h6 className=" pt-2">Illumination</h6>
                        <span className="ms-auto input-group-text  mediatype">
                          {item.illumination}
                        </span>
                      </div>
                      <div className="d-flex flex-row mt-2 pb-2 mediaAllDetails">
                        <h6 className=" pt-2">Height X Width</h6>
                        <span className="ms-auto input-group-text  ">
                          {item.size}
                        </span>
                      </div>

                      <div className="d-flex flex-row mt-2 pb-2 mediaAllDetails">
                        <h6 className=" pt-2">FTF</h6>
                        <span className="ms-auto input-group-text ">
                          {item.ftf}
                        </span>
                      </div>
                      <div className="d-flex flex-row mt-2 pb-2 ">
                        <h6 className=" pt-2">Total Area</h6>
                        <span className="ms-auto input-group-text">
                          {item.area}
                        </span>
                      </div>
                    </div>
                  </div>

                 {/* form section */}
                  <div className="row ms-3 me-3 mt-5 detail-mg-detail rounded-3 p-2">
                     <div className=" p-2 datail-heading  rounded-3">
                        <h4 className="text-light">GET A FREE CONSULTATION!</h4>
                      </div>
                      <form className="row g-3 needs-validation ms-1" novalidate>
  <div className="col-md-6 position-relative">
    <label for="validationTooltip01" className="form-label">Name</label>
    <input type="text" className="form-control" id="validationTooltip01"  required/>

  </div>
  <div className="col-md-6 position-relative">
    <label for="validationTooltip02" className="form-label">Number</label>
    <input type="number" className="form-control" id="validationTooltip02" required/>
 
  </div>
  <div className="col-md-6 position-relative">
    <label for="validationTooltip03" className="form-label">Email</label>
    <input type="text" className="form-control" id="validationTooltip03" required/>
  
  </div>
  <div className="col-md-6 position-relative">
    <label for="validationTooltip03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationTooltip03" required/>
 
  </div>
  <div className="col-md-12 position-relative">
    <label for="validationTextarea" className="form-label">Textarea</label>
    <textarea className="form-control " id="validationTextarea" placeholder="Required example textarea" required></textarea>
  </div>

  <div className="col-12 d-grid ">
    <button className="btn get-btn text-light " type="submit">Send request</button>
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
