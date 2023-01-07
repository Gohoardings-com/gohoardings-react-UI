import React from "react";
import "./citylist.scss";
import { Link } from "react-router-dom";

const City = () => {
  return (
    <div className="citylist m-0 mt-5 py-5 py-md-4">
      <section>
        <h1 className="text-center text-nowrap ">Explore your City Listings</h1>
        <h6 className=" text-center">
          Explore some of the best business from around the
          <br />
          world from our partners and friends.
        </h6>
      </section>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col col-md-4"> 
          <Link to={`/traditional-ooh-media/delhi`}>
            <div className="city-img-container ">
            <img
                src="./gohoarding/home.jpg"
                className="rounded iimmgg   "
                alt="..."
              />
              <div className="bottom-left">Delhi</div>
              <div className="bottom-left-media">1893 <span className="bottom-left-media-text" >medias  </span> </div>
            </div>
            </Link></div>
          <div className="col col-md-4"><Link to={`/traditional-ooh-media/mumbai`}>
             <div className="city-img-container ">
              <img
                src="./gohoarding/home1.jpg"
                className="rounded iimmgg "
                alt="..."
              />
                  <div className="bottom-left">Mumbai</div>
                  <div className="bottom-left-media">1316 <span className="bottom-left-media-text">medias  </span> </div>
            </div>
            </Link></div>
          <div className="col col-md-4"><Link to={`/traditional-ooh-media/bengaluru`}>
            <div className="city-img-container" >
              <img
                src="./gohoarding/home2.jpg"
                className="rounded iimmgg  "
                alt="..."
              />
                <div className="bottom-left">Bengalore</div>
                  <div className="bottom-left-media">660 <span className="bottom-left-media-text">medias  </span> </div>
            </div>
            </Link></div>
        </div>
      </div>

      <div className="container mt-4">
           <div className="row justify-content-md-center">
          <div className="col"><Link to={`/traditional-ooh-media/chennai`}>
             <div className="city-img-container">
              <img
                src="./gohoarding/home3.webp"
                className=" rounded   iimmgg"
                alt="..."
              />
                  <div className="bottom-left">Chennai</div>
                    <div className="bottom-left-media">282 <span className="bottom-left-media-text">medias  </span> </div>
            </div>
            </Link></div>
   
          <div className="col"><Link to={`/traditional-ooh-media/hyderabad`}>
             <div className="city-img-container ">
              <img
                src="./gohoarding/home4.jpg"
                className="rounded iimmgg "
                alt="..."
              />
                  <div className="bottom-left">Hyderabad</div>
                    <div className="bottom-left-media">497 <span className="bottom-left-media-text">medias  </span> </div>
            </div>
            </Link></div>
        </div>

      </div>
    </div>
  );
};

export default City;

