import React from 'react'

const ForgetPass = ({setEmail, email, onForget, setFocus, fnotify}) => {

  return (
   <>
   <div className="modal-heading mt-3 text-center">
                    <h1 className="modal-title">
                      Did you forget your password ?
                    </h1>
                    <p className="modal-desc text-secondary">
                    On Submit, an email with a link to create a password will be sent to your email account
                    </p>
                  </div>
                  <div className="forget-content">
                    <form onSubmit={onForget} novalidate>
                      <div className="">
                     
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
                              setEmail(e.target.email);
                            }}
                            required
                          />
                         <h6 className=" p-0 text-success mt-2 text-center">{fnotify}</h6>
                        </div>
                      </div>
                      <button type="submit" className="signin">
                        <span>SUBMIT</span>
                      </button>
                
                    </form>
                  </div>
   </>
  )
}

export default ForgetPass