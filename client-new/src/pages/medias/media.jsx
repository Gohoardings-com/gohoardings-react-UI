import React, { useState, useEffect, useContext } from "react";
import "./media.scss";
import { ILLUMINATION } from "../../apis/apis";
import { mediawithcity } from "../../action/adminAction";
import { useSelector, useDispatch } from "react-redux";
import { AccountContext } from "../../apis/apiContext";
import { useParams, useNavigate } from "react-router-dom";
import { Modal} from "react-bootstrap";
import instance from "../../apis/axios";
import {
  MdOutlineShoppingCart,
  MdArrowUpward,
  MdOutlineArrowDownward,
} from "react-icons/md";
import MultiCard from "./multiCard";
import Medialogo from "../../components/medialogo";
import FixedNavbar from "../../components/navbar/fixednavbar";
import { BsFilterRight } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
const Media = () => {
  const priceState =
    window.localStorage.getItem("user") ||
    window.sessionStorage.getItem("user");
  const dispatch = useDispatch();
  const { search, loading } = useSelector((state) => state.search);
  const [show, setShow] = useState(false);
  const { category_name, city_name } = useParams();
  const { addRemove } = useContext(AccountContext);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [category, setcategory] = useState([]);
  const [query, setQuery] = useState("");
  const [catego, setCatego] = useState("");
  const [illumna, setIllumna] = useState("");
  const [noOfLogo, setnoOfLogo] = useState(8);

  let slice;
  if (!loading) {
    slice = search.slice(0, noOfLogo);
  }


  const holdingtype = async () => {
    const { data } = await instance.get("filter/categoryfilter");
    setcategory(data);
  };

  useEffect(() => {
    holdingtype();
  }, []);

  const mediaFilter = async () => {
    const { data } = await instance.post("filter/filterData", {
      value: category_name,
      illumna: illumna,
      catego: catego,
    });
    setPosts(data);
  };

  const getData = async () => {
    await dispatch(mediawithcity(category_name, city_name));
  };

  const addonCart = async (e) => {
    const { data } = await instance.post("cart/addOnCart", {
      mediaid: e.code,
      mediatype: e.category_name,
    });
    if (data.message == "Login First") {
      window.localStorage.setItem("locate", `/${category_name}/${city_name}`);
      navigate("/login");
    }
    addRemove({ type: "INCR" });
    add(e);
  };

  const locatetologin = async () => {
    window.localStorage.setItem("locate", `/${category_name}/${city_name}`);
    navigate("/login");
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
    let data = [...search];
    data.forEach((element) => {
      if (element.code == event.code) {
        console.log(element);
        element.isDelete = 0;
        setPosts(data);
      }
    });
  };

  const remove = (event) => {
    let data = [...search];
    data.forEach((element) => {
      if (element.code == event.code) {
        element.isDelete = 1;
        setPosts(data);
      }
    });
  };

  const More = () => {
    if (search.length >= noOfLogo) {
      setnoOfLogo(noOfLogo + 8);
    }
  };
  const Less = () => {
    if (noOfLogo > 9) {
      setnoOfLogo(noOfLogo - 8);
    }
  };

  useEffect(() => {
    getData();
  }, [category_name, city_name]);

  const [userModal, setUserModal] = useState(false);
  const showUserModal = () => {
    setUserModal(!userModal);
  };

  const data=async() =>{
    navigate('/map')
    }

  return (
    <>
      <FixedNavbar />

      <Medialogo category_name={category_name} search={search} loading={loading} />
      <div className=" container-xxl  container-xl container-lg container-md  mt-4 mb-5 p-0 ">
        <div className="row ">
          <p  >
            <h5
              className="filter-down  btn btn-outline-secondary"
              onClick={showUserModal}
            >
              Filter <BsFilterRight className=" text-dark " />
            </h5>
            <h5
              className="filter-down me-3 "
              onClick={() => data()}
            >
            <img src="https://cdn-icons-png.flaticon.com/512/854/854894.png" className="media-location-logo-map "/>
            </h5>
          </p>

          {userModal ? (
            <Modal
              show={userModal}
              onHide={showUserModal}
              backdrop="static"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  {" "}
                  <h5 className="text-dark"> Filter</h5>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="row">
                  <div className="col ms-3">
                    <h6 className="text-uppercase media-heading  media-filter-text-card-head  mt-2 text-dark mb-1">
                     Media Type
                    </h6>

                    <div className=" row ">
                      <ul>
                        {ILLUMINATION.map((item, i) => (
                          <li className="w-100">
                            <input
                              className="  collapse-none"
                              id={i}
                              type="checkbox"
                              name={item.label}
                              onChange={(e) => setIllumna(e.target.name)}
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseT2"
                              aria-expanded="false"
                              aria-controls="collapseT2"
                              onClick={() => mediaFilter()}
                            />
                            <span className=" ms-1  media-filter-text-card-detail-filt">
                              {item.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col sub-category-search ">
                    <h6 className="text-uppercase media-heading text-dark  media-filter-text-card-head  mt-2 ">
                      Sub category
                    </h6>
                <input
                  type="text"
                  className="form-control form-input text-start"
                  placeholder="Search..."
                  onChange={(event) => setQuery(event.target.value)}
                />
                    <div className="rowCheck  row    ">
                      <ul>
                        {category
                          .filter((obj) => {
                            if (query == "") {
                              return obj;
                            } else if (
                              obj.name
                                .toLowerCase()
                                .includes(query.toLowerCase())
                            ) {
                              return obj;
                            }
                          })
                          .map((illum, i) => (
                            <>
                              <input
                                type="checkbox"
                                id={i}
                                className="me-1"
                                name={illum.name}
                                value="false"
                                onChange={(e) => setCatego(e.target.name)}
                                onClick={(e) => mediaFilter(e)}
                              />
                              <span className="text-wrap  media-filter-text-card-detail-filt ">
                                {illum.name}
                              </span>
                              <br />
                            </>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          ) : (
            ""
          )}
          <MultiCard
            MdOutlineShoppingCart={MdOutlineShoppingCart}
            slice={slice}
            search={search}
            addonCart={addonCart}
            loading={loading}
            removefroCart={removefroCart}
            add={add}
            remove={remove}
            priceState={priceState}
            locatetologin={locatetologin}
          />
        </div>
      </div>
      <div className="position-relative mb-5 pb-5">
        <div class=" position-absolute  top-0 start-50 translate-middle">
          <button class=" buttonload btn-hover" onClick={() => More()}>
            View More <MdOutlineArrowDownward />
          </button>
          {}
          <button class=" ms-5 buttonload btn-hover" onClick={() => Less()}>
            View Less <MdArrowUpward />
          </button>
        </div>
      </div>
    </>
  );
};

export default Media;
