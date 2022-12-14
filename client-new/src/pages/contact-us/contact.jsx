import React, {useEffect, useState} from "react";
import "./contact.scss";
import instance from "../../apis/axios";
import Fixednavbar from "../../components/navbar/fixednavbar";
import {toast, ToastContainer} from "react-toastify";
import {MdEmail, MdLocationPin, MdOutlineError} from "react-icons/md";
import {ImMobile} from "react-icons/im";

const Contact = () => {


  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameValidate, setNameValidate] = useState();
  const [numbervalidate, setNumbervalidate] = useState();
  const [emailValidate, setEmailValidate] = useState();
  const [messageValidate, setMessageValidate] = useState();
  const [error,setEror] = useState(false);
  const emailformate = /^\w+([-]?\w+)*@\w+(.-]?\w+)*(\.\w{2,3})+$/;

  let count = 0;
  const onSubmit = async (e) => {
    e.preventDefault();
   
    if (name === "") {
  
      setEror(true);
      count= +1;
     
    }  else if (number.length !== 10) {
      count= +1;
      setEror(true);
    }else if (!emailformate.test(email)) {
      count= +1;
      setEror(true);

    } else if (message === "") {
      count= +1;
       setEror(true);

    } else if (count === 0) {
      await instance.post("enquiry/message", { name, email, number, message });
      setName("");
      setNumber("");
      setEmail("");
      setMessage("");
      setNameValidate("");
      setNumbervalidate("");
      setEmailValidate("");
      setMessageValidate("");
      setEror(false);
      notify();
    }
  
  };

  // function topFunction() {
  //   document.body.scrollTop = 0; // For Safari
  //   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  // }
  // useEffect(() => {
    
  //   topFunction();
  // }, []);

  const notify = () => {
    toast("Thanks, we will contact you soon!");
  };

  return (
    <>
 <Fixednavbar/>
      <section>
        <div className="container-xxl  container-xl container-lg container-md  mt-5">
          <div className="row pb-0 mt-3 rounded-5 main_content">
            <div className="col-md-6 ps-5">
              <div className="address">
                <div className="main mt-5  d-flex">
                  <h1 className="text-warning fw-bold pe-2 address-tag ">
                    Come
                  </h1>
                  <h1 className="text-secondary fw-bold address-tag">
                    {" "}
                    to see us!
                  </h1>
                </div>
                <div className="d-flex ">
                  <h5 className="address-details">
                    GOHOARDINGS Solutions LLP E-82,
                    <br />
                    3rd Floor,Sector 06 Noida,20130(U.P.)
                    <br />
                    <ImMobile className="m-0 p-0" />: +91 77778 71717
                    <br />
                    <MdEmail className="m-0 p-0" />: info@gohoardings.com
                  </h5>
                  <a href="#google_map">
                    <div className=" tooltips">
                      <MdLocationPin className="location_logo" />
                      <span className="tooltiptext">GO to the map</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="contact-form">
                <div className=" contact-tag">
                  <h2 className="text-center bg-danger text-light p-1 contact-tagchild">
                    CONTACT
                  </h2>
                </div>

                <form onSubmit={onSubmit} className="form-floating">
                  <div className="form-floating mb-4 mt-1 ">
                    <div className="input-box">

                      <input
                      placeholder="Enter your full name"
                        id="floatingInput"
                        type="text"
                        className="input-1 "
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                      {error==true && name === "" ? <p className="ms-3 p-0 text ">Please enter your name</p> : <> </> }
                      
                    </div>
                  </div>

                  <div className="mb-4 mt-2 ">
                    <div className="input-box">
        
                      <input
                        type="number"
                        className="input-1 "
                       placeholder=" Enter your contact number"
                        value={number}
                        onChange={(e) => {
                          setNumber(e.target.value);
                        }}
                      />
                      {error==true && number.length !== 10 ?  <p className="ms-2 p-0 text ">Type your 10 digit number corectly</p>  :<> </> }
                     
                    </div>
                  </div>
                  <div className="mb-4 mt-2">
                    <div className="input-box">
                    
                      <input
                        type="text"
                        className="input-1"
                    placeholder="Enter your email@gmail.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                        {error==true && (!emailformate.test(email)) ?  <p className="ms-2 p-0 text ">Type your email corectly</p>  :<> </> }
                    </div>
                  </div>
                  <div className="mb-2 mt-2">
                    <div className="input-box">
                    
                      <input
                        type="text"
                        className="input-1"
                     
                       placeholder=" Enter your message for our team"
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                      />
                      {error==true && message === "" ?  <p className="ms-2 p-0 text ">Please enter your message for our team</p>  :<> </> }
                    </div>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="rounded btn-lg mt-3 mb-2">
                      <h5 className="text-light  mt-2">SEND MESSAGE</h5>
                    </button>{" "}
                    <ToastContainer />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 p-0  d-flex justify-content-center">
              <img
                src="./images/contact-image.png"
                className="img-fluid rounded "
                id="contact-us-img"
                alt="contact.img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-xxl  container-xl container-lg container-md rounded-4">
        <div id="google_map" className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.203386323958!2d77.31864131492027!3d28.59367469258985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f0a89ce605%3A0xfd09bf1f744de96f!2sGohoardings!5e0!3m2!1sen!2sin!4v1667808584343!5m2!1sen!2sin"
            className="map_section"
            allowFullScreen={true}
            loading="lazy"
            title="google-map"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
