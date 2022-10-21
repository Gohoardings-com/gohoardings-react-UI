// import React from 'react'
// import { MdOutlineRemoveShoppingCart, MdOutlineShoppingCart } from 'react-icons/md'

// const CartPattern = ({ posts, addonCart, removefroCart }) => {
//     // console.log(posts);
//     return (
//         <div className='col'>
//             {!posts ? <><h1>Loading...</h1></> :
//                 <>
//                     <div className='overflow text-center'>
//                         <div className='row'>
//                             {posts.map((obj) => (
//                                 <div className='col m-2'>
//                                     <div className='bg-dark text-center text-light rounded p-2'>
//                                         <img className='rounded' src='../../images/media.jpg' style={{ height: '190px', width: 'auto' }} alt='' />
//                                         <div className='data text-left'>
//                                             <h6 className='pt-2 overflow-hidden'>{obj.areadescription}</h6>
//                                             <h5 className='overflow-hidden'>Code : {obj.code}</h5>
//                                             <h5 className='overflow-hidden'>Size : {obj.size}</h5>
//                                             <div className='d-flex flex-row bd-highlight flex-wrap'>
//                                                 <h5>{obj.iLLUMINATION}</h5>
//                                                 <div className='viwDetail'>
//                                                     <img className='viewMe rounded ms-auto text-white-50' src='../../images/view.png'
//                                                         style={{ height: '20px', width: '20px' }} />
//                                                     <h6 className='viewText ms-auto text-white-50'>View Details</h6>
//                                                 </div>
//                                             </div>
//                                             <div className='d-flex flex-row bd-highlight'>
//                                                 <div className='rupees'>
//                                                     <img className='rupes border-warning rounded mh-100 bg-dark text-warning'
//                                                         src='../../images/rupee.png' style={{ height: '30px', width: '30px' }} />
//                                                 </div>
//                                                 <div className='listCahnge'>
//                                                     {obj.userid == null || obj.isDelete == null || obj.userid != null && obj.isDelete == 1 ?
//                                                         <MdOutlineShoppingCart onClick={() => addonCart(obj)} style={{ height: '20px', width: '20px' }} />
//                                                         : <MdOutlineRemoveShoppingCart onClick={() => removefroCart(obj)} style={{ height: '20px', width: '20px' }} />
//                                                     }
//                                                 </div>
//                                                 <h6 className='loginPriceText ms-auto text-white-50'>Login to see Price</h6>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                     </div>
//                 </>
//             }
//         </div>
//     )
// }

// export default CartPattern
