import React from "react";
import "./medialogo.scss";
import { MdLocationOn} from "react-icons/md";
import {TfiLayoutMediaCenterAlt} from "react-icons/tfi"

const Medialogo = ({ posts, category_name }) => {
  return (
    <div className="container  ">
  
        <div className="digit-media-brand rounded-3 pb-2 mt-5 row text-light animate__animated animate__zoomIn ">
          <div className="col-4 mb-xxl-auto p-2">
            <img
              src="../../images/media.jpg"
              alt="About media"
              className="w-75  mt-2  ms-2 rounded-3"
            />
          </div>
          <div className="col-2  viewabout-main pt-4  ">
            <div className="col viewabout ms-3 mt-4 mb-3">
              <div className="locationIcon rounded-3 text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/753/753880.png" className="media-location-logo mt-2"/>
              </div>
              <div className=" ms-3 ">
                <p className=" mb-0 ">{(posts.length + posts.length) * 12}</p>
                <p className="About-media-detail">No of Location</p>
              </div>
            </div>
            <div className="col viewabout ms-3">
              <div className="col iconback rounded-3   text-center">
               <img src="https://cdn-icons-png.flaticon.com/512/5053/5053559.png" className="media-hording-logo mt-2 "/>
              </div>
              <div className=" ms-3 ">
                <p className="mb-0">{posts.length}</p>
                <p className="About-media-detail">No of Media</p>
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
              makers alike.{" "}
              </p>
              <p className=" p-1 mt-1 About-media-detail">
              Perfect opportunity to catch shoppers when they have their credit
              cards or mobile phones in their hands. Allows retailers and retail
              products to reach out to this mass audience in the common areas
              and drive them to their stores from all points of the mall to
              maximise their share of the available purchasing spend.
            </p>
          </div>
          {/* <div className='row  p-2 rounded-bottom media-brand-tags'>
        <div className='col-3 vl  bottomfooter'>
            <h4 className="mt-3 text-center text-light">Features and Specification</h4>
        </div>
        <div className='col-3 vl  bottomfooter'>
            <h4 className="mt-2 text-center text-light">Exposed 27/7 to the target customer</h4>
        </div>
        <div className='col-3 vl bottomfooter'>
            <h4 className="mt-3 text-center text-light">Big, bold and Colourful</h4>
        </div>
        <div className='col-3 bottomfooter'>
            <h4 className="text-center text-light">Can not be turend off, thrown away, or clicked away</h4>
        </div>
    </div> */}
    
        
      </div>

    </div>
  );
};

export default Medialogo;
