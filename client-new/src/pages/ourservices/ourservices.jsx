import React from "react";
import "./ourservices.scss";
import { CityNameImage } from "../../apis/apis";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { Link } from "react-router-dom";

const Ourservices = () => {
  {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      pauseOnHover: true,
      responsive: [

        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
      ],
    };
  }
  
  return (
    <>
      <div className="container-xxl  container-xl container-lg container-md service-content pt-5 pb-5">
        <h1>Our Services</h1>
        <h6 className="pt-1">
          Choose from below to deliver advertisements in a truly <br />
          exciting, innovative and creative way.
        </h6>
        <div>
        <Slider {...settings}>
          {CityNameImage.map((pos,i) => (
             <div className="container pt-4 " key={i}>
            <div className="row bg-light rounded-2 service-card me-2 ms-2 " >
              <div className="col p-3"><img src={pos.srcImg} className="  rounded-2 service-card-img"/>
              </div>
              <div className="col p-3 ps-0 position-relative">
                <h6 className="position-absolute  ps-0 fw-bold">{pos.label}</h6>
                <Link
              to={`/${pos.value}/delhi`}
              className="text-decoration-none"
             ><p className="position-absolute bottom-0  pb-3  mb-0 text-muted w-100 View-Detail" > View Detail <HiOutlineArrowNarrowRight className="ms-3 ms-md-1 "/></p>
                </Link></div>
            </div>
            </div>
             ))}
        </Slider>
        </div>
        <section>
        <div className="container-fluid    m-0 ">
        <div className="row mx-auto add-container  text-center ">
          <div className="col-md-3">
          <img src="../../clientslogo/celebration.png" className="celebration-logo" />
          </div>
          <div className="col-md-6">
           <span>
            <h1>Get Your First Ad free!</h1>
            <h6 className="pt-1">
            Boost your business with a free advertisement!*
        </h6>
           </span>
          </div>
          <div className="col-md-3">
          <span
                 
                  className="button-serch text-white rounded-pill "
                >
                    <Link to="/traditional-ooh-media/delhi">
                  <button className="search-btn">
                    Get it Now
                    </button>
                  </Link>
                </span>
          </div>

        </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Ourservices;
