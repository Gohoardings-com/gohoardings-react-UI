import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";


const Register = ({ setFocus, onVisible, eyeViseble, toggleSignUp, passwordsValidate, setPassword, password, setEmail, email, emailsValidate, numbervalidate, phone, AiFillEye, AiFillEyeInvisible, setNumber, nameValidate, setName, name, onRegister}) => {
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
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
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
