import React from "react";
import "./medialogo.scss";
import {CityNameImage} from "../apis/apis";

const Medialogo = ({search, category_name, loading}) => {

  return (
      <div className="container  ">

        <div className="digit-media-brand rounded-3 pb-2  row text-light animate__animated animate__zoomIn ">
          <div className="col-4 mb-xxl-auto p-2">
            {CityNameImage.map((el, i) => {
              if (category_name === el.value || category_name === el.value2) {
             return (
              
              <div className="p-0 m-0" key={i}>
                 <img
               key={i}
              src={el.srcImg}
              alt={el.srcImg}
              className="About-media-img  mt-2  ms-2 rounded-1"
              id="About-media-img-d"
            />
              </div>
          
             )
            }
          })} 
          </div>
          <div className="col-2  viewabout-main pt-4 ps-0 ">
            <div className="col viewabout ms-3 mt-4 mb-3"    >
              <div className="locationIcon rounded-3 text-center">
                <img src="../../gohoarding/new-icon/point-map.png" className="media-location-logo mt-2"/>
              </div>
              <div className=" ms-3 mt-1">
                <p className=" mb-0 About-media-detail">{!loading && (Object.keys(search).length)}</p>
                <p className="About-media-detail">Location</p>
              </div>
            </div>
            <div className="col viewabout ms-3">
              <div className="col iconback rounded-3   text-center">
               <img src="../../gohoarding/new-icon/add-icon.png" className="media-hording-logo mt-2 "/>
              </div>
              <div className=" ms-3 mt-1">
                <p className="mb-0 About-media-detail">{!loading && (Object.keys(search).length)*3}</p>
                <p className="About-media-detail" > Media</p>
              </div>
            </div>
          </div>
          <div className="col aboutMedia ">
            <h5 className="ms-1 mt-3 aboutMedia-heading">{category_name.toUpperCase()}</h5>
            <p className=" p-1 pb-0 mt-2 About-media-detail">
              {" "}
              Media is an ideal opportunity to attract consumers in a
              targeted retail environment. Media talks directly to the
              consumer with limited media wastage. It creates a dominating and
              influential presence targeting commuters and shopping decision
              makers alike.Allows retailers and retail
              products to reach out to this mass audience in the common areas
              and drive them to their stores from all points of the mall to
              maximise their share of the available purchasing spend.
              </p>
          
          </div>
         
    
        
      </div>

    </div>
  );
};

export default Medialogo;
