import React from 'react'

const UserProfile = () => {
  return (
    <>
                    <div className="card profile-detail p-3">
                      <div class="panel-body">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <div class="form-group">
                                <label
                                  for="profile_image"
                                  class="profile-image"
                                >
                                  Profile image
                                </label>
                                <input
                                  type="file"
                                  name="profile_image"
                                  class="form-control"
                                  id="profile_image"
                                />
                              </div>
                              <label for="firstname">First Name</label>
                              <input
                                type="text"
                                class="form-control"
                                name="firstname"
                                id="firstname"
                                value=""
                              />
                            </div>
                            <div class="form-group">
                              <label for="lastname">Last Name</label>
                              <input
                                type="text"
                                class="form-control"
                                name="lastname"
                                id="lastname"
                                value=""
                              />
                            </div>
                            <div class="form-group">
                              <label for="title">Position</label>
                              <input
                                type="text"
                                class="form-control"
                                name="title"
                                id="title"
                                value=""
                              />
                            </div>
                            <div class="form-group">
                              <label for="email">Email Address</label>
                              <input
                                type="email"
                                name="email"
                                class="form-control"
                                id="email"
                                value="Uday@gohoardings.com"
                              />
                            </div>
                            <div class="form-group">
                              <label for="phonenumber">Phone</label>
                              <input
                                type="text"
                                class="form-control"
                                name="phonenumber"
                                id="phonenumber"
                                value=""
                              />
                            </div>

                            {/* <p class="bold email-notifications-label">
                          Email Notifications
                        </p> */}
                          </div>
                          <div class="row p15">
                            <div class="col-md-12 text-right mtop20">
                              <div class="form-group mb-0">
                                <button
                                  type="submit"
                                  class="btn btn-info text-light"
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
  )
}

export default UserProfile