import React from "react";
import "./enquire.scss";

import EnquireRegister from "./enquireRegister";

const Enquire = () => {
  return (
    <>
      <div className="container-xxl  container-xl container-lg container-md  enquire-content py-5 my-5 px-5 ">
        <div className="row p-2 enquire-description-row">
          <div className="col-3 col-md-4  p-4 p-md-3  enquire-description ">
            <h3 className=" enquire-qsns-cant  ">
              What can Gohoardings
              <br /> help you with?
            </h3>
            <p className="hor-border py-2"> </p>
          
              <div className="row ">
                  <h6 className="enquire-qsns-cant-qsn  mb-1">Have a requirement ?</h6>
                <p className=" enquire-ans-cant">
                  Tell us your requirements and we will reach you with the
                  brainstormed, creative and most effective solutions instantly.
                </p>
              </div>
              <div className="row py-2">
                  <h6 className="enquire-qsns-cant-qsn mb-1">Have a query ?</h6>
                <p className=" enquire-ans-cant">
                Feel free to write to us. Our reps are right there to answer
                  them all.
                </p>
              </div>
              <div className="row py-2">
                  <h6 className="enquire-qsns-cant-qsn">Have a suggestion?</h6>
                <p className=" enquire-ans-cant">
                Your feedback and suggestions are always welcome. We are
                  constantly striving to be better than what we were yesterday.
                </p>
              </div>
             
          </div>
          <div className="col-9 col-md-8 p-3 p-md-3 ps-5 pt-2">
            <EnquireRegister/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enquire;

{
  /* <div className="enquire container-xxl  container-xl container-lg container-md mt-5">
        <div className="row p-lg-5 p-md-0  p-0 ">
          <div className="col-lg-7 col-md-5 ">
            <h2 className="ps-lg-5 ps-md-2 enquire-qsns-cant">          
              What can Gohoardings help you with?
            </h2>
            <div className="d-flex flex-row p-xxl-0 m-lg-5 m-xxl-5 m-md-0 animate__animated animate__backInLeft ">
              {" "}
              <img
                src="./gohoarding/new-icon/n1.png"
                alt=""
                className=" suggestion-logo"
              />
            
              <div className="row ps-5 ">
                <div className="col">
                  <h6 className="enquire-qsns-cant">Have a requirement ?</h6>
                </div>
                <p className=" enquire-ans-cant">
                  Tell us your requirements and we will reach you with the
                  brainstormed, creative and most effective solutions instantly.
                </p>
              </div>
            </div>
            <div className="d-flex flex-row p-xxl-0 m-lg-5 m-xxl-5 m-md-0 animate__animated animate__backInLeft     animate__delay-1s	1s">
        
              <img src="./gohoarding/new-icon/n2.png" alt="" className=" suggestion-logo" />
              <div className="row ps-5">
                <div className="col">
                  <h6 className="enquire-qsns-cant">Have a query ?</h6>
                </div>
                <p className=" enquire-ans-cant">
                  Feel free to write to us. Our reps are right there to answer
                  them all.{" "}
                </p>
              </div>
            </div>
            <div className="d-flex flex-row p-xxl-0 m-lg-5 m-xxl-5 m-md-0 animate__animated animate__backInLeft animate__delay-2s	2s">
              {" "}
              <img
                src="./gohoarding/new-icon/n3.png"
                alt=""
                className=" suggestion-logo"
              />
              <div className="row ps-5 ">
                <div className="col">
                  <h6 className=" enquire-qsns-cant">Have a suggestion?</h6>
                </div>
                <p className=" enquire-ans-cant">
                  Your feedback and suggestions are always welcome. We are
                  constantly striving to be better than what we were yesterday.{" "}
                </p>
              </div>
            </div>
          </div>
          <EnquireRegister />
        </div>
     
      </div> */
}
