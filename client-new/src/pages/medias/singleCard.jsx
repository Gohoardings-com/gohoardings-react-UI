import React from 'react'
import './media.scss';
import {Link, useNavigate, useHref} from 'react-router-dom';


const SingleCard = ({MdOutlineShoppingCart, posts}) => {
  console.log(posts);
  return (
    <div className='row rounded-2 bg-light mt-3 singlecartback'>
    <div className='col-12 col-sm-12 backgroundAreaCol'>
     {!posts ? <>
     <h1>Loading.... Please Wait</h1>
     </>:<>
     <div className='row  backgroundArea'>
     {posts.map((item,i) =>(
         <>
          <Link to={`/details/${item.code}/${item.category_name}`} className="text-decoration-none p-1 m-0 container">
          <div className='col-4 col-sm-4 p-2'>
               <img src={`https://${(item.mediaownercompanyname.trim().split(' ').slice(0,2).join('_')).toLowerCase()}.odoads.com/media/${(item.mediaownercompanyname.trim().split(' ').slice(0,2).join('_')).toLowerCase()}/media/images/new${item.thumb}`} alt='About media' className='w-100 h-auto rounded-3' />
           </div>
           <div className='col-8 col-sm-8 pt-2'>
               <a className='h4 text-decoration-none text-black'>{item.page_title}</a>
               <div className='row'>
                   <div className='col-9 singleMediaData'>
                       <h6 className='fw-bold display overflow-wrap mt-3'>Code : {item.code}</h6>
                       <h6 className='fw-bold overflow-wrap'>Size : {item.size}</h6>
                       <h6 className='fw-bold overflow-wrap'>Illumation : {item.illumation}</h6>
                       <h6 className='fw-bold overflow-wrap'>Price: Login to see Price</h6>
                       <button className='rounded-3 mt-3 mb-2 p-2 ourServices border-0'>See Details</button>
                   </div>
                   <div className='col-3'>
                       <div className='SinglerupeesDiv rounded-3 mt-5'>
                           <img src='./images/location.svg' className='img-fluid ps-5' />
                           <h6 className='text-black fw-bold text-nowrap text-center'>See at Map</h6>
                           <div className='SingleCartDiv border mt-4 ourServices rounded-3'>
                              <MdOutlineShoppingCart className='cartlogo ms-3 mt-1'/> 
                               <h6 className='text-black fw-bold  text-nowrap text-end me-3 mb-1 '>Add to Cart</h6>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
          </Link>
         </>
     ))}
     </div>
     </>}
    
   </div>
</div>
  )
}

export default SingleCard
