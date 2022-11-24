import React,{useState} from 'react'
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineError } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from "../../store";
import instance from "../../apis/Axios";
import { useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";


const Register = ({setFocus,onVisible, eyeViseble, toggleSignUp }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [phone, setNumber] = useState("");
  const [email, setEmails] = useState("");
  const [password, setPasswords] = useState("");
  const [nameValidate, setNameValidate] = useState();
  const [numbervalidate, setNumbervalidate] = useState();
  const [emailsValidate, setEmailsValidate] = useState();
  const [passwordsValidate, setPasswordsValidate] = useState();

  const onRegister = async(e) => {
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
      try{
        e.preventDefault()
        const {data} = await instance.post('registration/register',{
          name,  email,phone, password 
        })
        if(data.message === "Register Successfully"){
         const user = data.message
         window.localStorage.setItem("user",user)
         window.sessionStorage.setItem("user",user)
        const locate =  window.localStorage.getItem("login")
 
        const map = window.localStorage.getItem("map")
        }else{
          toast("Email or Password Invalid")
         
        }
      }catch(err){
        toast("Email or Password Invalid");
      }
    }
    e.preventDefault();
  };

  const emailformate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let count = 0;


  return (
    <>
      <div className="register mt-0">
                  <div className="form">
                    <form onSubmit={onRegister}>
                      <div className="mb-2 mt-0 ">
                        <div className="input-box">
                          <label className="input-label">
                            Enter your full name
                          </label>
                          <input
                            type="text"
                            className="input-1 "
                            onFocus={() => setFocus(true)}
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                          <p className="ms-3 p-0 text ">{nameValidate}</p>
                        </div>
                      </div>
                      <div className="mb-2 mt-1 ">
                        <div className="input-box">
                          <label className="input-label">
                            Enter your contact phone
                          </label>
                          <input
                            type="phone"
                            className="input-1 "
                            onFocus={() => setFocus(true)}
                            value={phone}
                            onChange={(e) => {
                              setNumber(e.target.value);
                            }}
                          />
                          <p className="ms-2 p-0 text ">{numbervalidate}</p>
                        </div>
                      </div>
                      <div className="mb-2 mt-0">
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
                              setEmails(e.target.value);
                            }}
                          />
                          <p className="ms-2 p-0 text ">{emailsValidate}</p>
                        </div>
                      </div>
                      <div className="mb-3 mt-0">
                        <div className="input-box">
                          <label className="input-label">
                            Enter your password
                          </label>
                          <input
                            type="text"
                            className="input-1"
                            onFocus={() => setFocus(true)}
                            value={password}
                            onChange={(e) => {
                              setPasswords(e.target.value);
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

                          <p className="ms-2 p-0 text">{passwordsValidate}</p>
                        </div>
                      </div>
                      <button type="submit" className="signin mt-4">
                        <span>REGISTER</span>
                      </button>
                    </form>
                    <div className="row mt-3">
                      <div className="col-md-5 or_border  "></div>
                      <div className="col-md-2 or  text-center ">OR</div>
                      <div className="col-md-5  or_border  "></div>
                    </div>
                    <div className="col-md-12 ps-0 mt-3 text-center">
                      <a>
                        <FcGoogle className="google-icon" />
                      </a>
                    </div>
                    <div className="mt-2 mb-0 text-center switch">
                      <a onClick={() => toggleSignUp()}>
                        Already have an account? Signin here
                      </a>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default Register
