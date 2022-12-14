import React, { useContext, useState } from 'react'
import ForgetPass from './forgetPass';
import Login from './login';
import "./login.scss";
import { toast, ToastContainer } from "react-toastify";
import {
  changePasswordApi,
  clientId,
  emailOTP,
  googleLogin,
  loginUser,
  mobileOTP,
  registerUser,
  sendOTP
} from "../../apis/apis";
import { useGoogleLogin } from "react-google-login";
import { MdOutlineError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Register from "./signup";
import { AccountContext } from '../../apis/apicontext';
import { useDispatch, useSelector } from 'react-redux'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const { addRemove } = useContext(AccountContext);
  const [nameValidate, setNameValidate] = useState();
  const [email, setEmail] = useState();
  const [emailsValidate, setEmailsValidate] = useState();
  const [password, setPassword] = useState("");
  const [passwordsValidate, setPasswordsValidate] = useState();
  const [phone, setNumber] = useState("");
  const [numbervalidate, setNumbervalidate] = useState();
  const [forget, setForget] = useState(false);
  const [pass, setPass] = useState(false);
  const [fnotify, setFnotify] = useState("")
  const [signin, setSignIn] = useState(true);
  const [otp, setOtp] = useState("");
  const [sendOtp, setSendOtp] = useState(false);
  const [expire, setexpire] = useState("")
  const [confirmpasswords, setconfirmPasswords] = useState();
  const { isLoggedIn } = useSelector((state) => state.LoginStatus);



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

  const afterLogin = async () => {
    localStorage.setItem(true, "long");
    const locate = localStorage.getItem("locate");
    const backlink = locate ? locate : "/";
    localStorage.removeItem("locate");
    addRemove({ type: "DECR" });
    navigate(`${backlink}`);
  }
  // Google Login Request
  const onSuccess = async (res) => {
    const profile = res.profileObj
    const data = await googleLogin(profile);
    if (data.success === true) {
      afterLogin()
    } else {
      toast(data.message)

    }
  };

  // Google Login failures
  const onFailure = async (res) => {
    toast("Google Login Failed");
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    clientId,
  });

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
      setEmailsValidate(<MdOutlineError className="text-danger" />);
    } else if (!emailformate.test(email)) {
      count = +1;
      setEmailsValidate("Type your email corectly");
    } else if (password === "") {
      count = +1;
      setPasswordsValidate(<MdOutlineError className="text-danger" />);
    } else if (count === 0) {

      e.preventDefault();
      const data = await loginUser(email, password)
      if (data.success === true) {
        afterLogin()
      } else {
        toast(data.message)
      }

    }
    e.preventDefault();
  };

  //toggle between signIn & register
  const toggleSignUp = () => {
    setSignIn(!signin);
  };

  //foget password
  const clickforget = () => {
    setForget(true);
  };


  function alertFunc() {
    setForget(false);
    setFnotify("");
  }

  const onForget = async (e) => {
    console.log(email);
    e.preventDefault()
    if (isNaN(parseInt(email))) {
      const data = await emailOTP(email)
      if (data.success == true) {
        setEmail(" ")
        setSendOtp(true)
      } else {
        toast(data.message)
      }
    } else {
      const data = await mobileOTP(email);
      if (data.success == true) {
        setEmail(" ")
        setSendOtp(true)

      } else {
        toast(data.message)
      }
    }
  };

  const changePassword = async (e) => {
    e.preventDefault()
    const data = await changePasswordApi(password, confirmpasswords, expire);
    setPassword(" ")
    setconfirmPasswords(" ")
    if (data.success === true) {
      afterLogin()
    } else {
      toast(data.message)
    }
  };

  const checkOTP = async (e) => {
    e.preventDefault()
    const data = await sendOTP(otp)

    if (data.success === true) {
      setexpire(data.message)
      setPass(true)
    } else {
      toast(data.message)
    }
  };

  const onRegister = async (e) => {
    if (name === "") {
      count = +1;
      setNameValidate(<MdOutlineError className="text-danger" />);
    } else if (phone.length <= 0) {
      count = +1;
      setNumbervalidate(<MdOutlineError className="text-danger" />);
    } else if (phone.length != 10) {
      count = +1;
      setNumbervalidate("Type your 10 digit no correctly");
    } else if (email === "") {
      count = +1;
      setEmailsValidate(<MdOutlineError className="text-danger" />);
    } else if (!emailformate.test(email)) {
      count = +1;
      setEmailsValidate("Type your email corectly");
    } else if (password === "") {
      count = +1;
      setPasswordsValidate(<MdOutlineError className="text-danger" />);
    } else if (password.length <= 3) {
      setPasswordsValidate("Password should be atleast 4 digit ");
    } else if (count === 0) {
      e.preventDefault()
      const data = await registerUser(name, email, phone, password);
      if (data.success === true) {
        afterLogin()
      } else {
        toast(data.message)
      }
    }
    e.preventDefault();
  };

  return (
    <section className=" " id="mainsection">
      <div className="container-fluid px-5">
        <div className="row mx-5  mt-5 rounded-5 all-content p-3  mb-4">
          <div className="col-md-7 p-0  d-flex justify-content-center main_content2">
            <img
              src="./images/login.png"
              className="img-fluid rounded  "
              id="png"
            />
          </div>
          <div className="col-md-5 main_content1">
            {forget ? (
              <>
                <ForgetPass
                  setconfirmPasswords={setconfirmPasswords}
                  expire={expire}
                  setOtp={setOtp}
                  otp={otp}
                  email={email}

                  setEmail={setEmail}

                  checkOTP={checkOTP}
                  changePassword={changePassword}
                  phone={phone}
                  sendOtp={sendOtp}
                  setSendOtp={setSendOtp}
                  onForget={onForget}
                  setFocus={setFocus}
                  fnotif={fnotify}
                  emailsValidate={emailsValidate}
                  password={password}
                  setPassword={setPassword}
                  setForget={setForget}
                  setPass={setPass}
                  pass={pass}

                />
              </>
            ) : (
              <>

                <div className="modal-heading mt-3 text-center">
                  <h1 className="modal-title">Welcome to Gohoardings!</h1>
                  <p className="modal-desc text-secondary">
                    OOH Advertising made easy and affordable.
                  </p>
                </div>
                {signin ? (
                  <Login
                    setEmailValidate={setEmailsValidate}
                    setFocus={setFocus}
                    onSignIn={onSignIn}
                    setEmail={setEmail}
                    email={email}
                    emailsValidate={emailsValidate}
                    passwordsValidate={passwordsValidate}
                    setPassword={setPassword}
                    password={password}
                    onVisible={onVisible}
                    eyeViseble={eyeViseble}
                    AiFillEye={AiFillEye}
                    AiFillEyeInvisible={AiFillEyeInvisible}
                    clickforget={clickforget}
                    ToastContainer={ToastContainer}
                    signIn={signIn}
                    toggleSignUp={toggleSignUp}
                  />
                ) : (
                  <Register
                    setFocus={setFocus}
                    onVisible={onVisible}
                    eyeViseble={eyeViseble}
                    toggleSignUp={toggleSignUp}
                    signIn={signIn}
                    toast={toast}
                    passwordsValidate={passwordsValidate}
                    setPassword={setPassword}
                    password={password}
                    setEmail={setEmail}
                    email={email}
                    emailsValidate={emailsValidate}
                    numbervalidate={numbervalidate}
                    phone={phone}
                    AiFillEyeInvisible={AiFillEyeInvisible}
                    AiFillEye={AiFillEye}
                    setNumber={setNumber}
                    nameValidate={nameValidate}
                    setName={setName}
                    name={name}
                    onRegister={onRegister}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signin