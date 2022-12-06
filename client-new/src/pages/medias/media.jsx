import React, { useState, useEffect, useContext } from 'react'
import './media.scss';
import { mediawithcity } from '../../action/adminAction';
import { useSelector, useDispatch } from 'react-redux';
import { AccountContext } from '../../apis/apiContext';
import { useParams,useNavigate } from 'react-router-dom';
import instance from '../../apis/axios'
import {  MdSearch } from 'react-icons/md'
import { MdOutlineShoppingCart } from 'react-icons/md'
import SingleCard from './singleCard';
import MultiCard from './multiCard';
import Medialogo from '../../components/medialogo';
import FixedNavbar from '../../components/navbar/fixednavbar';

const Media = () => {
  const priceState = window.localStorage.getItem("user") || window.sessionStorage.getItem("user");
  const dispatch = useDispatch()
  const {search, loading} = useSelector((state) => state.search)
  const [show, setShow] = useState(false)
    const { category_name, city_name } = useParams();
    const {addRemove} = useContext(AccountContext)
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const [category, setcategory] = useState([]);
    const [query, setQuery] = useState("");
    const [catego, setCatego] = useState('');
    const [illumna, setIllumna] = useState('');
    const [noOfLogo, setnoOfLogo] = useState(8);

    let slice;
    if(!loading){
       slice = search.slice(0, noOfLogo);
    }

  let ILLUMINATION = [
      { label: "Nonlit", value: "nonlit" },
      {
        label: "Frontlit",
        value: "frontlit",
      },
      {
        label: "Backlit",
        value: "backlit",
      },
      {
        label: "Ambilit",
        value: "ambilit",
      },
      {
        label: "LED",
        value: "lED",
      },
      {
        label: "Digital",
        value: "digital",
      },
      {
        label: "Ledscreen",
        value: "ledscreen",
      }
    ];
  
    const holdingtype = async () => {
      const { data } = await instance.get('filter/categoryfilter')
      setcategory(data);
    }
    useEffect(() => {
      holdingtype();
    }, [])
    
    const  mediaFilter = async() => {
   const {data} = await instance.post("filter/filterData",{
    value : category_name,
    illumna: illumna,
    catego:catego,
  })
  setPosts(data)
    }
    
  //   useEffect(() =>{
  //     mediaFilter()
  //   },[category_name, illumna,catego])
    
    const getData = async() => {
    await dispatch(mediawithcity(category_name, city_name))
    }
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
     
        <Medialogo category_name={category_name} posts={posts} />
        <div className="container-fluid px-5 ">
        <div className="row m-4 p-5">
          <div className="col-md-2 ">
            <div className="col sub-category-search ">
              <h6 className="text-uppercase media-heading text-dark  media-filter-text-card-head  mt-2 ">Sub category</h6>
              <div class="form  mt-1 mb-1">
                  <MdSearch class="fa fa-search" /> 
                  <input type="text" class="form-control form-input" placeholder="Search..."  onChange={(event) => setQuery(event.target.value)}/>
                </div>
              <div className="rowCheck  row rounded-bottom   mb-1 ">
                <ul>
                  {category
                    .filter((obj) => {
                      if (query == "") {
                        return obj;
                      } else if (
                        obj.name.toLowerCase().includes(query.toLowerCase())
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
                        <span className="text-wrap  media-filter-text-card-detail ">{illum.name}
                        </span>
                        <br />
                      </>
                    ))}
                </ul>
              </div>
            </div>
            <div className="col">
                <h6 className="text-uppercase media-heading  media-filter-text-card-head  mt-4 text-dark">Select Media</h6>
              <div className=" rounded-bottom rounded-1">
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
                        <span className=" ms-3  media-filter-text-card-detail">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>


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
            <div class="button offset-3 row mt-4 pb-2">
              <button class="w-25 buttonload btn-hover" onClick={() => More()}>
                <i aria-hidden="true" class="fa fa-caret-down"></i>View More{" "}
              </button>
              <button
                class="w-25 ms-5 buttonload btn-hover"
                onClick={() => Less()}
              >
                <i aria-hidden="true" class="fa fa-long-arrow-up"></i> View Less
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

