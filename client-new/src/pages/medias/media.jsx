import React, {useContext, useEffect, useState} from "react";
import "./media.scss";
// import { ILLUMINATION } from "../../apis/apis";
import {mediaFilters, mediawithcity} from "../../action/adminAction";
import {useDispatch, useSelector} from "react-redux";
import {AccountContext} from "../../apis/apicontext";
import {useNavigate, useParams} from "react-router-dom";
import instance from "../../apis/axios";
import {MdArrowUpward, MdOutlineArrowDownward, MdOutlineShoppingCart,} from "react-icons/md";
import Multicard from "./multicard";
import Medialogo from "../../components/medialogo";
import FixedNavbar from "../../components/navbar/fixednavbar";

const Media = () => {
  const dispatch = useDispatch();
  const {search, loading} = useSelector((state) => state.search);
  const {category_name, city_name} = useParams();
  const { addRemove } = useContext(AccountContext);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [category, setcategory] = useState([]);
  const [illunation, setillunation] = useState([]);
  const [query, setQuery] = useState(false);
  const [noOfLogo, setnoOfLogo] = useState(8);
  const [mediaData, setMediadata] = useState([]);
  const [singlemedia, setsingleMedia] = useState([]);
  const [news, setNews] = useState([]);
  const [disable, setDisable] = useState(true);

  let slice;
  if (!loading) {
    slice = search.slice(0, noOfLogo);
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  useEffect(() => {
    topFunction();
  }, []);

  const getData = async () => {
    await dispatch(mediawithcity(category_name, city_name));
  };

  const addonCart = async (e) => {
    const { data } = await instance.post("cart/addOnCart", {
      mediaid: e.code,
      mediatype: e.category_name,
    });
  console.log(data)
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
      window.scrollBy(0, 850);
    }
  };

  const Less = () => {
    if (noOfLogo > 9) {
      setnoOfLogo(noOfLogo - 8);
      window.scrollBy(0, -850);
    }
  };

  useEffect(() => {
    getData();
    getDataByApi();
  }, [category_name, city_name]);

  let ILLUMINATION;
  const getDataByApi = async () => {
    const { data } = await instance.post("media/searchMedia", {
      category_name,
      city_name,
    });
    const mediaDatas = [...data];
    setMediadata(mediaDatas);
  };

  const fff = mediaData.map((o) => o.illumination);
  ILLUMINATION = [...new Set(fff)];

  function categoryFilter(cate) {
    category.forEach((el) => {
      if (el === cate && news.indexOf(el) > -1) {
        news.splice(news.indexOf(el), 1);
        setNews(news);
      } else if (el === cate && !news.indexOf(el) > -1) {
        news.push(cate);
        setNews(news);
      }
      dispatch(mediaFilters(category_name, singlemedia, news, city_name));
    });
  }

  function illuminationfilter(illum) {
    setQuery(true)
    if (!loading) {
      const data = mediaData.filter((el) => el.illumination == illum);
      const hhh = data.map((el) => el.subcategory);
      const category = [...new Set(hhh)];
      setcategory(category);
      setDisable(false);
    }
    dispatch(mediaFilters(category_name, illum, news, city_name));
  }
  
  const data = async () => {
    navigate("/map");
  };

  return (
    <>
      <FixedNavbar />
      <Medialogo
        category_name={category_name}
        search={search}
        loading={loading}
      />
      <div className=" container-xxl  container-xl container-lg container-md  mt-4 mb-5 p-0 ">
        <div className="row ">
          <div className="filter-container">
            <div className="filter-down-left d-flex ">
              <>
                <h6 className="fs-4 me-3 text-dark">
                  Filter By : 
                </h6>
                <h5
                  data-bs-toggle="dropdown"
                  className=" btn me-2  dropdown-toggle"
                >
                  MEDIA TYPE
                </h5>
                <div
                  className="dropdown-menu "
                  aria-labelledby="dropdownMenuButton"
                >
                  <div className="col ms-2">
                    <div className="row rowCheckd">
                      <ul className="text-decoration-none">
                        {ILLUMINATION.map((item, i) => (
                          <li className=" " id="marker"  key={i}>
                            <input
                              className="  collapse-none"
                             
                              name="radio"
                              type="radio"
                              onChange={(e) => illuminationfilter(item)}
                              onClick={(e) => setsingleMedia(item)}
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseT2"
                              aria-expanded="false"
                              aria-controls="collapseT2"
                            />
                            <span className="   media-filter-text-card-detail-filt ms-1">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </>

              <>
               {query &&  <div className="col sub-category-search ms-1 ">
                  <h5
                    disabled={disable}
                    data-bs-toggle="dropdown"
                    className=" btn   dropdown-toggle "
                  >
                    SUB CATEGORY
                  </h5>
                  <div
                    className="dropdown-menu ps-2 "
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div className="rowCheck  row">
                      <ul>
                        {category.map((cate, i) => (
                            <>
                              <div className="m-0 p-0" key={i}>
                              <input
                                type="checkbox"
                          
                                className="me-1"
                                value={cate}
                                onChange={(e) => categoryFilter(cate)}
                              />
                                <span className="text-wrap  media-filter-text-card-detail-filt ">
                                {cate.substring(0, 13)}
                              </span>
                              </div>
                            
                           
                            </>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>}
              </>
            </div>

            <p className="filter-down btn  " onClick={() => data()}>

              Map View
              <img
                src="https://cdn-icons-png.flaticon.com/512/854/854894.png" 
                className="media-location-logo-map ms-2"
              />
            </p>
          </div>

          <Multicard
            MdOutlineShoppingCart={MdOutlineShoppingCart}
            slice={slice}
            search={search}
            addonCart={addonCart}
            loading={loading}
            removefroCart={removefroCart}
            add={add}
            illunation={illunation}
            remove={remove}
            locatetologin={locatetologin}
          />
        </div>
      </div>

      
            {loading ? <> </>
      :<>  { 
      slice.length < 8 ? <>
      
        </>:<><div className="position-relative mb-5 pb-5 " >
        <div className=" position-absolute  top-0 start-50 translate-middle">
          {slice.length == search.length ? <> </> : 
                    <button className=" buttonload btn-hover" onClick={() => More()}>
                    View More <MdOutlineArrowDownward />
                  </button>
                  }
                  {slice.length <= 8 ? (
                    <> </>
                  ) : (
                    <button
                      className=" ms-5 buttonload btn-hover"
                      onClick={() => Less()}
                    >
                      View Less <MdArrowUpward />
                    </button>
                  )}
        </div>
      </div> </>}</>
     }


      
    </>
  );
};

export default Media;
