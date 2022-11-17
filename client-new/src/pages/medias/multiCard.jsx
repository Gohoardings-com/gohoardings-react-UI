import React from 'react'
import './media.scss';
import {Link} from 'react-router-dom';
import { MdOutlineRemoveShoppingCart, MdOutlineShoppingCart } from 'react-icons/md'

const MultiCard = ({posts,addonCart, removefroCart}) => {
  return (
    <div className='row row-cols-md-2 row-cols-sm-1 row-cols-3 row-cols-lg-3 row-cols-xl-3 p-0'>
         {!posts ? <>
     <h1>Loading.... Please Wait</h1>
     </>:<>
       {posts.map((item,i) =>(
         <div className='col-12 col-sm-12 '>
         <div className='mainImage p-1 hello'>
             <img src={`https://${(item.mediaownercompanyname.trim().split(' ').slice(0,2).join('_')).toLowerCase()}.odoads.com/media/${(item.mediaownercompanyname.trim().split(' ').slice(0,2).join('_')).toLowerCase()}/media/images/new${item.thumb}`} alt='About media ' className='rounded-top ' />
             <div className='mediadetails rounded-bottom p-2 mediacarddetails'>
                 <h5 className='fw-bold overflow-wrap'>{item.page_title}</h5>
                 <div className='row'>
                     <div className='col singleMediaData'>
                         <h6 className='fw-bold overflow-wrap'>Code : {item.code}</h6>
                         <h6 className='fw-bold overflow-wrap'>Size : {item.size}</h6>
                         <h6 className='fw-bold overflow-wrap'>Illumation :{item.illumation}</h6>
                     <div className='col'>
                         <div className='row mt-3'>
                             <div className='col-2 '>  <div className='rupeesDiv rounded-1 '>
                                  <span className='addonCart'>&#8377;</span>
                             </div>
                             </div>
                             <div className='col-2'><div className='rupeesDiv rounded-1' onClick={()=>addonCart(item)}>
                             {item.userid == null || item.isDelete == null || item.userid != null && item.isDelete == 1 ?
                                 <MdOutlineShoppingCart className='addonCart'/> :<> <MdOutlineRemoveShoppingCart className='addonCart'/></>}
                             </div></div>
                             <div className='col-8'>
                        
                                 <Link to={`/details/${item.code}/${item.category_name}`} className="text-decoration-none text-center">
                         <button className='rounded-2 btn bg-warning border-light w-100'>See Details</button>
                         </Link>
                             </div>
                            
                         </div>
                     </div>
                     
                     </div>
                 </div>

             </div>
         </div>
     </div>
       ))}
     </>}
    </div> 
  )
}

export default MultiCard
