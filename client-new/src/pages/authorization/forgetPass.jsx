import React,{useState} from 'react'
import { mobileOTP, sendOTP } from '../../apis/apis'
import {FiLogIn,FiArrowLeftCircle} from "react-icons/fi";


const ForgetPass = ({setconfirmPasswords, expire,setOtp, checkOTP, changePassword, setEmail, onForget, setFocus, fnotify,  setPassword, emailsValidate, setForget}) => {
  const [sendOtp,setSendOtp]=useState(false);
  const [pass,setPass]= useState(false);
  const goBack=()=>{
    if(pass==true){
      setPass(false);
      setSendOtp(true);
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
   {/* <div className="modal-heading mt-3 text-center">
                    <h1 className="modal-title">
                      Did you forget your password ?
                    </h1>
                    <p className="modal-desc text-secondary">
                    On Submit, an email with a link to create a password will be sent to your email account
                    </p>
                  </div>
                  <div className="forget-content">
                    <form onSubmit={onForget} novalidate>
                      <div className="">
                     
                        <div className="input-box">
                          <label className="input-label">
                            Enter your user@email.com
                          </label>
                          <input
                            type="text"
                            className="input-1"
                            onFocus={() => setFocus(true)}
                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                         <h6 className=" p-0 text-success mt-2 text-center">{fnotify}</h6>
                        </div>
                      </div>
                      <button type="submit" className="signin">
                        <span>SUBMIT</span>
                      </button>
                
                    </form>
                    <form onSubmit={checkOTP}>
                    <div className="input-box">
                          <label className="input-label">
                            Enter your OTP
                          </label>
                          <input
                          type="number"
                          className="input-1"
                          onFocus={() => setFocus(true)}
                          onChange={(e) => setOtp(e.target.value)}
                          required
                          />
                          </div>
                          <button type="submit" className="signin">
                        <span>SUBMIT</span>
                      </button>
                    </form>
                    <form onSubmit={changePassword} novalidate>
                    
                     
                       
                         <div className="input-box">
                          <label className="input-label">
                            Enter New Password
                          </label>
                          <input
                            type="text"
                            className="input-1"
                            onFocus={() => setFocus(true)}
                          
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          </div>
                          <div className="input-box">
                          <label className="input-label">
                            Enter Confirm Password
                          </label>
                           <input
                            type="text"
                            className="input-1"
                            onFocus={() => setFocus(true)}
                          
                            onChange={(e) => setconfirmPasswords(e.target.value)}
                            required
                          />
                       
                         <h6 className=" p-0 text-success mt-2 text-center">{fnotify}</h6>
                       
                      </div>
                      <button type="submit" className="signin">
                        <span>SUBMIT</span>
                      </button>
                
                    </form>
        
                  </div> */}


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
                  <form  novalidate>
                      <div className="input-box">
                        <label className="input-label">
                          Create new password
                        </label>
                        <input
                          type="text"
                          className="input-1"
                          onFocus={() => setFocus(true)}      
                    
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          required
                        />
                       {/* <h6 className=" p-0 text-success mt-2 text-center">{fnotify}</h6> */}
                      </div>
                      <div className="input-box">
                        <label className="input-label">
                          Confirm password
                        </label>
                        <input
                          type="text"
                          className="input-1"
                          onFocus={() => setFocus(true)}
                        
                          onChange={(e) => {
                            setconfirmPasswords(e.target.value);
                          }}
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
                             onFocus={() => setFocus(true)}
                          
                           
                            onChange={(e) => {
                              setOtp(e.target.value);
                            }}
                            required
                          />

                         {/* <h6 className=" p-0 text-success mt-2 text-center">{fnotify}</h6> */}
                         <a
              href="#"
              className="forgetpass"
              // onClick={() => clickforget()}
            >
              Resend OTP
            </a>
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
                          onChange={(e) => {
                            setEmail(e.target.value);
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
                

                  }
                 
            


   </>
  )
}

export default ForgetPass