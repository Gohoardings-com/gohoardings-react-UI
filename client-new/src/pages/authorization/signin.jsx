import React, {useState, useEffect} from 'react'
import ForgetPass from './forgetPass';
import Login from './login';
import "./login.scss";
import { ToastContainer, toast } from "react-toastify";
import { clientId } from "../../apis/apis";
import { useGoogleLogin } from "react-google-login";
import { MdOutlineError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Register from "./signup";
import instance from "../../apis/axios";
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from "../../store";
import { registerUser } from '../../apis/apis';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";


const Signin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [nameValidate, setNameValidate] = useState();
    const [email, setEmail] = useState("");
    const [emailsValidate, setEmailsValidate] = useState();
    const [password, setPassword] = useState("");
    const [passwordsValidate, setPasswordsValidate] = useState();
    const [phone, setNumber] = useState("");
    const [numbervalidate, setNumbervalidate] = useState();
    const [remember, setRemember] = useState(false);
    const [forget, setForget] = useState(false);
    const [fnotify,setFnotify] = useState(" ")
    const [signin, setSignIn] = useState(true);
    
    
  
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
        profile: res.profileObj,
      });
      if (data.success=== "true") {
        const user = data.success;
        if (remember) {
          window.localStorage.setItem("user", user);
        } else {
          window.sessionStorage.setItem("user", user);
        }
        const locate = window.localStorage.getItem("locate");
        const backlink = locate ? locate : "/";
        window.localStorage.removeItem("locate");
        navigate(`${backlink}`).then(() => dispatch(authActions.login()));
      } else {
        toast("Email or Password Invalid");
      }
    };
  
    // Google Login failures
    const onFailure = async (res) => {
      toast("Google Login Failed");
    };
  
    const { signIn } = useGoogleLogin({
      onSuccess,
      onFailure,
      clientId,
      isSignedIn: true,
      accessType: "offline",
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
        try {
          e.preventDefault();
          const { data } = await instance.post("registration/login", {
            email: email,
            password: password,
          });
          if (data.success === "User Login Successfull") {
            const user = data.success;
            if (remember) {
              window.localStorage.setItem("user", user);
            } else {
              window.sessionStorage.setItem("user", user);
            }
            const locate = window.localStorage.getItem("locate");
            const backlink = locate ? locate : "/";
            window.localStorage.removeItem("locate");
            navigate(`${backlink}`).then(() => dispatch(authActions.login()));
          } else {
            toast("Email or Password Invalid");
          }
        } catch (err) {
          toast("Email or Password Invalid");
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
    
    const onForget = () => {
      // after email validate condition chek
      setFnotify("We send the link to your email")
     let timeout = setTimeout(alertFunc, 4000);
     
    };
     
    function alertFunc() {
      setForget(false);
      setFnotify("");
    }

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
        try {
          e.preventDefault()
          const data = await registerUser(name, email, phone, password);
          if (data.message === "Register Successfully") {
            const user = data.message
            window.localStorage.setItem("user", user)
            window.sessionStorage.setItem("user", user)
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
  


    
  return (
    <section className=" " id="mainsection">
        <div className="container-fluid px-5">
          <div className="row mx-5  mt-5 rounded-5 all-content p-3  mb-4">
            <div className="col-md-7 p-0  d-flex justify-content-center main_content2">
              <img
                src="./images/login.png"
                className="img-fluid rounded animate__animated animate__pulse animate__infinite	infinite animate__slow	1s "
                id="png"
              />
            </div>
            <div className="col-md-5 main_content1">
              {forget ? (
                <>
                  <ForgetPass
                    setEmail={setEmail}
                    email={email}
                    onForget={onForget}
                    setFocus={setFocus}
                    fnotif={fnotify}

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
                   setRemember={setRemember}
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