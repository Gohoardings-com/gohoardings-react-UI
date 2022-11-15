import React from 'react'
import './ourservices.scss'
const Ourservices = () => {
  return (  
<div className='ourServices pb-5'>
<h2 className='text-center display-4 pe-5 ps-5 pt-5 text-nowrap text-dark fw-bold'>Our Services</h2>
<p className='text-center' >Choose from below to deliver advertisements in a truly exciting, innovative and creative way.</p>
<div className="row row-cols-md-2 row-cols-sm-1 row-cols-1 row-cols-lg-3 row-cols-xl-3 ms-sm-5 me-sm-5 ps-sm-5 pe-sm-5 g-sm-4 ms-md-5 me-md-5 ps-md-5 pe-md-5 g-md-4 ms-2 me-2 ps-2 pe-2 g-1">
  
  <div className="col-12 col-sm-12 pt-2">
<div className='medias'>
<img src='./gohoarding/15.jpg' className="card-img-top rounded-top" alt="Tradition Ooh Media"/> 
  </div>     
      <div className="d-flex flex-row bg-light justify-content-around p-2 rounded-bottom">
        <h6 className="text-dark  fw-bold">Tradition Ooh</h6>
      </div>
  </div>

  <div className="col-12 col-sm-12 pt-2 ">
<div className='medias '>
<img src="./gohoarding/traditional.jpg" className="card-img-top rounded-top" alt="..."/>

</div>
      <div className="d-flex flex-row  bg-light justify-content-around p-2 rounded-bottom">
        <h6 className="text-dark  fw-bold">Mall Media</h6>
      </div>
  </div>

  <div className="col-12 col-sm-12 pt-2 ">
<div className='medias'>
<img src="./gohoarding/9.jpg" className="card-img-top rounded-top" alt="..."/> 
</div>
      <div className="d-flex flex-row  bg-light justify-content-around p-2 rounded-bottom">
        <h6 className="text-dark  fw-bold"> Digital OOH Media</h6>

      </div>
  </div>
  <div className="col-12 col-sm-12 pt-2 ">
    <div className='medias'>
    <img src="./gohoarding/2.jpeg" className="card-img-top rounded-top" alt="..."/>
    </div>
      <div className="d-flex flex-row bg-light justify-content-around p-2 rounded-bottom">
        <h6 className="text-dark  fw-bold">Airport Branding</h6>
   
      </div>
  </div>
  <div className="col-12 col-sm-12 pt-2 ">
    <div className='medias'>
    <img src="./gohoarding/2.jpeg" className="card-img-top rounded-top" alt="..."/>
      
    </div>
      <div className="d-flex flex-row  bg-light justify-content-around p-2 rounded-bottom">
        <h6 className="text-dark   fw-bold">Office Branding</h6>
      
      </div>
     
  </div>
  <div className="col-12 col-sm-12 pt-2">

<div className='medias'>
<img src="./gohoarding/6.jpeg" className="card-img-top rounded-top" alt="..."/>

</div>
        <div className="d-flex flex-row bg-light justify-content-around p-2 rounded-bottom">
        <h6 className="text-dark  open-sans fw-bold">Transit Media</h6>
    
      </div>
  </div>
</div>
</div>    
  )
}

export default Ourservices
