import React ,{useState} from 'react'
import {FiLogIn} from "react-icons/fi";
const ForgetPass = ({setFocus}) => {
  const [sendOtp,setSendOtp]=useState(false);
  const [num,setNum]=useState(" ")
  
  const onForget = (e) => {
    setSendOtp(true)
    setNum(" ")
    e.preventDefault();
  };
console.log(num);



  return (
   <>
   <div className="modal-heading mt-3 text-center">
                    <h1 className="modal-title">
                      Did you forget your password ?
                    </h1>
                  </div>
                  { sendOtp ?  
                   <div className="forget-content ">
                    <form novalidate>
                      <div className=" animate__animated  animate__flipInX">
                     
                        <div className="input-box">
                          <label className="input-label">
                            Enter your OTP 
                          </label>
                          <input
                            type="text"
                            className="input-1"
                            onFocus={() => setFocus(true)}
                          
                            // value={email}
                            // onChange={(e) => {
                            //   setEmail(e.target.email);
                            // }}
                            required
                          />
                         {/* <h6 className=" p-0 text-success mt-2 text-center">{fnotify}</h6> */}
                        </div>
                      </div>
                      <button type="submit" className="signin">
                        <span>SUBMIT <FiLogIn/></span>
                
                      </button>
                
                    </form>
                  </div>

                  :  
                  <div className="forget-content animate__animated  animate__fadeIn">
                  <form onSubmit={onForget} novalidate>
                    <div className="">
                   
                      <div className="input-box">
                        <label className="input-label">
                          Enter your email or mobile no
                        </label>
                        <input
                          type="text"
                          className="input-1"
                          onFocus={() => setFocus(true)}
                        
                          value={num}
                          onChange={(e) => {
                            setNum(e.target.value);
                          }}
                          required
                        />
                       {/* <h6 className=" p-0 text-success mt-2 text-center">{fnotify}</h6> */}
                      </div>
                    </div>
                    <button type="submit" className="signin">
                      <span>SEND OTP <FiLogIn/></span>
              
                    </button>
              
                  </form>
                </div>
                
                  

                  }
                 
   </>
  )
}

export default ForgetPass