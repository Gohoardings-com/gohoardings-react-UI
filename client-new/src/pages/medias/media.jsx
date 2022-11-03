import React,{ useState } from 'react'
import './media.scss'
import { MdLocationOn, MdChecklist } from 'react-icons/md'
import { MdOutlineShoppingCart } from 'react-icons/md'


const Media = () => {
    const [show,setShow] = useState(false)
    return (
        <>
            <div className='container-fluid pt-3  mediabackground'>
                <div className='container-fluid bg-dark rounded-3 '>
                    <div className='row'>
                        <div className='col-12 rounded-5 m-3'>
                            <h1 className="text-left text-light">Traditional OOH</h1>
                        </div>
                    </div>
                    <div className='pe-1 ps-1'>
                        <div className='bg-light rounded-5 rounded-bottom row'>
                            <div className='col-4 '>
                                <img src='./images/media.jpg' alt='About media' className='w-100 h-auto mt-4 mb-4 ms-2 rounded-3' />
                            </div>
                            <div className='col-2 vl mt-3 mb-3'>
                                <div className='col viewabout rounded-3 pt-5' >
                                    <div className='bg-secondary locationIcon rounded-3'>
                                        <img src='./images/location.svg' />
                                    </div>
                                    <div className='me-3 ms-3 mt-5 mb-1 '>
                                        <h6 className="text-dark">7399</h6>
                                        <h6 className="text-dark">No of Location</h6>
                                    </div>
                                </div>
                                <div className='col viewabout rounded-3'>
                                    <div className='col iconback rounded-3 bg-secondary '>
                                        <svg className='text-center' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-collection" viewBox="0 0 16 16">
                                            <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
                                        </svg>

                                    </div>
                                    <div className='me-3 ms-3 mt-4 mb-1'>
                                        <h6 className="text-dark">7399</h6>
                                        <h6 className="text-dark">No of Location</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='col aboutMedia'><h1 className="ms-2 mt-3 text-dark">Traditional Ooh</h1>
                                <h6 className='ps-2 pe-2 pb-2 text-dark'> Mall Media is an ideal opportunity to attract consumers in a targeted retail environment.
                                    Mall media talks directly to the consumer with limited media wastage.
                                    It creates a dominating and influential presence targeting commuters and shopping decision makers alike. </h6>
                                <h6 className='ps-2 pe-2 pb-2 text-dark'> Perfect opportunity to catch shoppers when they have their credit cards or mobile phones in their hands.
                                    Allows retailers and retail products to reach out to this mass audience in the common areas and drive them to their stores from all points of the mall to maximise their share of the available purchasing spend.</h6><h6 className='ps-2 pe-2 pb-2 text-dark'> Allows you to connect with potential clients beyond the point of purchase  delivering for marketers who are not linked to mall sales. Research shows that 80% of responders say that mall advertising is likely to remind them about products or services they might buy either while in the mall or later.
                                        Features and Specification Ideal opportunity to attract consumers in retail environment. Visibility of your brand while consumers are making their shopping decision increases to shop on your brand.</h6>
                            </div>
                        </div>
                    </div>
                    <div className='row bg-secondary p-2 rounded-bottom'>
                        <div className='col-3 vl  bottomfooter'>
                            <h4 className="mt-3 text-center text-light">Features and Specification</h4>
                        </div>
                        <div className='col-3 vl  bottomfooter'>
                            <h4 className="mt-2 text-center text-light">Exposed 27/7 to the target customer</h4>
                        </div>
                        <div className='col-3 vl bottomfooter'>
                            <h4 className="mt-3 text-center text-light">Big, bold and Colourful</h4>
                        </div>
                        <div className='col-3 bottomfooter'>
                            <h4 className="text-center text-light">Can not be turend off, thrown away, or clicked away</h4>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 rounded ">
                    <div className="col-sm-2 col-12">
                        <div className="col pt-4" >
                            <div className='mediaName me-1 rounded-top ms-1 mt-5 me-1 p-2'>
                                <h6 className="text-uppercase text-center">select media type(5)</h6>
                            </div>
                            <div className='bg-light rounded-bottom rounded-1'>
                                <input type="text" placeholder="Search.." className='initialism m-2 p-2 rounded-3' />
                                <div className="rowCheck row  m-1 p-1">
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
                                </div>
                            </div>
                        </div>
                        <div className="col pt-4" >
                            <div className='mediaName me-1 rounded-top ms-1 mt-1 p-2'>
                                <h6 className="text-uppercase text-center">Sub category(5)</h6>
                            </div>
                            <div className="rowCheck bg-light row rounded-bottom me-1 ms-1 mb-1 p-1">
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
                            </div>
                        </div>
                        <div className="col pt-4" >
                            <div className=' mediaName mt-1 ms-1 me-1 p-2 rounded-top'>
                                <h6 className="text-uppercase text-center">Illumination(5)</h6>
                            </div>

                            <div className="rowCheck bg-light row rounded-bottom mb-1 ms-1 me-1 p-1">
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
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-10 rounded">
                        <div className='row mediaName rounded-top'>
                            <div className='col-sm-10 col-9'>
                                <h3 className='mt-2'>Media Name</h3>
                            </div>
                            <div className='col-1'>
                                <MdLocationOn className='h-75 w-auto mt-1' />
                            </div>
                            <div className='col-1'>
                                <MdChecklist onClick={(e) =>setShow(!show)} className='h-75 w-auto mt-1' />
                            </div>
                        </div>
                        <div className='overflow h-auto backgroundArea rounded'>
                            <div className='container-fluid pt-2'>
                                <div className='row row-cols-md-2 row-cols-sm-1 row-cols-3 row-cols-lg-3 row-cols-xl-3 p-0'>
                                  {!show ?<>
                                    <div className='col w-100'>
                                       <h1>Hello</h1>
                                    </div>
                                  </>:<>  <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        <div className='mainImage p-1'>
                                            <img src='./images/media.jpg' alt='About media ' className='rounded-top ' />
                                            <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                                                <h5 className='fw-bold overflow-wrap text-dark'>Fascade - DLF Promenada, Delhi</h5>
                                               <div className='row'>
                                                    <div className='col'>
                                                    <h6 className='fw-bold overflow-wrap text-dark'>Code : GOH00M61</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Size : 30*20 feet</h6>
                                                <h6 className='fw-bold overflow-wrap text-dark'>Illumation</h6>
                                                    </div>
                                                    <div className='col  mt-5'>
                                                  <div className='row'>
                                                        <div className='col ms-3'>  <div className='rupeesDiv rounded-3'>
                                                    <img src='./images/rupee.png' className='img-fluid p-2'/>
                                                </div>
                                                </div>
                                                        <div className='col'><div className='CartDiv ms-3 rounded-3 '>
                                                <img src='./images/cart.png' className='img-fluid p-2'/>
                                                </div></div>
                                                  </div>
                                                    </div>
                                               </div>
                                               
                                              </div>
                                        </div>
                                    </div></>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Media
