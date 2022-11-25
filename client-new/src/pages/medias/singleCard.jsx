import React, { useEffect } from 'react'
import './media.scss';
import { MdOutlineRemoveShoppingCart, MdOutlineShoppingCart } from 'react-icons/md'
import { GrMapLocation } from 'react-icons/gr';
import { Link, useNavigate, useHref } from 'react-router-dom';

const SingleCard = ({ slice, addonCart, removefroCart, priceState, locatetologin }) => {
  return (
    <div className='row rounded-2 bg-light mt-3 singlecartback'>
      <div className='col-12 col-sm-12 backgroundAreaCol'>
        {!slice ? <>
          <h1>Loading.... Please Wait</h1>
        </> : <>
          <div className='row  backgroundArea'>
            {slice.map((item, i) => (
              <>
                <div className='col-4 col-sm-4 p-2'>
                  <Link to={`/details/${item.code}/${item.category_name}`} className="text-decoration-none p-1 m-0">
                    <img src={item.thumb.startsWith("https") ? item.thumb :`https://${(item.mediaownercompanyname.trim().split(' ').slice(0, 2).join('_')).toLowerCase()}.odoads.com/media/${(item.mediaownercompanyname.trim().split(' ').slice(0, 2).join('_')).toLowerCase()}/media/images/new${item.thumb}`} alt='About media' className='w-100 h-auto rounded-3' />
                  </Link>
                </div>
                <div className='col-8 col-sm-8 pt-2'>
                  <a className='h4 text-decoration-none text-black'>{item.page_title}</a>
                  <div className='row'>
                    <div className='col-9 singleMediaData'>
                      <h6 className='fw-bold display overflow-wrap mt-3'>Code : {item.code}</h6>
                      <h6 className='fw-bold overflow-wrap'>Size : {item.size}</h6>
                      <h6 className='fw-bold overflow-wrap'>illumination : {item.illumination}</h6>
                      <h6 className='fw-bold overflow-wrap'>Price: {!priceState ? <a onClick={locatetologin} className='text-decoration-none'>Please Login first</a> : item.price}</h6>
                      <button className='rounded-3 mt-3 mb-2 p-2 ourServices border-0'>See Details</button>
                    </div>
                    <div className='col-3'>
                      <div className='SinglerupeesDiv rounded-3 mt-5'>
                        {/* <img src='./images/location.svg'  /> */}
                        <GrMapLocation className='img-fluid addonCart ms-5' />
                        <h6 className='text-black fw-bold text-nowrap text-center'>See at Map</h6>
                        <div className='SingleCartDiv border mt-4 ourServices rounded-3 '>
                          {item.userid == null || item.isDelete == null || item.userid != null && item.isDelete == 1 ?
                            <MdOutlineShoppingCart onClick={() => addonCart(item)} className='cartlogo mt-1 ms-2' /> : <> <MdOutlineRemoveShoppingCart onClick={() => removefroCart(item)} className='cartlogo mt-1 ms-1' /></>}
                          <h6 className='text-dark fw-bold  text-nowrap text-end me-2 mb-1' >Add to Cart</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>}
      </div>
    </div>
  )
}

export default SingleCard
