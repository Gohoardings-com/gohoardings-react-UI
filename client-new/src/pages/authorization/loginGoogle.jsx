import React,{useEffect} from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import instance from '../../apis/axios';
import { authActions } from '../../store';
import { useDispatch } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";



const Logingoogle = ({signIn}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { loginWithPopup, user, isAuthenticated } = useAuth0();
  
 
const singinLinkdin = async() =>{
console.log("two");
    await instance.post('registration/user',user)
    console.log("hello");
    localStorage.setItem(true, "long");
const locate =  localStorage.getItem("locate");
const backlink = locate ? locate : "/";
 localStorage.removeItem("locate");
navigate(`${backlink}`).then(() => dispatch(authActions.login()));
  
}


const loginLinkdin =  async() => {
  console.log("one");
await loginWithPopup().then(() =>  singinLinkdin())
}
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
  <div className="col-md-12 ps-0 mt-4 text-center mb-3 fs-1"><FaLinkedin onClick={() => loginLinkdin()}/></div>
  
  
  </>
  )
}

export default Logingoogle