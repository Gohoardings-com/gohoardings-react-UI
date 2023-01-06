import React,{useState} from 'react'
import {FiLogIn,FiArrowLeftCircle} from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";

const ForgetPass = ({setconfirmPasswords,sendOtp,setSendOtp,setOtp,email,otp,  toast, checkOTP,changePassword, setEmail, onForget, setFocus,   setPassword, setForget, setPass,
  pass}) => {

  const goBack=()=>{
    if(pass==true){
      setPass(false);
       setSendOtp(false);
    }
    if(sendOtp==true){
      setSendOtp(false);
       setPass(false);
    }
    else{
      setForget(false)
    }
    

  }
  

  
  return (
   <>
  
<div className="modal-heading mt-3 text-center">
                    <h1 className="modal-title">
                      Did you forget your password ?
                    </h1>
                    <a
            
            className="forgetpass mt-2 me-4"
            onClick={() => goBack()}
          >
           <FiArrowLeftCircle/> GoBack
          </a>
                  </div>
                  {pass?  
                  <div className="forget-content animate__animated  animate__fadeIn">
                  <form onSubmit={changePassword} novalidate>
                      <div className="input-box">
                        <label className="input-label">
                          Create new password
                        </label>
                        <input
                          type="text"
                          className="input-1"
                          onFocus={() => setFocus(true)}      
                    
                          onChange={(e) =>
                            setPassword(e.target.value)
                          }
                          required
                        />
                       <h6 className=" p-0 text-success mt-2 text-center">{toast}</h6>
                      </div>
                      <div className="input-box">
                        <label className="input-label">
                          Confirm password
                        </label>
                        <input
                          type="text"
                          className="input-1"
                          onFocus={() => setFocus(true)}
                        
                          onChange={(e) => 
                            setconfirmPasswords(e.target.value)
                          }
                          required
                        />
                       {/* <h6 className=" p-0 text-success mt-2 text-center">{fnotify}</h6> */}
                      </div>   
                    <button type="submit" className="signin">
                      <span className='fw-light'>SET PASSWORD</span>
                    </button>
                  </form>
                </div>
                :<> 
                 { sendOtp ? 
                   <div className="forget-content animate__animated  animate__fadeIn">
                    <form onSubmit={checkOTP} novalidate>
                      <div className=" animate__animated  animate__flipInX">
                     
                        <div className="input-box">
                          <label className="input-label">
                            Enter your OTP 
                          </label>
                          <input
                            type="text"
                            className="input-1"
                            value={otp}
                             onFocus={() => setFocus(true)}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                          />

<h6 className=" p-0 text-success mt-2 text-center">{toast}</h6>
                         <a
              href="#"
              className="forgetpass"
              onClick={() => onForget()}
            >
              Resend OTP
            </a>
                        </div>
                      </div>
                      <button type="submit" className="signin">
                        <span>SUBMIT <FiLogIn/></span>
                
                      </button>
                <ToastContainer/>
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
                          value={email}
                          onFocus={() => setFocus(true)}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                       <h6 className=" p-0 text-success mt-2 text-center">{toast}</h6>
                      </div>
                    </div>
                    <button type="submit" className="signin">
                      <span>SEND OTP <FiLogIn/></span>
              
                    </button>
                  <ToastContainer/>
              
                  </form>
                </div>
                  }

                </>
                

                  }
                 
            


   </>
  )
}

export default ForgetPass