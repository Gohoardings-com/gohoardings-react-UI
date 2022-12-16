import React from 'react'

const ChangePassword = () => {
  return (
    <>
    <div className="card p-3 password-data">
                      <div className="panel-body">
                        <form
                          action="https://accounts.gohoardings.com/clients/profile"
                          method="post"
                          accept-charset="utf-8"
                        >
                          <div className="form-group mt-2">
                            <label for="oldpassword">Old Password</label>
                            <input
                              type="password"
                              className="form-control"
                              name="oldpassword"
                              id="oldpassword"
                            />
                          </div>
                          <div className="form-group mt-2">
                            <label for="newpassword">New Password</label>
                            <input
                              type="password"
                              className="form-control"
                              name="newpassword"
                              id="newpassword"
                            />
                          </div>
                          <div className="form-group mt-2">
                            <label for="newpasswordr">Repeat Password</label>
                            <input
                              type="password"
                              className="form-control"
                              name="newpasswordr"
                              id="newpasswordr"
                            />
                          </div>
                          <div className="form-group mt-2">
                            <button
                              type="submit"
                              className="btn btn-info btn-block text-light"
                            >
                              Change Password
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
  </>
  )
}

export default ChangePassword