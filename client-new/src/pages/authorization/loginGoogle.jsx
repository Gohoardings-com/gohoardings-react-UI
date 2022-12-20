import React from 'react'
import GoogleLogin from 'react-google-login';
import { FcGoogle } from "react-icons/fc";

const Logingoogle = ({signIn}) => {
  return (
    <>
    <div className="row mt-4">
    <div className="col-md-5 or_border"></div>
    <div className="col-md-2 or  text-center ">OR</div>
    <div className="col-md-5  or_border  "></div>
  </div>
  <div
    className="col-md-12 ps-0 mt-4 text-center"
    onClick={signIn}
  >
    <a>
      <FcGoogle className="google-icon" />
    </a>
  </div>
  
  </>
  )
}

export default Logingoogle