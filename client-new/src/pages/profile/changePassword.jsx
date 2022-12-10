import React from 'react'

const ChangePassword = () => {
  return (
    <>
    <div className="card p-3 password-data">
                      <div class="panel-body">
                        <form
                          action="https://accounts.gohoardings.com/clients/profile"
                          method="post"
                          accept-charset="utf-8"
                        >
                          <div class="form-group mt-2">
                            <label for="oldpassword">Old Password</label>
                            <input
                              type="password"
                              class="form-control"
                              name="oldpassword"
                              id="oldpassword"
                            />
                          </div>
                          <div class="form-group mt-2">
                            <label for="newpassword">New Password</label>
                            <input
                              type="password"
                              class="form-control"
                              name="newpassword"
                              id="newpassword"
                            />
                          </div>
                          <div class="form-group mt-2">
                            <label for="newpasswordr">Repeat Password</label>
                            <input
                              type="password"
                              class="form-control"
                              name="newpasswordr"
                              id="newpasswordr"
                            />
                          </div>
                          <div class="form-group mt-2">
                            <button
                              type="submit"
                              class="btn btn-info btn-block text-light"
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