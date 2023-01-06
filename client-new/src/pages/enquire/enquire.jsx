import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./enquire.scss";
import clientslogo from "../about-us/clients";
import EnquireRegister from "./enquireRegister";

const Enquire = () => {
  {
    var settings = {

      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 3,
      autoplay: true,
      speed: 4700,

      autoplaySpeed: 4700,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 0,
          },
        },
      ],
    };
  }
  return (
    <>
     <section className="our-clients-content my-4 " >
       
       <Slider {...settings}>
         {clientslogo.map((clients, i) => (
           <div class="container pt-3 ">
             <div class="row  ">
               <div class="col p-3 ">
             
                 {/* <div className="trending-card-img  rounded-2" > */}
                   <img
                     src={clients.img}
                     alt={clients.alt}
                     key={i}
                     className=" rounded-2  trending-cardd "
                   />
                 {/* </div> */}
           
               </div>
             </div>
           </div>
         ))}
       </Slider>

   </section>
      <div className="container-xxl  container-xl container-lg container-md  enquire-content py-5 my-3 px-5 ">
       

        <div className="row p-2 enquire-description-row">
          <div className="col-3 col-md-4  p-4 p-md-3  enquire-description ">
            <h3 className=" enquire-qsns-cant  ">
              What can Gohoardings
              <br /> help you with?
            </h3>
            <p className="hor-border py-2"> </p>

            <div className="row ">
              <h6 className="enquire-qsns-cant-qsn  mb-1">
                Have a requirement ?
              </h6>
              <p className=" enquire-ans-cant">
                Tell us your requirements and we will reach you with the
                brainstormed, creative and most effective solutions instantly.
              </p>
            </div>
            <div className="row py-1">
              <h6 className="enquire-qsns-cant-qsn mb-1">Have a query ?</h6>
              <p className=" enquire-ans-cant">
                Feel free to write to us. Our reps are right there to answer
                them all.
              </p>
            </div>
            <div className="row py-1">
              <h6 className="enquire-qsns-cant-qsn">Have a suggestion?</h6>
              <p className=" enquire-ans-cant">
                Your feedback and suggestions are always welcome. We are
                constantly striving to be better than what we were yesterday.
              </p>
            </div>
          </div>
          <div className="col-9 col-md-8 p-3 p-md-3 ps-5 pt-2">
            <EnquireRegister />
          </div>
        </div>
      </div>
    </>
  );
};

export default Enquire;
