import React from "react";
import "./medialogo.scss";
import { MdLocationOn} from "react-icons/md";
import {TfiLayoutMediaCenterAlt} from "react-icons/tfi"

const Medialogo = ({ posts, category_name }) => {
  return (
    <div className="container-fluid px-5 ">
  
        <div className="digit-media-brand rounded-5 pb-2 mt-5 row text-light animate__animated animate__zoomIn ">
          <div className="col-4 ">
            <img
              src="../../images/media.jpg"
              alt="About media"
              className="w-100 h-auto mt-5  ms-3  m rounded-3"
            />
          </div>
          <div className="col-2 mt-4  viewabout-main mb-4  ">
            <div className="col viewabout ms-3 mt-5 pt-3">
              <div className="locationIcon rounded-3 text-center">
                <MdLocationOn className="media-location-logo mt-2"/>
              </div>
              <div className="me-3 ms-3 mt-5 mb-1 ">
                <h6 className="">{(posts.length + posts.length) * 12}</h6>
                <h6 className="">No of Location</h6>
              </div>
            </div>
            <div className="col viewabout ms-3">
              <div className="col iconback rounded-3   text-center">
               <TfiLayoutMediaCenterAlt className="media-hording-logo mt-2 "/>
              </div>
              <div className="me-3 ms-3 mt-4 mb-1">
                <h6 className="">{posts.length}</h6>
                <h6 className="">No of Media</h6>
              </div>
            </div>
          </div>
          <div className="col aboutMedia">
            <h1 className="ms-2 mt-3 ">{category_name.toUpperCase()}</h1>
            <p className="ps-2 pe-2 pb-2 mt-3 ">
              {" "}
              Mall Media is an ideal opportunity to attract consumers in a
              targeted retail environment. Mall media talks directly to the
              consumer with limited media wastage. It creates a dominating and
              influential presence targeting commuters and shopping decision
              makers alike.{" "}
            </p>
            <p className="ps-2 pe-2 pb-2 ">
              {" "}
              Perfect opportunity to catch shoppers when they have their credit
              cards or mobile phones in their hands. Allows retailers and retail
              products to reach out to this mass audience in the common areas
              and drive them to their stores from all points of the mall to
              maximise their share of the available purchasing spend.
            </p>
            <p className="ps-2 pe-2 pb-2 ">
              {" "}
              Allows you to connect with potential clients beyond the point of
              purchase delivering for marketers who are not linked to mall
              sales. Research shows that 80% of responders say that mall
              advertising.
               Visibility of your brand while consumers are making
              their shopping decision increases to shop on your brand.
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
