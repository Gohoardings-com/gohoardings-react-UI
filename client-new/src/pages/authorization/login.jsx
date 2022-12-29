import {FiLogIn} from "react-icons/fi";
import Logingoogle from "./loginGoogle";


const Login = ({onSignIn, setFocus, email, setEmail, signIn,toggleSignUp,ToastContainer,clickforget,setRemember,AiFillEyeInvisible,onVisible,AiFillEye,eyeViseble,emailsValidate, password, setPassword, passwordValidate}) => {
 
  return (
    <>

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
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <p className="ms-2 p-0 text ">{emailsValidate}</p>
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
                <p className="ms-2 p-0 text">
                  {passwordValidate}
                </p>
              </div>
            </div>
            <label className="ms-2 checkbox">
              <input
                type="checkbox"
                onChange={() => setRemember(true)}
              />
              <span></span>
              <small className="rmb ms-1 ">Remember me</small>
            </label>
            <a
              href="#"
              className="forgetpass"
              onClick={() => clickforget()}
            >
              Forget Password?
            </a>
            <button type="submit" className="signin">
              <span>SIGN IN <FiLogIn/></span>
            </button>
            <ToastContainer />
          </form>
          <Logingoogle signIn={signIn}/>
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

    </>
  );
};
export default Login;
