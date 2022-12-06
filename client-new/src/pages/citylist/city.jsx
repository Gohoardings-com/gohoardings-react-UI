import React from "react";
import "./citylist.scss";
import { Link } from "react-router-dom";

const City = () => {
  return (
    <div className="citylist p-0 m-0 pt-5 ">
      <div className="">
        <h1 className="text-center text-nowrap text-light">
          Explore your City Listings
        </h1>
      </div>
      <h6 className=" text-light text-center">
        Explore some of the best business from around the world from our
        partners and friends.
      </h6>
      <div className="container  pt-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 ">
            <Link to={`/traditional-ooh-media/delhi`}>
            <div className="city-img-container p-0 m-0 ">
            <img
                src="./gohoarding/home.jpg"
                className="rounded    firtCol gate-img "
                alt="..."
              />
              <div class="bottom-left">Delhi</div>
              <div class="bottom-left-media">1893 medias</div>
            </div>
            </Link>
          </div>
          <div className="col-lg-3  col-md-6 ps-3 pe-0">
            <Link to={`/traditional-ooh-media/bengaluru`}>
            <div className="city-img-container p-0 m-0">
              <img
                src="./gohoarding/home2.jpg"
                className="rounded  ec-gate-img"
                alt="..."
              />
                <div class="bottom-left">Bengalore</div>
                  <div class="bottom-left-media">660 medias</div>
            </div>
            </Link>
            <Link to={`/traditional-ooh-media/chennai`}>
             <div className="city-img-container p-0 m-0">
              <img
                src="./gohoarding/home4.jpg"
                className="rounded  mt-3 ec-gate-img"
                alt="..."
              />
                  <div class="bottom-left">Hyderabad</div>
                    <div class="bottom-left-media">497 medias</div>
            </div>
            </Link>
          </div>
          <div className="col-lg-3  col-md-6 p-0 ps-3">
            <Link to={`/traditional-ooh-media/hyderabad`}>
             <div className="city-img-container p-0 m-0">
              <img
                src="./gohoarding/home3.webp"
                className=" rounded   ec-gate-img hover-overlay"
                alt="..."
              />
                  <div class="bottom-left">Chennai</div>
                    <div class="bottom-left-media">282 medias</div>
            </div>
            </Link>

            <Link to={`/traditional-ooh-media/mumbai`}>
             <div className="city-img-container p-0 m-0">
              <img
                src="./gohoarding/home1.jpg"
                className="rounded mt-3   ec-gate-img"
                alt="..."
              />
                  <div class="bottom-left">Mumbai</div>
                  <div class="bottom-left-media">1316 medias</div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
