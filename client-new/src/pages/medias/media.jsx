import React, { useState, useEffect, useContext } from 'react'
import './media.scss';
import { mediawithcity } from '../../action/adminAction';
import { useSelector, useDispatch } from 'react-redux';
import { AccountContext } from '../../apis/apiContext';
import { BsListCheck } from 'react-icons/bs';
import { useParams,useNavigate } from 'react-router-dom';
import instance from '../../apis/axios'
import { MdLocationOn, MdChecklist } from 'react-icons/md'
import { MdOutlineShoppingCart } from 'react-icons/md'
import SingleCard from './singleCard';
import MultiCard from './multiCard';
import Medialogo from '../../components/medialogo';
import FixedNavbar from '../../components/navbar/fixednavbar';

const Media = () => {
  const priceState = window.localStorage.getItem("user")
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
  const [noOfLogo, setnoOfLogo] = useState(6)
  var slice;
  if(search){
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
    
    useEffect(() =>{
      mediaFilter()
    },[category_name, illumna,catego])
    
    const getData = async() => {
    await dispatch(mediawithcity(category_name, city_name))
    }
  
    const addonCart = async (e) => {
      const {data} =  await instance.post('cart/addOnCart', {
          mediaid: e.code,
          mediatype: e.category_name,
        })
        if(data.message == 'Login First'){
          window.localStorage.setItem("locate",`/${category_name}/${city_name}`)
          navigate('/login')
        }
          addRemove({type:"INCR"})
          add(e)
      }
      const locatetologin = async() =>{
        window.localStorage.setItem("locate",`/${category_name}/${city_name}`)
        navigate('/login')
    }
      const removefroCart = async (obj) => {
        console.log(obj);
        await instance.post('cart/deleteFromCart', {
          code: obj.code,
        })
        addRemove({type:"DECR"})
        remove(obj)
      }
  
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
        if (posts.length >= noOfLogo) {
          setnoOfLogo(noOfLogo + 10);
        }
      };
      const Less = () => {
        if (noOfLogo > 2) {
          setnoOfLogo(noOfLogo - 10);
        }
      };

    useEffect(() => {
      getData()
        },[category_name, city_name])
    return (
        <>
        <FixedNavbar/>
            <div className='container-fluid pt-3  mediabackground '>
               <Medialogo category_name={category_name} posts={posts}/>
                <div className="row mt-3 rounded  ms-3 ps-3 ps-5 pe-5">
                <div className="col-sm-2 col-12">
      <div className="col pt-4" >
        <div className='mediaName me-1 rounded-top ms-1 mt-5 p-2'>
          <h6 className="text-uppercase text-center">Sub category(5)</h6>
        </div>
        <input type="serach" placeholder="Search.." onChange={event => setQuery(event.target.value)} className=' w-100 mt-2 p-2 rounded-3' />

        <div className="rowCheck bg-light row rounded-bottom me-4 ms-1 mb-1 p-1">
          <ul>
            {category.filter(obj => {
              if (query == '') {
                return obj;
              } else if (obj.name.toLowerCase().includes(query.toLowerCase())) {
                return obj;
              }
            }).map((illum, i) => (
              <>
                <input type="checkbox" id={i}
                  className="me-1"
                  name={illum.name}
                  value="false"
                  onChange={(e) => setCatego(e.target.name)}
                  onClick={(e) =>mediaFilter(e)}
                />
                <span className="text-wrap">{illum.name}</span>
                <br />
              </>
            ))}
          </ul>
        </div>
      </div>
      <div className="col pt-4" >
        <div className='mediaName me-1 rounded-top ms-1 mt-1 p-2'>
          <h6 className="text-uppercase text-center">Select Media (5)</h6>
        </div>
        <div className='bg-light rounded-bottom rounded-1'>
          <div className="rowCheck row m-1">
            <ul>

              {ILLUMINATION.map((item,i) => (
                <li className="w-100">
                  <input className=" ms-2 collapse-none" id={i} type="checkbox" name={item.label} onChange={(e) => setIllumna(e.target.name)}
                   data-bs-toggle="collapse" data-bs-target="#collapseT2" aria-expanded="false" aria-controls="collapseT2"
                onClick={() =>mediaFilter()}/>
                  <span className=" ms-3">{item.label}</span>
                </li>

              ))}

            </ul>
          </div>
        </div>
      </div>

      <div className="col pt-4" >
        {/* <div className=' mediaName mt-1 ms-1 me-1 p-2 rounded-top'>
          <h6 className="text-uppercase text-center">Illumination(5)</h6>
        </div> */}

        {/* <div className="rowCheck bg-light row rounded-bottom mb-1 ms-1 me-1 p-1">
          <ul>
            <li className="w-100">
              <input className=" ms-2 " type="checkbox"></input>
              <span className=" ms-3">UniPole</span>
            </li>
            <li className="w-100">
              <input className=" ms-2" type="checkbox"></input>
              <span className=" ms-3">UniPole</span>
            </li>
            <li className="w-100">
              <input className=" ms-2" type="checkbox"></input>
              <span className=" ms-3">UniPole</span>
            </li>
            <li className="w-100">
              <input className=" ms-2" type="checkbox"></input>
              <span className=" ms-3">UniPole</span>
            </li>
            <li className="w-100">
              <input className=" ms-2" type="checkbox"></input>
              <span className=" ms-3">UniPole</span>
            </li>
            <li className="w-100">
              <input className=" ms-2" type="checkbox"></input>
              <span className=" ms-3">UniPole</span>
            </li>
            <li className="w-100">
              <input className=" ms-2" type="checkbox"></input>
              <span className=" ms-3">UniPole</span>
            </li>
            <li className="w-100">
              <input className=" ms-2" type="checkbox"></input>
              <span className=" ms-3">UniPole</span>
            </li>
            <li className="w-100">
              <input className=" ms-2" type="checkbox"></input>
              <span className=" ms-3">UniPole</span>
            </li>
            <li className="w-100">
              <input className=" ms-2" type="checkbox"></input>
              <span className=" ms-3">UniPole</span>
            </li>
            <li className="w-100">
              <input className=" ms-2" type="checkbox"></input>
              <span className=" ms-3">UniPole</span>
            </li>
            <li className="w-100">
              <input className=" ms-2" type="checkbox"></input>
              <span className=" ms-3">UniPole</span>
            </li>
            <li className="w-100">
              <input className=" ms-2" type="checkbox"></input>
              <span className=" ms-3">UniPole</span>
            </li>
            <li className="w-100">
              <input className=" ms-2" type="checkbox"></input>
              <span className=" ms-3">UniPole</span>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
                    <div className="col-12 col-sm-10 rounded">
                        <div className='row mediaName rounded-top '>
                            <div className='col-sm-10 col-9'>
                                <h3 className='mt-2'>{category_name.toUpperCase()}</h3>
                            </div>
                            <div className='col-1'>
                              <a href='/map'  className='text-light'>
                              <MdLocationOn className='h-75 w-auto mt-1'  />
                              </a>
                               
                            </div>
                            <div className='col-1'>
                               {!show ? <> <MdChecklist onClick={(e) => setShow(!show)} className='h-75 w-auto mt-1' /></>:<><BsListCheck onClick={(e) => setShow(!show)} className='h-75 w-auto mt-1' /></>}
                            </div>
                        </div>
                        <div className='overflow  rounded'>
                            <div className='container-fluid'>
                                {!show ? <>     
                                    <MultiCard MdOutlineShoppingCart={MdOutlineShoppingCart} loading={loading} slice={slice} addonCart={addonCart} removefroCart={removefroCart} add={add} remove={remove} priceState={priceState} locatetologin={locatetologin}/>
                                    </> : <>
                                      <SingleCard MdOutlineShoppingCart={MdOutlineShoppingCart } loading={loading} slice={slice} addonCart={addonCart} removefroCart={removefroCart} add={add} remove={remove} priceState={priceState} locatetologin={locatetologin}/>
                                   </>}
                            </div>
                        </div>
                    <div  class="button offset-4 row pt-3 pb-3" >
                        <button class="w-25 buttonload btn-hover" onClick={() => More()}><i aria-hidden="true" class="fa fa-caret-down"></i>View More </button>
                    <button class="w-25 ms-5 buttonload btn-hover" onClick={() => Less()}><i  aria-hidden="true" class="fa fa-long-arrow-up"></i> Back to Top </button>
                    </div>
                </div>
                    </div>
            </div>
        </>
    )
}

export default Media
