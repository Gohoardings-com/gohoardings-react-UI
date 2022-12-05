import React from "react";
import "./ourservices.scss";
import { useNavigate, Link } from "react-router-dom";

const Ourservices = () => {
  let ILLUMINATION = [
    {
      label: "Tradition Ooh",
      value: "traditional-ooh-media",
      srcImg: "./images/tradition.jpg",
    },
    {
      label: "Digital OOH Media",
      value: "digital-media",
      srcImg: "./images/digit.jpg",
    },
    {
      label: "Mall Media",
      value: "mall-media",
      srcImg: "./images/mall.jpg",
    },
    {
      label: "Airport Branding",
      value: "airport-media",
      srcImg: "./images/airport.jpg",
    },
    {
      label: "Office Branding",
      value: "office-media",
      srcImg: "./images/office.jpg",
    },
    {
      label: "Transit Media",
      value: "transit-media",
      srcImg: "./images/transit.jpg",
    },
  ];

  return (
    <div className="ourServices pb-5  py-3 px-5 ">
      <h1 className="text-center pe-5 ps-5 pt-5 text-nowrap text-light ">
        Services We Provide
      </h1>

      <h6 className="text-center text-light ">
        Choose from below to deliver advertisements in a truly exciting,
        innovative and creative way.
      </h6>
      <div className=" px-5 pt-4 ">
        <div className="row row-cols-md-2 row-cols-sm-1 row-cols-lg-3  ">
          {ILLUMINATION.map((pos) => (
            <div className="col-12 col-sm-12 mt-3">
              <div class="content ">
                {" "}
                <div
                  className=" service-img-card"
                >
                  <div class="content-overlay"></div>{" "}
                  <img
                    class="content-image service-img"
                    src={pos.srcImg}
                  />
                  <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">{pos.label} </h3>
                    <Link
                  to={`/${pos.value}/delhi`}
                  className="  text-decoration-none"
                >
                    <p class="content-text btn btn-outline-light view-all-btn">
                       View all
                    </p>
                    </Link>
                  </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
