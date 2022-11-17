import React from 'react'
import './media.scss';

const MultiCard = ({posts}) => {
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
                 <h5 className='fw-bold overflow-wrap text-dark'>{item.page_title}</h5>
                 <div className='row'>
                     <div className='col'>
                         <h6 className='fw-bold text-nowrap text-dark'>Code : {item.code}</h6>
                         <h6 className='fw-bold overflow-wrap text-dark'>Size : {item.size}</h6>
                         <h6 className='fw-bold overflow-wrap text-dark'>Illumation :{item.illumation}</h6>
                         <button className='rounded-3 mt-3 seeDetails border-0'>See Details</button>
                     
                     </div>
                     <div className='col  mt-5'>
                         <div className='row mt-3'>
                             <div className='col'>  <div className='rupeesDiv rounded-3'>
                                 <img src='./images/rupee.png' className='img-fluid p-2' />
                             </div>
                             </div>
                             <div className='col'><div className='CartDiv rounded-3 '>
                                 <img src='./images/cart.png' className='img-fluid p-2' />
                             </div></div>
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
