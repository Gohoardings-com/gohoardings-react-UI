import React from "react";
import "./enquire.scss";


import EnquireRegister from "./enquireRegister";

const Enquire = () => {
  return (
    <>
      <div className="enquire ps-lg-5 pe-lg-5 pt-lg-5 ps-md-2 pe-md-0 pt-md-0 t-text mt-5 ">
        <div className="row p-lg-5 p-md-0  p-0 ">
          <div className="col-lg-7 col-md-5 ">
            <h2 className="ps-lg-5 ps-md-2 enquire-qsns-cant">          
              What can Gohoardings help you with?
            </h2>
            <div className="d-flex flex-row p-xxl-0 m-lg-5 m-xxl-5 m-md-0 animate__animated animate__backInLeft ">
              {" "}
              <img
                src="./gohoarding/requirement.png"
                alt=""
                className="p-auto m-auto"
              />
              {/* animation start */}
              <div className="row ps-5 ">
                <div className="col">
                  <h6 className="enquire-qsns-cant">Have a requirement ?</h6>
                </div>
                <p className="text-muted enquire-ans-cant">
                  Tell us your requirements and we will reach you with the
                  brainstormed, creative and most effective solutions instantly.
                </p>
              </div>
            </div>
            <div className="d-flex flex-row p-xxl-0 m-lg-5 m-xxl-5 m-md-0 animate__animated animate__backInLeft     animate__delay-1s	1s">
        
              <img src="./gohoarding/query.png" alt="" className="m-auto" />
              <div className="row ps-5">
                <div className="col">
                  <h6 className="enquire-qsns-cant">Have a query ?</h6>
                </div>
                <p className="text-muted enquire-ans-cant">
                  Feel free to write to us. Our reps are right there to answer
                  them all.{" "}
                </p>
              </div>
            </div>
            <div className="d-flex flex-row p-xxl-0 m-lg-5 m-xxl-5 m-md-0 animate__animated animate__backInLeft animate__delay-2s	2s">
              {" "}
              <img
                src="./gohoarding/suggestion.png"
                alt=""
                className="m-auto"
              />
              <div className="row ps-5 ">
                <div className="col">
                  <h6 className=" enquire-qsns-cant">Have a suggestion?</h6>
                </div>
                <p className="text-muted enquire-ans-cant">
                  Your feedback and suggestions are always welcome. We are
                  constantly striving to be better than what we were yesterday.{" "}
                </p>
              </div>
            </div>
          </div>
          <EnquireRegister />
        </div>
     
      </div>
    </>
  );
};

export default Enquire;
