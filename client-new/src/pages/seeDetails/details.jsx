import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import Header from "../../components/header/header";
import {RiUser3Fill} from 'react-icons/ri'
import {IoIosSettings,IoMdLocate} from 'react-icons/io'
import './details.scss'

const Details = () => {
  return (
   <>
<div className='detailsHeader d-flex flex-row justify-content-center w-100 p-0'>
<div className='icon-left-border ps-3 pe-3'>
   <RiUser3Fill className='mb-1 text-dark'/> <a className='heading-text text-dark' id='test' href="#media">About Media</a>

</div>
<div className='icon-left-border ps-3 pe-3 '>
<IoIosSettings className='mb-1 text-dark'/> <a className='heading-text text-dark' href="#highlights">Highlights</a>

</div>
<div className= "icon-left-border ps-3 pe-3">
<IoMdLocate className='mb-1 text-dark'/> <a className='heading-text text-dark' href="#location">Location</a>
</div>
    </div>
<div className='conatiner-fluid'>
    <div className='row mt-sm-5 pt-sm-5 ms-sm-5 ps-sm-5 me-sm-5 pe-sm-5'>
        <div className='col '>
        <div className='maindivbordermediadetails rounded-3 p-2'>
        <img src='./images/media.jpg' alt='About media' className='w-100 h-auto rounded-3 img-fluid ' />
        </div>
    
       {/* Map Section */}
       <div className='mt-3'>
            <div className='bg-primary p-2' id='location'>
            <h4 className='text-light'>Media Location</h4>
            </div>
            <h6 className='mt-3 text-muted'>Address  : <span className='text-dark'>AKSHARDHAM STATION, PANDAV NAGAR IN DELHI</span></h6>
            <map></map>
            </div>
        </div>
        <div className='col ms-5 me-5 maindivbordermediadetails p-2 mb-2 rounded-2' id='media'>
          <div>
          <h5 className='text-center pt-3 fw-bolder'>UNIPOLE - AKSHARDHAM STATION, PANDAV NAGAR IN DELHI</h5>
          <div className='row'>
          <div className='col pt-4'>
          <h6 className=' text-muted'>Code : GOH00T16001</h6>
           <h6>Price : <span className='text-primary'>Login to see price</span></h6>
          </div>
          <div className='col pt-4'>
          <img src='./images/location.svg' className='img-fluid ps-5 ms-5 text-primary' />
         <h6 className=' text-primary fw-bold text-nowrap text-center pe-3 pt-1' id='highlights'>See at Map</h6>
          </div>
          </div>
          <div className='mt-5 singlemediashow' >
            <div className='bg-primary p-2' >
            <h4 className='text-light'>Highlights</h4>
            </div>
            <div className='d-flex flex-row mt-4 pb-2 mediaAllDetails'>
                <h5 className='fw-bold'>Media Type</h5>
                <span className="ms-auto input-group-text bg-success mediatype">Unipole/Hoarding</span>
            </div>
            <div className='d-flex flex-row mt-4 pb-2 mediaAllDetails'>
                <h5 className='fw-bold'>Height X Width</h5>
                <span className="ms-auto input-group-text" >FTF</span>
            </div>
            <div className='d-flex flex-row mt-4 pb-2 mediaAllDetails'>
                <h5 className='fw-bold'>Illumination</h5>
                <span className="ms-auto input-group-text" ></span>
            </div>
            <div className='d-flex flex-row mt-4 pb-2 mediaAllDetails'>
                <h5 className='fw-bold'>FTF</h5>
                <span className="ms-auto input-group-text" ></span>
            </div>
            <div className='d-flex flex-row mt-4 pb-2 mediaAllDetails'>
                <h5 className='fw-bold'>Total Area</h5>
                <span className="ms-auto input-group-text" ></span>
            </div>
            <div className='d-flex flex-row mt-4 pb-2 mediaAllDetails'>
                <h5 className='fw-bold'>Additional information</h5>
            </div>
               <h5 className='pt-3'>The hoarding is placed in prime loaction. It is visible from all the crossing roads covering maximum views.</h5>
          </div>
          </div>
         
            {/* Foam for enquiry */}
            <div className='mt-5'>
        <h4 className='text-muted'>Get A Free <span className='text-dark'>Consulation</span></h4>
        <div className=''>
            <form>
                <input placeholder='Full Name' className='p-3 rounded-3 w-auto mb-2'/>
                <input placeholder='Mobile' className='p-3 rounded-3 w-auto ms-sm-4 ms-lg-0 ms-md-0 ms-xl-4 mb-2 '/>
                <input placeholder='Email Id' className='p-3 rounded-3 w-auto  mb-2'/>
                <input placeholder='City' className='p-3 rounded-3 w-auto ms-sm-4  ms-lg-0 ms-md-0 ms-xl-4 mb-2'/>
                <input placeholder='Write Review' className=' w-100 h-auto pt-3 pb-3 mt-2 rounded-3 mb-2'/>
                <input className='w-100 fw-bold  mt-3 detailsSumbitButton border-0 p-3 rounded-5' type="submit" value="Send request"/>
            </form>
        </div>
        </div>
        </div>
    </div>
</div>
   </>
  )
}

export default Details
