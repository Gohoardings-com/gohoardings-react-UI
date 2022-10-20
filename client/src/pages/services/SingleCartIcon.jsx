import React from 'react'
import { GrMapLocation } from 'react-icons/gr';
import { MdOutlineRemoveShoppingCart, MdOutlineShoppingCart } from 'react-icons/md'
const SingleCartIcon = ({ posts, addonCart, removefroCart }) => {
    console.log(posts);
    return (
        <>
            <div className="row">
                {!posts ? <>Loading...</> :
                    <>
                        {posts.map((obj) => (
                            <div className="col-sm-12 col-12">
                                <div className="p-sm-2 bd-highlight bg-dark m-sm-1 mt-sm-2 mt-2 m-1 p-2 rounded">
                                    <div className="row">
                                        <div className='col-4 col-sm-4'>
                                            <img className="img-fluid rounded" src="../../images/media.jpg" style={{ height: "250px", width: "auto" }} alt="" />
                                        </div>
                                        <div className="col table-responsive">
                                            <h4 className="pt-2 text-white text-nowrap overflow-hidden">{obj.areadescription}</h4>
                                            <h5 className='text-white overflow-hidden'>Code : {obj.code}</h5>
                                            <h5 className='text-white overflow-hidden'>Size : {obj.size}</h5>
                                            <h5 className='text-white overflow-hidden'>{obj.iLLUMINATION}</h5>
                                        </div>
                                        <div className='col align-self-end'>
                                            <div className='d-flex flex-column mapIcon modal-footer me-lg-4'>
                                                <GrMapLocation className='col btn-close-white align-self-end me-3' style={{ height: "35px", width: "35px" }} />
                                                <h6 className='ms-auto text-white'>See On Map</h6>
                                            </div>

                                            <div className="d-flex flex-row bd-highlight me-4 me-sm-4 mt-2">
                                                <img className="img-fluid viewMe rounded ms-auto text-white-50 " src="../../images/view.png"
                                                    style={{ height: "40px", width: "40px" }} />
                                                <h5 className="viewText ml-auto text-white-50">View Details</h5>
                                            </div>
                                            <h6 className="text-white ms-5">Login to see Price</h6>
                                            <div className="bd-highlight d-flex flex-row m-2 mx-5">

                                                <div className="rupees d-flex flex-row">
                                                    <img className="border-warning img-fluid mh-100 ms-3 modal-dialog rounded rupes text-warning"
                                                        src="../../images/rupee.png" style={{ height: "30px", width: "30px" }} />
                                                    <h6 className='text-white text-center m-1 ms-3'>Price</h6>
                                                </div>

                                                <div className="listCahnge d-flex flex-row modal-footer">
                                                    {obj.userid == null || obj.isDelete == null || obj.userid != null && obj.isDelete == 0 ?
                                                     <MdOutlineShoppingCart className='cart' onClick={() => addonCart(obj)} style={{ height: '30px', width: '30px', color: "white" }} /> : <MdOutlineRemoveShoppingCart className='cart' onClick={() => removefroCart(obj)} style={{ height: '30px', width: '30px', color: "white" }} />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </>
                }
            </div>
        </>
    )
}

export default SingleCartIcon
