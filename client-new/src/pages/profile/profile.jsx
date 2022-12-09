import React, { useState } from "react";
import { useEffect } from "react";
import { profileDetails } from "../../apis/apis";
import NewNAvbar from "../../components/navbar/navbar";
import "./profile.scss";

const Profile = () => {
  const [profile, setProfile] = useState(false);
  const [companey, setCompaney] = useState(false);
  const [posts, setPosts] = useState([])

  const showProfile = () => {
    setProfile(!profile);
  };

  const userData = async() =>{
    const data = await(profileDetails());
    setPosts(data.message)
  }
console.log(posts);
  const showCompaney = () => {
    setCompaney(!companey);
  };
useEffect(() =>{
userData()
},[])

  return (
    <>
    <NewNAvbar/>
      <div className="container">
        <div className="row container p-5">
          <div className="col-md-3">
            <div class="card">
              <img
                src="../../gohoarding/new-icon/user-profile.png"
                class="card-img-top p-3 pb-2"
                alt="..."
              />
              <div class="card-body  row text-center pt-0 pb-2">
                <div class="col ">
                  <div class="p-1 border bg-light" onClick={showProfile}>
                    Profile
                  </div>
                </div>
                <div class="col">
                  <div class="p-1 border bg-light" onClick={showCompaney}>
                    Companey
                  </div>
                </div>
              </div>
            </div>
            <div class="list-group card mt-5" id="list-tab" role="tablist">
              <a
                class="list-group-item list-group-item-action active"
                id="list-home-list"
                data-bs-toggle="list"
                href="#list-home"
                role="tab"
                aria-controls="list-home"
              >
                Hyjhrty
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-profile-list"
                data-bs-toggle="list"
                href="#list-profile"
                role="tab"
                aria-controls="list-profile"
              >
                yjtit6
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-messages-list"
                data-bs-toggle="list"
                href="#list-messages"
                role="tab"
                aria-controls="list-messages"
              >
                Messages
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-settings-list"
                data-bs-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="list-settings"
              >
                Settings
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-messages-list"
                data-bs-toggle="list"
                href="#list-messages"
                role="tab"
                aria-controls="list-messages"
              >
                Messages
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-settings-list"
                data-bs-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="list-settings"
              >
                Settings
              </a>
            </div>
          </div>
          {companey ? (
            <>
              <div className="col-md-9">
                <div className="card">
                  <div className=" row p-3">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="company" class="control-label">
                          Company
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="company"
                          value="0"
                        />
                      </div>
                      <div class="form-group">
                        <label for="vat" class="control-label">
                          VAT Number
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="vat"
                          value=""
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
                      <div class="form-group">
                        <label class="control-label" for="website">
                          Website
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="website"
                          id="website"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="city">City</label>
                        <input
                          type="text"
                          class="form-control"
                          name="city"
                          id="city"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <label for="address">Address</label>
                        <textarea
                          name="address"
                          id="address"
                          class="form-control"
                          rows="4"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <label for="zip">Zip Code</label>
                        <input
                          type="text"
                          class="form-control"
                          name="zip"
                          id="zip"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <label for="state">State</label>
                        <input
                          type="text"
                          class="form-control"
                          name="state"
                          id="state"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div
                        class="form-group"
                        app-field-wrapper="custom_fields[customers][10]"
                      >
                        <label
                          for="custom_fields[customers][10]"
                          class="control-label"
                        >
                          PAN
                        </label>
                        <input
                          type="text"
                          id="custom_fields[customers][10]"
                          name="custom_fields[customers][10]"
                          class="form-control"
                          data-fieldto="customers"
                          data-fieldid="10"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div
                        class="form-group"
                        app-field-wrapper="custom_fields[customers][11]"
                      >
                        <label
                          for="custom_fields[customers][11]"
                          class="control-label"
                        >
                          GSTIN
                        </label>
                        <input
                          type="text"
                          id="custom_fields[customers][11]"
                          name="custom_fields[customers][11]"
                          class="form-control"
                          data-fieldto="customers"
                          data-fieldid="11"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <h3>Billing &amp; Shipping</h3>
                      <hr class="no-mbot" />
                    </div>
                         
                    <div class="col-md-6">
                      <h4 class="mbot15 mtop20">Billing Address</h4>
                      <div class="form-group">
                        <label for="billing_street">Street</label>
                        <textarea
                          name="billing_street"
                          id="billing_street"
                          class="form-control"
                          rows="4"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <label for="billing_city">City</label>
                        <input
                          type="text"
                          class="form-control"
                          name="billing_city"
                          id="billing_city"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <label for="billing_state">State</label>
                        <input
                          type="text"
                          class="form-control"
                          name="billing_state"
                          id="billing_state"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <label for="billing_zip">Zip Code</label>
                        <input
                          type="text"
                          class="form-control"
                          name="billing_zip"
                          id="billing_zip"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <label for="billing_country">Country</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <h4 class="mbot15 mtop20">Shipping Address</h4>
                      <div class="form-group">
                        <label for="shipping_street">Street</label>
                        <textarea
                          name="shipping_street"
                          id="shipping_street"
                          class="form-control"
                          rows="4"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <label for="shipping_city">City</label>
                        <input
                          type="text"
                          class="form-control"
                          name="shipping_city"
                          id="shipping_city"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <label for="shipping_state">State</label>
                        <input
                          type="text"
                          class="form-control"
                          name="shipping_state"
                          id="shipping_state"
                          value=""
                        />
                      </div>
                      <div class="form-group">
                        <label for="shipping_zip">Zip Code</label>
                        <input
                          type="text"
                          class="form-control"
                          name="shipping_zip"
                          id="shipping_zip"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </div>   
              </div>
            </>
          ) : (
            <>
              <div className="col-md-6 ">
                {profile ? (
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
                ) : (
                  <>
                    <div className="card p-3 mid-card">
                      <p>Overview</p>

                      <div class="horizontal-tabs">
                        <ul
                          class="nav nav-tabs nav-tabs-horizontal mb-4"
                          role="tablist"
                        >
                          <li role="presentation" class="active">
                            <a
                              href="#booked_media"
                              aria-controls="booked_media"
                              role="tab"
                              data-toggle="tab"
                              aria-expanded="true"
                            >
                              <i class="fa fa-bullhorn menu-icon"></i> Booked
                              Plan
                            </a>
                          </li>
                          <li role="presentation" class="">
                            <a
                              href="#payment"
                              aria-controls="payment"
                              role="tab"
                              data-toggle="tab"
                              aria-expanded="false"
                            >
                              <i class="fa fa-window-maximize menu-icon"></i>{" "}
                              Payment
                            </a>
                          </li>
                          <li role="presentation" class="">
                            <a
                              href="#invoice"
                              aria-controls="invoice"
                              role="tab"
                              data-toggle="tab"
                              aria-expanded="false"
                            >
                              <i class="fa fa-window-maximize menu-icon"></i>{" "}
                              Invoice
                            </a>
                          </li>
                        </ul>

                        <div class="tab-content">
                          <div
                            role="tabpanel"
                            class="tab-pane active"
                            id="booked_media"
                          >
                            <table
                              class="table dt-table table-announcements dataTable no-footer"
                              data-order-col="1"
                              data-order-type="asc"
                              id="DataTables_Table_0"
                            >
                              <thead>
                                <tr>
                                  <th>SNo</th>
                                  <th>Title</th>
                                  <th>Start Date</th>
                                  <th>End Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td colspan="4">No Records</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="col-md-3 ">
                {profile ? (
                  <>
                    {" "}
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
                ) : (
                  <>
                    <div
                      class="widget card p-2  pb-4 "
                      id="widget-user_data"
                      data-name="User Widget"
                    >
                      <div class="panel_s user-data ">
                        <div class="panel-body home-activity">
                          <p class="bold">Activity</p>
                          <div class="clearfix"></div>
                          <hr class="hr-panel-heading" />
                          <div class="horizontal-scrollable-tabs">
                            <div class="horizontal-tabs">
                              <ul
                                class="nav nav-tabs nav-tabs-horizontal"
                                role="tablist"
                              >
                                <li role="presentation" class="active">
                                  <a
                                    href="#favourite_added"
                                    aria-controls="favourite_added"
                                    role="tab"
                                    data-toggle="tab"
                                    aria-expanded="true"
                                  >
                                    Saved Media
                                  </a>
                                </li>
                                <li role="presentation" class="">
                                  <a
                                    href="#media_activity"
                                    aria-controls="media_activity"
                                    role="tab"
                                    data-toggle="tab"
                                    aria-expanded="false"
                                  >
                                    Activity Logs
                                  </a>
                                </li>
                              </ul>
                              <div class="tab-content">
                                <div
                                  role="tabpanel"
                                  class="tab-pane active"
                                  id="favourite_added"
                                >
                                  <div class="">
                                    <p class="no-margin">No Announcements</p>
                                  </div>
                                </div>
                                <div
                                  role="tabpanel"
                                  class="tab-pane "
                                  id="media_activity"
                                >
                                  <div class="activity-feed"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
