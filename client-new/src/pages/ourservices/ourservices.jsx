import React from 'react'
import './ourservices.scss'
import { useNavigate, Link } from "react-router-dom";

const Ourservices = () => {
  let ILLUMINATION = [
    {
      label: "Tradition Ooh",
      value: "traditional-ooh-media",
      srcImg: "./gohoarding/15.jpg"
    },
    {
      label: "Digital OOH Media",
      value: "digital-media",
      srcImg: "./gohoarding/9.jpg"
    },
    {
      label: "Mall Media",
      value: "mall-media",
      srcImg: "./gohoarding/traditional.jpg"
    },
    {
      label: "Airport Branding",
      value: "airport-media",
      srcImg: "./gohoarding/12.jpeg"
    },
    {
      label: "Office Branding",
      value: "office-media",
      srcImg: "./gohoarding/2.jpeg"
    },
    {
      label: "Transit Media",
      value: "transit-media",
      srcImg: "./gohoarding/6.jpeg"
    },

  ];

  return (
    <div className='ourServices pb-5'>
      <h2 className='text-center display-4 pe-5 ps-5 pt-5 text-nowrap text-dark fw-bold'>Our Services</h2>
      <p className='text-center' >Choose from below to deliver advertisements in a truly exciting, innovative and creative way.</p>
      <div className="row row-cols-md-2 row-cols-sm-1 row-cols-1 row-cols-lg-3 row-cols-xl-3 ms-sm-5 me-sm-5 ps-sm-5 pe-sm-5 g-sm-4 ms-md-5 me-md-5 ps-md-5 pe-md-5 g-md-4 ms-2 me-2 ps-2 pe-2 g-1">
        {ILLUMINATION.map((pos) => (
          <div className="col-12 col-sm-12 pt-2">
           
              <div className='medias text-decoration-none'>
              <Link to={`/${pos.value}/delhi`} className="text-dark  open-sans fw-bold text-decoration-none">
                <img src={pos.srcImg} className="card-img-top rounded-top" alt={pos.label} />
                <div className="d-flex flex-row bg-light justify-content-around p-2 rounded-bottom ">
                  <h6 className="text-dark  open-sans fw-bold "> {pos.label} </h6>
                </div>
                </Link>
              </div>
           
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ourservices
