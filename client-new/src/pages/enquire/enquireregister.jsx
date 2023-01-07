import React, {useState} from 'react';
import {toast, ToastContainer} from "react-toastify";
import {MdOutlineError} from "react-icons/md";
import './enquire.scss';
import instance from '../../apis/axios';


const Enquireregister = () => {


    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameValidate, setNameValidate] = useState();
    const [numbervalidate, setNumbervalidate] = useState();
    const [emailValidate, setEmailValidate] = useState();
    const [messageValidate, setMessageValidate] = useState();

    const onSubmit = async (e) => {

        e.preventDefault();
        const emailformate = /^\w+([-]?\w+)*@\w+(.-]?\w+)*(\.\w{2,3})+$/;
        let count = 0;
        if (name === "") {
            count = +1;
            setNameValidate(<MdOutlineError className="text-danger" />);
        } else if (number.length <= 0) {
            count = +1;
            setNumbervalidate(<MdOutlineError className="text-danger" />);
        } else if (number.length !== 10) {
            count = +1;
            setNumbervalidate("Type your 10 digit number corectly");
        } else if (email === "") {
            count = +1;
            setEmailValidate(<MdOutlineError className="text-danger" />);
        } else if (!emailformate.test(email)) {
            count = +1;
            setEmailValidate("Type your email corectly");
        } else if (message === "") {
            count = +1;
            setMessageValidate(<MdOutlineError className="text-danger" />);
        } else if (count === 0) {
          await instance.post("enquiry/message", { name, email, number, message });
           
            notify();
            setName("");
            setNumber("");
            setEmail("");
            setMessage("");
            setNameValidate("");
            setNumbervalidate("");
            setEmailValidate("");
            setMessageValidate("");

        }
    };

    const notify = async () => {
        toast("Thanks, we will contact you soon!");
    };

    return (<>
    <h1 className="txt-clr-tlk">Talk to us!</h1>
            <h6 className="txt-clr" >*Please fill all the details.</h6>
            <form className='mt-4 "position-relative' onSubmit={onSubmit}>
  <div class="form-group py-3 ">
    <label for="formGroupExampleInput">Name*</label>
    <input type="text" class="form-control ps-0 rounded-0" id="formGroupExampleInput" placeholder="Your Full Name" value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}/>
                  <p className="ms-2 p-0 text ">{nameValidate}</p>
  </div>
  <div class="row py-3">
  <div class="col">
    <label for="Last-name">Email*</label>
      <input type="text" class="form-control ps-0 rounded-0" placeholder="Your Mail ID" id='first-name'   value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}/>
                  <p className="ms-2 p-0 text ">{emailValidate}</p>
    </div>
    <div class="col">
    <label for="Last-name">Phone Number*</label>
      <input type="text" class="form-control ps-0 rounded-0" placeholder="+1 012 3456 789" id='+1 012 3456 789'  value={number}
                onChange={(e) => {
                    setNumber(e.target.value);
                }}/>
                  <p className="ms-2 p-0 text ">{numbervalidate}</p>
    </div>
  </div>
  <div class="form-group py-3">
    <label for="formGroupExampleInput2">Message*</label>
    <input type="text" class="form-control ps-0 rounded-0" id="formGroupExampleInput2" placeholder="Write your message.."   value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                }}/>
           <p className="ms-2 p-0 text ">{messageValidate}</p>     
  </div>
 <div className=' p-0 m-0 position-relative '>
 <button type="submit" class="btn btn-lg  message-btn  float-end" role="button">Send Message</button>
 <ToastContainer/>
 </div>
 
</form>
    </>
     
    )
}

export default Enquireregister;
