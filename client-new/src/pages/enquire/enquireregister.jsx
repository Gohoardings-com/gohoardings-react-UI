import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { MdOutlineError } from "react-icons/md";
import "./enquire.scss";
import instance from "../../apis/axios";

const Enquireregister = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");



  const [error, setEror] = useState(false);
  const emailformate = /^\w+([-]?\w+)*@\w+(.-]?\w+)*(\.\w{2,3})+$/;

  let count = 0;
  const onSubmit = async (e) => {
    e.preventDefault();

    if (name === "") {
      setEror(true);
      count = +1;
    } else if (number.length !== 10) {
      count = +1;
      setEror(true);
    } else if (!emailformate.test(email)) {
      count = +1;
      setEror(true);
    } else if (message === "") {
      count = +1;
      setEror(true);
    } else if (count === 0) {
      await instance.post("enquiry/message", { name, email, number, message });
      setName("");
      setNumber("");
      setEmail("");
      setMessage("");

      setEror(false);
      toast("Thanks, we will contact you soon!");
    }
  };

  return (
    <>
      <h1 className="txt-clr-tlk">Talk to us!</h1>
      <h6 className="txt-clr">*Please fill all the details.</h6>
      <form className='mt-4 "position-relative' onSubmit={onSubmit}>
        <div className="form-group py-3 ">
          <label htmlFor="formGroupExampleInput">Name*</label>
          <input
            type="text"
            className="form-control ps-0 rounded-0"
            id="formGroupExampleInput"
            placeholder="Your Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
           {error==true && name === "" ? <small className="p-0 text-danger text-small ">Please enter your name</small>: <> </> }
        </div>
        <div className="row py-3">
          <div className="col">
            <label htmlFor="Last-name">Email*</label>
            <input
              type="text"
              className="form-control ps-0 rounded-0"
              placeholder="Your Mail ID"
              id="first-name"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
      <p className="error-msg"> {error==true && (!emailformate.test(email)) ?  <small className="p-0 p-0 text-danger text-small  ">Type your email corectly</small> :<> </> } </p>  
          </div>
          <div className="col">
            <label htmlFor="Last-name">Phone Number*</label>
            <input
              type="number"
              className="form-control ps-0 rounded-0"
              placeholder="+1 012 3456 789"
              id="+1 012 3456 789"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
              {error==true && number.length !== 10 ?  <small className="p-0 text-danger text-small  ">Type your 10 digit number corectly</small> :<> </> }
                     
          </div>
        </div>
        <div className="form-group py-3">
          <label htmlFor="formGroupExampleInput2">Message*</label>
          <input
            type="text"
            className="form-control ps-0 rounded-0"
            id="formGroupExampleInput2"
            placeholder="Write your message.."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
           {error==true && message === "" ?  <small className="p-0 text-danger text-small  p-0 ">Please enter your message for our team</small>  :<> </> }
        </div>
        <div className=" p-0 m-0 position-relative ">
          <button
            type="submit"
            className="btn btn-lg  message-btn  float-end"
            role="button"
          >
            Send Message
          </button>
          <ToastContainer />
        </div>
      </form>
    </>
  );
};

export default Enquireregister;
