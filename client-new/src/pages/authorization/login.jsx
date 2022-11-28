import React, { useState, useEffect } from "react";
import "./login.scss";
import { authActions } from "../../store";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from 'react-redux'
import { useGoogleLogin } from 'react-google-login'
import { MdOutlineError } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Register from "./signup";
import instance from "../../apis/Axios";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidate, setEmailValidate] = useState();
  const [passwordValidate, setPasswordValidate] = useState();
  const clientId = '993204517237-7ugkv9g11enginni1jruiidpg0ck618h.apps.googleusercontent.com';


  function setFocus(on) {
    var element = document.activeElement;
    var $ = window.jQuery;
    if (on) {
      setTimeout(function () {
        element.parentNode.classList.add("focus");
      });
    } else {
      let box = document.querySelector(".input-box");
      box.classList.remove("focus");
      $("input").each(function () {
        var $input = $(this);
        var $parent = $input.closest(".input-box");
        if ($input.val()) $parent.addClass("focus");
        else $parent.removeClass("focus");
      });
    }
  }
  // Google Login Request
  const onSuccess = async (res) => {
    const { data } = await instance.post("registration/googleSingUp", {
      profile: res.profileObj
    })
    if (data.message === "User Login Successfull") {
      const user = data.message
      window.localStorage.setItem("user", user)
      window.sessionStorage.setItem("user", user)
      const locate = window.localStorage.getItem("login")
      const map = window.localStorage.getItem("map")
      if (!locate) {
        navigate("/").then(() => dispatch(authActions.login()))
      } else if (map) {
        window.localStorage.removeItem("map")
        navigate(`${map}`).then(() => dispatch(authActions.login()))
      } else {
        window.localStorage.removeItem("login")
        navigate(`${locate}`).then(() => dispatch(authActions.login()))
      }

    } else {
      toast("Email or Password Invalid")

    }
  }



  // Google Login failures
  const onFailure = async (res) => {
    toast("Google Login Failed")
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',

  })
  const emailformate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let count = 0;
  const [eyeViseble, setEyeViseble] = useState(true);
  const onVisible = () => {
    let x = document.getElementById("inputPassword");

    if (x.type == "password") {
      x.type = "text";
      setEyeViseble(!eyeViseble);
    } else {
      x.type = "password";
      setEyeViseble(!eyeViseble);
    }
  };
  //validation and submit  for signIn

  const onSignIn = async (e) => {
    if (email === "") {
      count = +1;
      setEmailValidate(<MdOutlineError className="text-danger" />);
    } else if (!emailformate.test(email)) {
      count = +1;
      setEmailValidate("Type your email corectly");
    } else if (password === "") {
      count = +1;
      setPasswordValidate(<MdOutlineError className="text-danger" />);
    } else if (count === 0) {
      try {
        e.preventDefault()
        const { data } = await instance.post('registration/login', {
          email: email, password: password
        })
        if (data.message === "User Login Successfull") {
          const user = data.message
          window.localStorage.setItem("user", user);
          window.sessionStorage.setItem("user", user);
          const locate = window.localStorage.getItem("locate");
          const backlink = locate ? locate : "/";
          window.localStorage.removeItem("locate");
          navigate(`${backlink}`).then(() => dispatch(authActions.login()));
        } else {
          toast("Email or Password Invalid")
        }
      } catch (err) {
        toast("Email or Password Invalid");
      }

    }
    e.preventDefault();
  };

  //toggle between signIn & register
  const [signin, setSignIn] = useState(true);
  const toggleSignUp = () => {
    setSignIn(!signin);
  };

  return (
    <>
      <section className=" " id="mainsection">
        <div className="container-fluid px-5">
          <div className="row mx-5  mt-5 rounded-5 all-content p-3  mb-4">
            <div className="col-md-7 p-0  d-flex justify-content-center main_content2">
              <img src="./images/login.png" className="img-fluid rounded " id="png" />
            </div>
            <div className="col-md-5 main_content1">
              <div className="modal-heading mt-3 text-center">
                <h1 className="modal-title">Welcome to Gohoardings!</h1>
                <p className="modal-desc text-secondary">
                  OOH Advertising made easy and affordable.
                </p>
              </div>
              {signin ? (
                <div className="signIn">
                  <div className="form">
                    <form onSubmit={onSignIn}>
                      <div className="mb-4 mt-2">
                        <div className="input-box">
                          <label className="input-label">
                            Enter your email@gmail.com
                          </label>
                          <input
                            type="text"
                            className="input-1"
                            onFocus={() => setFocus(true)}
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                          <p className="ms-2 p-0 text ">{emailValidate}</p>
                        </div>
                      </div>
                      <div className="mb-2 mt-2">
                        <div className="input-box">
                          <label className="input-label">
                            Enter your password
                          </label>
                          <input
                            type="password"
                            className="input-1"
                            onFocus={() => setFocus(true)}
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            id="inputPassword"
                          />
                          <span className="eye" onClick={() => onVisible()}>
                            {" "}
                            {eyeViseble ? (
                              <AiFillEye id="visible-eye" />
                            ) : (
                              <AiFillEyeInvisible id="invisible-eye" />
                            )}
                          </span>
                          <p className="ms-2 p-0 text">{passwordValidate}</p>
                        </div>
                      </div>
                      <label className="ms-2 checkbox">
                        <input type="checkbox" />
                        <span></span>
                        <small className="rmb ms-1 ">Remember me</small>
                      </label>
                      <a href="#" className="forgetpass">
                        Forget Password?
                      </a>
                      <button type="submit" className="signin">
                        <span>SIGN IN</span>
                      </button>
                      <ToastContainer />
                    </form>
                    <div className="row mt-4">
                      <div className="col-md-5 or_border  "></div>
                      <div className="col-md-2 or  text-center ">OR</div>
                      <div className="col-md-5  or_border  "></div>
                    </div>
                    <div className="col-md-12 ps-0 mt-4 text-center" onClick={signIn}>
                      <a>
                        <FcGoogle className="google-icon" />
                      </a>
                    </div>
                    <div
                      className=" text-center switch signin-switch"
                      id="l-switch"
                    >
                      <a onClick={() => toggleSignUp()}>
                        Don't have an account? Register here
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <Register setFocus={setFocus} onVisible={onVisible} eyeViseble={eyeViseble} toggleSignUp={toggleSignUp} toast={toast} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
