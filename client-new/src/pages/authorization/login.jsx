import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Nav from "react-bootstrap/Nav";
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from "../../store";
import "./login.scss";
import { LoginContact } from "../../action/adminAction";
import { useGoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom';
import instance from '../../apis/Axios'

const clientId = '993204517237-7ugkv9g11enginni1jruiidpg0ck618h.apps.googleusercontent.com';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [message,setMessage] = useState([])
  const [googledata, setGoogledata] = useState([])

// Google Login Request
  const onSuccess = async (res) => {
    await instance.post("registration/googleSingUp", {
      profile: res.profileObj
    }).then(() => dispatch(authActions.login()),
      navigate('/'))
  }

  // Google Login failures
  const onFailure = async (res) => {
    await setGoogledata(null)
  }

  const {signIn} = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn:true,
    accessType:'offline',

  })



  const loginUser = async (e) => {
    try{
      e.preventDefault()
      const {data} = await instance.post('registration/login',{
        email:email, password:password
      })
      if(data.message === "User Login Successfull"){
       const user = data.message
       window.localStorage.setItem("user",user)
       window.sessionStorage.setItem("user",user)
       navigate("/").then(() => dispatch(authActions.login()))
      }else{
        setMessage("Email and Password Invalid")
       
      }
    }catch(err){
      setMessage("Email and Password Invalid");
    }
  }

  const linkdinLogin = () => {
    window.open("http://localhost:8080/auth/linkedin");
  }


  return (
    <>
      <div className="container-fluid px-4 py-5">
        <div className="row">
          <div className="col-6">
            <div>
              <p className="text-center text-light subhead fw-semibold">
                Gohaordings OOH Advertising Made Easy And Affordable
              </p>
            </div>

            <div className="text-center">
              <img src="./images/Capture.JPG" alt="" />
            </div>
          </div>
          <div className="col-6">
            <div className="login-form px-4 py-4 rounded-4">
              <p className="text-light subhead fw-semibold">Welcome</p>
              <button className="btn btn-warning mb-4 me-3 px-3 fw-semibold">
                Login as
                <br />
                <span className="subhead">Customer</span>
              </button>
              <button className="btn border text-light mb-4 px-4 fw-semibold">
                Login as
                <br />
                <span className="subhead">Business</span>
              </button>
              <form action="" onSubmit={loginUser} className="mt-2">
                <label htmlFor="email" className="form-label text-light">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Eg. email@domain.com"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setemail(e.target.value);

                  }}
                  required
                ></input>
                <div id="emailHelp" className="form-text mb-2">
                  We'll never share your email with anyone else.
                </div>
                <label htmlFor="email" className="form-label text-light">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Eg. +91-123456789"
                  aria-describedby="passHelp"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  required
                ></input>
                <div id="passHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
                <div className="position-relative">
                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remeber-me"
                    />
                    <label className="form-check-label text-light" htmlFor="remeber-me">
                      Remember me
                    </label>
                  </div>
                  <Nav.Link
                    className="text-light normal position-absolute top-0 end-0"
                    href="/forget-password?"
                  >Forget Password?</Nav.Link>
                </div>
                <button className="btn border text-light w-100 mt-3" >
                  Login
                </button>
              </form>

            {message &&   <p className="divider"><span className="text-light">{message}</span></p>}
              <p className="divider"><span className="text-light">OR</span></p>
              <p className="text-center pt-4 mt-3"><a href="/auth/linkedin">
                <img src="./images/Linkedin.png" alt="" className="pe-3" onClick={linkdinLogin} />
              </a> <img src="./images/twitter.png" alt="" />
               <button onClick={signIn} className="button">Google</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login
