import React,{useEffect} from 'react'
import GoogleLogin from 'react-google-login';
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import instance from '../../apis/axios';
import { useAuth0 } from "@auth0/auth0-react";



const Logingoogle = ({signIn}) => {
  const { loginWithRedirect } = useAuth0();
 

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
  <div className="col-md-12 ps-0 mt-4 text-center mb-3 fs-1"><FaLinkedin onClick={() => loginWithRedirect()}/></div>
  
  
  </>
  )
}

export default Logingoogle