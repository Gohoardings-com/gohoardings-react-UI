import React from 'react'
import {FcGoogle} from "react-icons/fc";
import instance from '../../apis/axios';
import {authActions} from '../../store';
import {useDispatch} from 'react-redux';
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";


const Logingoogle = ({signIn}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {loginWithPopup, user} = useAuth0();

  if (useAuth0()?.isAuthenticated) {
    instance.post('registration/user', user)
    localStorage.setItem(true, "long");
const locate =  localStorage.getItem("locate");
const backlink = locate ? locate : "/";
 localStorage.removeItem("locate");
navigate(`${backlink}`).then(() => dispatch(authActions.login()));
  }
  
const loginLinkdin =  async() => {
    await loginWithPopup()
}


  return (
    <>
    <div className="row mt-4">
    <div className="col-md-5 or_border"></div>
    <div className="col-md-2 or  text-center  or-text">OR</div>
    <div className="col-md-5  or_border  "></div>
  </div>
  <div
    className="col-md-12 ps-0 mt-4 text-center"
   
  >
  

      <FcGoogle className="google-icon"  onClick={signIn}/>
      <img  src="../../clientslogo/linkdin.png" className="google-icon offset-1" onClick={loginLinkdin}/>

  </div>
 
  </>
  )
}

export default Logingoogle