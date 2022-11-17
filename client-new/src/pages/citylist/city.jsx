import React from 'react';
import './citylist.scss';
import { Link } from "react-router-dom";

const City = () => {

  return (
<div className='citylist p-0 m-0'>
<div className='underline'>
<h1 className='text-center text-nowrap text-dark fw-bold'>Explore your City Listings</h1>
<hr className='d-inline-block'/>
</div>
<h6 className='text-muted text-center'>Explore some of the best business from around the world from our partners and friends.</h6>
<div className='container-fluid'>
<div className='row p-5'>
<div className='col-lg-6 col-md-12'>
<Link to={`/media/traditional-ooh-media/delhi`} >
  <img src="./gohoarding/home.jpg" className='onHover rounded h-auto m-md-1 w-100 firtCol' alt="..."/>
</Link>
</div>
<div className='col-lg-3  col-md-12'>
<Link to={`/media/traditional-ooh-media/bengaluru`} >
  <img src="./gohoarding/home2.jpg"  className='onHover rounded m-md-1 w-100 ' alt="..."/>
  </Link>
<Link to={`/media/traditional-ooh-media/chennai`} >
  <img src="./gohoarding/home4.jpg"  className='onHover rounded m-md-1  w-100  pt-3' alt="..."/>
  </Link>
</div>
<div className='col-lg-3  col-md-12'>
<Link to={`/media/traditional-ooh-media/hyderabad`} >

 <img src="./gohoarding/home3.jpg" className='onHover rounded m-md-1 w-100  ' alt="..."/>
 </Link>

<Link to={`/media/traditional-ooh-media/mumbai`} >

 <img src="./gohoarding/home1.jpg" className='onHover rounded m-md-1 w-100   pt-3' alt="..."/>
 </Link>

</div>
</div>
</div>
</div>
   
  )
}

export default City
