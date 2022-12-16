import React, { useState, useEffect, useContext } from "react";
import "./media.scss";
import { mediawithcity } from "../../action/adminAction";
import { useSelector, useDispatch } from "react-redux";
import { AccountContext } from "../../apis/apiContext";
import { useParams, useNavigate } from "react-router-dom";
import instance from "../../apis/axios";
import { ILLUMINATION } from "../../apis/apis";
import { MdSearch } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import SingleCard from "./singleCard";
import MultiCard from "./multiCard";
import Medialogo from "../../components/medialogo";
import FixedNavbar from "../../components/navbar/fixednavbar";

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
    if (noOfLogo > 2) {
      setnoOfLogo(noOfLogo - 8);
    }
  };

  useEffect(() => {
    getData();
  }, [category_name, city_name]);

  return (
    <>
      <FixedNavbar />

      <Medialogo category_name={category_name} search={search} />
      <div className="container-fluid px-5 ">
        <div className="row m-4 p-5">
          

          <div className="col-md-10 ">
            <div className="">
              {!show ? (
                <>
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
                </>
              ) : (
                <>
                  <SingleCard
                    MdOutlineShoppingCart={MdOutlineShoppingCart}
                    slice={slice}
                    search={search}
                    loading={loading}
                    addonCart={addonCart}
                    removefroCart={removefroCart}
                    add={add}
                    remove={remove}
                    priceState={priceState}
                    locatetologin={locatetologin}
                  />
                </>
              )}
            </div>
            <div className="button offset-3 row mt-4 pb-2">
              <button className="w-25 buttonload btn-hover" onClick={() => More()}>
                <i aria-hidden="true" className="fa fa-caret-down"></i>View More{" "}
              </button>
              <button
                className="w-25 ms-5 buttonload btn-hover"
                onClick={() => Less()}
              >
                <i aria-hidden="true" className="fa fa-long-arrow-up"></i> View Less
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//       <div className="col pt-4" >
//         {/* <div className=' mediaName mt-1 ms-1 me-1 p-2 rounded-top'>
//           <h6 className="text-uppercase text-center">Illumination(5)</h6>
//         </div> */}

//         {/* <div className="rowCheck bg-light row rounded-bottom mb-1 ms-1 me-1 p-1">
//           <ul>
//             <li className="w-100">
//               <input className=" ms-2 " type="checkbox"></input>
//               <span className=" ms-3">UniPole</span>
//             </li>
//             <li className="w-100">
//               <input className=" ms-2" type="checkbox"></input>
//               <span className=" ms-3">UniPole</span>
//             </li>
//             <li className="w-100">
//               <input className=" ms-2" type="checkbox"></input>
//               <span className=" ms-3">UniPole</span>
//             </li>
//             <li className="w-100">
//               <input className=" ms-2" type="checkbox"></input>
//               <span className=" ms-3">UniPole</span>
//             </li>
//             <li className="w-100">
//               <input className=" ms-2" type="checkbox"></input>
//               <span className=" ms-3">UniPole</span>
//             </li>
//             <li className="w-100">
//               <input className=" ms-2" type="checkbox"></input>
//               <span className=" ms-3">UniPole</span>
//             </li>
//             <li className="w-100">
//               <input className=" ms-2" type="checkbox"></input>
//               <span className=" ms-3">UniPole</span>
//             </li>
//             <li className="w-100">
//               <input className=" ms-2" type="checkbox"></input>
//               <span className=" ms-3">UniPole</span>
//             </li>
//             <li className="w-100">
//               <input className=" ms-2" type="checkbox"></input>
//               <span className=" ms-3">UniPole</span>
//             </li>
//             <li className="w-100">
//               <input className=" ms-2" type="checkbox"></input>
//               <span className=" ms-3">UniPole</span>
//             </li>
//             <li className="w-100">
//               <input className=" ms-2" type="checkbox"></input>
//               <span className=" ms-3">UniPole</span>
//             </li>
//             <li className="w-100">
//               <input className=" ms-2" type="checkbox"></input>
//               <span className=" ms-3">UniPole</span>
//             </li>
//             <li className="w-100">
//               <input className=" ms-2" type="checkbox"></input>
//               <span className=" ms-3">UniPole</span>
//             </li>
//             <li className="w-100">
//               <input className=" ms-2" type="checkbox"></input>
//               <span className=" ms-3">UniPole</span>
//             </li>
//           </ul>
//         </div> */}
//       </div>
//     </div>

//                     </div>
//             </div>
//         </>
//     )
// }

// export default Media
export default Media;
