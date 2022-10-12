import React,{useState,  useEffect } from 'react';
import { BsListCheck } from 'react-icons/bs';
import { MdChecklist } from 'react-icons/md';
import { add,remove} from '../../reducer/adminReducer';
import { GrMapLocation } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import NewNAvbar from '../../Components/Navbar/Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ServicesData = () => {
    const dispatch  = useDispatch();
    const {city, category_name} = useParams();
    const [list, setList] = useState(true)
    const [posts,setPosts] = useState([])
    // const data = useSelector(state => state.services.search)
    // const abc = async () => {
    //     const {data} = await axios.post("http://localhost:8080/api/v1/media/inventory",{
    //         category_name:city,
    //         city_name:category_name,
    //     })
    //     setPosts(data)
    // }

const  addonCart = async (e) => {
    dispatch(add(e))
    await axios.post('http://localhost:8080/api/v1/cart/addOnCart', {
      userid: 5717,
      mediaid: e.code,
      mediatype: e.category_name
    })
}

const removefroCart = async(e) =>{
    dispatch(remove(e))
    await axios.post('http://localhost:8080/api/v1/cart/deleteFromCart', {
        userid: 5717,
       code :e.code,
      })
  }   


    // useEffect(() => {
    //     abc();
    // },[])

  return (
  <>
     <div className="container-fluid" style={{ background: "black" }}>
        <NewNAvbar/>
            <h1 className="col-sm-12 text-center pt-3 text-light">Traditional OOH</h1>
            <div className=" col-12 col-sm-12 p-3 mt-5 mb-5 bg-light" style={{ height: "10rem" }}> </div>
            <div className="row">
                <div className="col-sm-2 col-12 pb-5 border-top  ">
                    {/* <!-- Selcted Location --> */}
                    <div className="col mt-3" >
                        <h5 className="text-uppercase">Selcted Location(847)</h5>
                        <h6 className="font-italic">Choose Where to display on Hoardings category pages.</h6>
                        <select className="select form-select bg-secondary rounded"
                            aria-label="Default select example">
                            <defaultvalue selected>Selected Location</defaultvalue>
                        </select>
                    </div>
                    {/* Sub Category(33)  */}
                    <div className="col mt-5" >
                        <h5 className="text-uppercase">Sub Category(33)</h5>
                        <h6 className="font-italic">Choose What to display in Sub-Catgeory.</h6>
                        <div className="rowCheck row bg-secondary m-1 p-1">
                            <li className="w-100">
                                <input className="ml-2 " type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                        </div>
                    </div>
                    {/*  ILLUMINATION(6)  */}
                    <div className="col mt-5 " style={{ color: "white" }}>
                        <h5 className="text-uppercase">ILLUMINATION(6)</h5>
                        <h6 className="font-italic">Choose to display type of ILLUMINATION</h6>
                        <div className="rowCheck row bg-secondary m-1 p-1">
                            <li className="w-100">
                                <input className="ml-2 " type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                            <li className="w-100">
                                <input className="ml-2" type="checkbox"></input>
                                <span className="ml-3">UniPole</span>
                            </li>
                        </div>
                    </div>

                    {/* <!-- Products per row --> */}
                    <div className="col mt-5" style={{ color: "white" }}>
                        <h5 className="text-uppercase">Products per row</h5>
                        <h6 className="font-italic">How many Products should be shown per now</h6>
                        <select className="select form-select bg-secondary text-white-50 rounded"
                            aria-label="Default select example">
                            <defaultvalue selected>3</defaultvalue>
                        </select>
                    </div>

                    {/* <!-- Rows per row --> */}
                    <div className="col mt-5" style={{ color: "white" }}>
                        <h5 className="text-uppercase">Rows per row</h5>
                        <h6 className="font-italic">How many Products should be shown per now</h6>
                        <select className="select form-select bg-secondary text-white-50 rounded"
                            aria-label="Default select example">
                            <defaultvalue selected>4</defaultvalue>
                        </select>
                    </div>
                </div>
                <div className="col-12 col-sm-10 ml-sm-5 bg-secondary rounded">
                    <div className="d-flex flex-row pt-2">
                        <h6 className="font-italic text-light">Showing all result</h6>
                        <select className="select form-select bg-dark text-white-50 rounded ms-auto"
                            aria-label="Default select example">
                            <defaultvalue selected>Selected Location</defaultvalue>
                        </select>
                        {list && <BsListCheck className='img-fluid' style={{ height: "30px", width: "30px" }} onClick={() => setList(!list)} />}
                        {!list && <MdChecklist className='img-fluid' style={{ height: "30px", width: "30px" }} onClick={() => setList(!list)} />}
                    </div>

                    <div className="overflow">
                        {list ? <>
                            <div className="row">
                                <div className="col-sm-4 col-12">   <div className="p-sm-2 bd-highlight bg-dark m-sm-1 mt-2 p-2 rounded">
                                   {posts.map((obj) =>(           
 <div className="bg-dark text-center text-light rounded">
 <img className="img-fluid rounded" src="../../images/media.jpg" style={{ height: "190px", width: "auto" }} alt="" />
 <div className="data text-left">
     <h6 className="pt-2">acade - DLF PFromenade, Delhi</h6>
     <h5>{obj.code}</h5>
     <h5>{obj.size}</h5>
     <div className="d-flex flex-row bd-highlight">
         <h5>{obj.iLLUMINATION}</h5>
         <img className="img-fluid viewMe rounded ms-auto text-white-50" src="../../images/view.png"
             style={{ height: "20px", width: "20px" }} />
         <h6 className="viewText ml-auto text-white-50">View Details</h6>
     </div>
     <div className="d-flex flex-row bd-highlight">
         <div className="rupees">
             <img className="img-fluid rupes border-warning rounded mh-100 bg-dark text-warning"
                 src="../../images/rupee.png" style={{ height: "30px", width: "30px" }} />
         </div>
         <div className="listCahnge">
             <img className="img-fluid cart" src="../../images/cart.png" onClick={(e) => addonCart(obj)} style={{ height: "30px", width: "30px" }} />
         </div>
         <button onClick={() => removefroCart(obj)}>Remove From Cart</button>
         <h6 className="loginPriceText ms-auto text-white-50">Login to see Price</h6>
     </div>
 </div>
</div>
                                   ))}
                                   
                                </div></div>
                               
                            </div>
                        </> : <>
                            <div className="row">                       
                            <div className="col-sm-12 col-12">
                                    <div className="p-sm-2 bd-highlight bg-dark m-sm-1 mt-sm-2 mt-2 m-1 p-2 rounded">
                                        <div className="row">
                                            <div className='col-4 col-sm-4'>
                                                <img className="img-fluid rounded" src="./images/media.jpg" style={{ height: "250px", width: "auto" }} alt="" />
                                            </div>
                                            <div className="col ">
                                                <h4 className="pt-2 text-white text-nowrap h5">Facade - DLF Promenade, Delhi</h4>
                                                <h5 className='pt-2 text-white'>Code : GOH00M61</h5>
                                                <h5 className='pt-2 text-white'>Size : 30 * 20 feet</h5>
                                                <h5 className='pt-2 text-white'>ILLUMINATION</h5>
                                            </div>
                                            <div className='col align-self-end'>
                                                <div className='d-flex flex-column mapIcon modal-footer me-lg-4'>
                                                    <GrMapLocation className='col btn-close-white align-self-end me-3' style={{ height: "35px", width: "35px" }} />
                                                    <h6 className='ms-auto text-white'>See On Map</h6>
                                                </div>

                                                <div className="d-flex flex-row bd-highlight me-4 me-sm-4 mt-2">
                                                    <img className="img-fluid viewMe rounded ms-auto text-white-50 " src="./images/view.png"
                                                        style={{ height: "40px", width: "40px" }} />
                                                    <h5 className="viewText ml-auto text-white-50">View Details</h5>
                                                </div>
                                                <h6 className="text-white ms-5">Login to see Price</h6>
                                                <div className="bd-highlight d-flex flex-row m-2 mx-5">

                                                    <div className="rupees d-flex flex-row">
                                                        <img className="border-warning img-fluid mh-100 ms-3 modal-dialog rounded rupes text-warning"
                                                            src="./images/rupee.png" style={{ height: "30px", width: "30px" }} />
                                                        <h6 className='text-white text-center m-1 ms-3'>Price</h6>
                                                    </div>

                                                    <div className="listCahnge d-flex flex-row modal-footer">
                                                        <img className="img-fluid cart modal-dialog " src="./images/cart.png" style={{ height: "30px", width: "30px" }} />
                                                        <h6 className='text-white text-center m-1  text-nowrap text-white' >Add To cart</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                            </div></>}
                    </div>
                    <div className="row m-3">
                        <button class="btn text-centerb view border-warning bg-secondary text-warning w-25  ms-auto">View More </button>
                        <button class="btn text-center back  border-light ms-3 bg-secondary text-light w-25">Back to Top ^</button>
                    </div>
                </div>
            </div>
        </div>
  </>
  )
}

export default ServicesData
