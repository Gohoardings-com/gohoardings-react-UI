import React, { useState } from "react";
import { useEffect } from "react";
import { profileDetails } from "../../apis/apis";
import Fixednavbar from "../../components/navbar/fixednavbar";
import NewNAvbar from "../../components/navbar/navbar";
import ChangePassword from "./changePassword";
import Companey from "./companey";
import "./profile.scss";
import UserProfile from "./userProfile";

const Profile = () => {
  const [profile, setProfile] = useState(false);
  const [companey, setCompaney] = useState(false);
  const [posts, setPosts] = useState([]);

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  useEffect(() => {
    
    topFunction();
  }, []);

  const userData = async () => {
    const data = await profileDetails();
    setPosts(data.message);
  };

  const showCompaney = () => {
    setCompaney(true);
    setProfile(false);
  };

  const showProfile = () => {
    setProfile(true);
    setCompaney(false);
  };

  const showDashboard = () => {
    setProfile(false);
    setCompaney(false);
  };

  const [payment, setPayment] = useState(false);
  const [voise, setVoise] = useState(false);

  

  const showPlan = () => {
    setPayment(false);
    setVoise(false);
  };

  const showPayment = () => {
    setPayment(true);
    setVoise(false);
  };
  
  const showInvoise = () => {
    setVoise(true);
    setPayment(false);
  };

  useEffect(() => {
    userData();
  }, []);
  return (
    <>
    <Fixednavbar/>
    <div className=" container-xxl  container-xl container-lg container-md my-5">
        <div className="row  p-5">
          <div className="col-md-3">
            <div className="card">
              <img
                  src="../../clientslogo/user-profile.png"
                className="card-img-top p-3 pb-2"
                alt="..."
              />
              <div className="card-body text-light  row text-center pt-0 pb-2">
                <div className="col pe-0 ">
                  <div className="p-1 border prf-btn " onClick={showProfile}>
                    Profile
                  </div>
                </div>
                <div className="col ps-0">
                  <div className="p-1 border  prf-btn" onClick={showCompaney}>
                    Companey
                  </div>
                </div>
              </div>
            </div>
            <div className="list-group card mt-5" id="list-tab" role="tablist">
              <a
                className="list-group-item list-group-item-action active"
                id="list-home-list"
                data-bs-toggle="list"
                href="#list-home"
                role="tab"
                aria-controls="list-home"
                onClick={showDashboard}
              >
                My Dashboard
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-profile-list"
                data-bs-toggle="list"
                href="#list-profile"
                role="tab"
                aria-controls="list-profile"
              >
                Media Plan
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-messages-list"
                data-bs-toggle="list"
                href="#list-messages"
                role="tab"
                aria-controls="list-messages"
              >
                Campaigns
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-settings-list"
                data-bs-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="list-settings"
              >
                Proforma invoice
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-messages-list"
                data-bs-toggle="list"
                href="#list-messages"
                role="tab"
                aria-controls="list-messages"
              >
                Invoice & Payments
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-settings-list"
                data-bs-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="list-settings"
              >
                Announcement
              </a>
            </div>
          </div>

          {companey ? (
            <>

              <div className="col-md-9">
                <div className="card">
                  <div className=" row p-3">
                    <div className="col-md-6">
                      
                      <div className="form-group">
                        <label for="company" className="control-label">
                          Company
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="company"
                          value="0"
                        />
                      </div>
                      <div className="form-group">
                        <label for="vat" className="control-label">
                          VAT Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="vat"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <label for="phonenumber">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          name="phonenumber"
                          id="phonenumber"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label" for="website">
                          Website
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="website"
                          id="website"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="city">City</label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          id="city"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <label for="address">Address</label>
                        <textarea
                          name="address"
                          id="address"
                          className="form-control"
                          rows="4"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label for="zip">Zip Code</label>
                        <input
                          type="text"
                          className="form-control"
                          name="zip"
                          id="zip"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <label for="state">State</label>
                        <input
                          type="text"
                          className="form-control"
                          name="state"
                          id="state"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div
                        className="form-group"
                        app-field-wrapper="custom_fields[customers][10]"
                      >
                        <label
                          for="custom_fields[customers][10]"
                          className="control-label"
                        >
                          PAN
                        </label>
                        <input
                          type="text"
                          id="custom_fields[customers][10]"
                          name="custom_fields[customers][10]"
                          className="form-control"
                          data-fieldto="customers"
                          data-fieldid="10"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div
                        className="form-group"
                        app-field-wrapper="custom_fields[customers][11]"
                      >
                        <label
                          for="custom_fields[customers][11]"
                          className="control-label"
                        >
                          GSTIN
                        </label>
                        <input
                          type="text"
                          id="custom_fields[customers][11]"
                          name="custom_fields[customers][11]"
                          className="form-control"
                          data-fieldto="customers"
                          data-fieldid="11"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <h3>Billing &amp; Shipping</h3>
                      <hr className="no-mbot" />
                    </div>
                         
                    <div className="col-md-6">
                      <h4 className="mbot15 mtop20">Billing Address</h4>
                      <div className="form-group">
                        <label for="billing_street">Street</label>
                        <textarea
                          name="billing_street"
                          id="billing_street"
                          className="form-control"
                          rows="4"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label for="billing_city">City</label>
                        <input
                          type="text"
                          className="form-control"
                          name="billing_city"
                          id="billing_city"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <label for="billing_state">State</label>
                        <input
                          type="text"
                          className="form-control"
                          name="billing_state"
                          id="billing_state"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <label for="billing_zip">Zip Code</label>
                        <input
                          type="text"
                          className="form-control"
                          name="billing_zip"
                          id="billing_zip"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <label for="billing_country">Country</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h4 className="mbot15 mtop20">Shipping Address</h4>
                      <div className="form-group">
                        <label for="shipping_street">Street</label>
                        <textarea
                          name="shipping_street"
                          id="shipping_street"
                          className="form-control"
                          rows="4"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label for="shipping_city">City</label>
                        <input
                          type="text"
                          className="form-control"
                          name="shipping_city"
                          id="shipping_city"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <label for="shipping_state">State</label>
                        <input
                          type="text"
                          className="form-control"
                          name="shipping_state"
                          id="shipping_state"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <label for="shipping_zip">Zip Code</label>
                        <input
                          type="text"
                          className="form-control"
                          name="shipping_zip"
                          id="shipping_zip"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12 text-right mtop20">
<div className="form-group">
<button type="submit" className="btn btn-info">Update</button>
</div>
</div>
                  </div>
                </div>   
              </div>

              <Companey />

            </>
          ) : (
            <>
              <div className="col-md-6 ">
                {profile ? (
                  <>
                    <UserProfile posts={posts} />
                  </>
                ) : (
                  <>
                    <div className="card p-3 mid-card">
                      <p>Overview</p>

                      <div className="horizontal-tabs">
                        <ul
                          className="nav nav-tabs nav-tabs-horizontal mb-4"
                          role="tablist"
                        >
                          <li role="presentation" className="active">
                            <a
                              href="#booked_media"
                              aria-controls="booked_media"
                              role="tab"
                              data-toggle="tab"
                              aria-expanded="true"
                              onClick={showPlan}
                            >
                              <i className="fa fa-bullhorn menu-icon"></i> Booked
                              Plan
                            </a>
                          </li>
                          <li role="presentation" className="">
                            <a
                              href="#payment"
                              aria-controls="payment"
                              role="tab"
                              data-toggle="tab"
                              aria-expanded="false"
                              onClick={showPayment}
                            >
                              <i className="fa fa-window-maximize menu-icon"></i>{" "}
                              Payment
                            </a>
                          </li>
                          <li role="presentation" className="">
                            <a
                              href="#invoice"
                              aria-controls="invoice"
                              role="tab"
                              data-toggle="tab"
                              aria-expanded="false"
                              onClick={showInvoise}
                            >
                              <i className="fa fa-window-maximize menu-icon"></i>{" "}
                              Invoice
                            </a>
                          </li>
                        </ul>

                        <div className="tab-content">
                          <div
                            role="tabpanel"
                            className="tab-pane active"
                            id="booked_media"
                          >
                            <table
                              className="table dt-table table-announcements dataTable no-footer"
                              data-order-col="1"
                              data-order-type="asc"
                              id="DataTables_Table_0"
                            >
                              {voise ? (
                                <>
                                  <thead>
                                    <tr>
                                      <th>SNowtrwt</th>
                                      <th>Title</th>
                                      <th>Start Date</th>
                                      <th>End Date</th>
                                    </tr>
                                  </thead>
                                  No Invoise Record
                                </>
                              ) : (
                                <>
                                  {payment ? (
                                    <>
                                      <thead>
                                        <tr>
                                          <th>SNo</th>
                                          <th>Campaign</th>
                                          <th>Payment Mode</th>
                                          <th>Date</th>
                                        </tr>
                                      </thead>

                                      <tbody>
                                        {posts.campaign_name?(<>
                                          {posts.map((el,i) =>(
                                 <tr key={i+1}>
                                  <td>{i}</td>
                                  <td>{el.campaign_name.slice(-4)}</td>
                                  <td>{el.payment_status}</td>
                                  <td>{el.start_date.slice(0,10)}</td>
                              </tr>
                                ))}</>):(<>No Record Found</>)

                                        }
                                       
                                     
                                      </tbody>
                                    </>
                                  ) : (
                                    <>
                                      <thead>
                                        <tr>
                                          <th>SN.</th>
                                          <th>Title</th>
                                          <th>Start Date</th>
                                          <th>End Date</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {posts.media_type?(<>
                                        
                                          {posts.map((el,i) =>(
                                  <tr key={i+1}>
                                  <td>{i}</td>
                                  <td>{el.media_type}</td>
                                  <td>{el.start_date.slice(0,10)}</td>
                                  <td>{el.end_date.slice(0,10)}</td>
                              </tr>
                                ))}
                                        
                                        </>):(<> No Plan Found</>)

                                        }

                               
                                      </tbody>
                                    </>
                                  )}
                                </>
                              )}
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
                    <ChangePassword />
                  </>
                ) : (
                  <>
                    <div
                      className="widget card p-2  pb-4 "
                      id="widget-user_data"
                      data-name="User Widget"
                    >
                      <div className="panel_s user-data ">
                        <div className="panel-body home-activity">
                          <p className="bold">Activity</p>
                          <div className="clearfix"></div>
                          <hr className="hr-panel-heading" />
                          <div className="horizontal-scrollable-tabs">
                            <div className="horizontal-tabs">
                              <ul
                                className="nav nav-tabs nav-tabs-horizontal"
                                role="tablist"
                              >
                                <li role="presentation" className="active">
                                  <a
                                    href="#favourite_added"
                                    aria-controls="favourite_added"
                                    role="tab"
                                    data-toggle="tab"
                                    aria-expanded="true"
                                    className="med-text"
                                  >
                                    Saved Media
                                  </a>
                                </li>
                                <li role="presentation" className="">
                                  <a
                                    href="#media_activity"
                                    aria-controls="media_activity"
                                    role="tab"
                                    data-toggle="tab"
                                    aria-expanded="false"
                                    className="med-text"
                                  >
                                    Activity Logs
                                  </a>
                                </li>
                              </ul>
                              <div className="tab-content">
                                <div
                                  role="tabpanel"
                                  className="tab-pane active"
                                  id="favourite_added"
                                >
                                  <div className="">
                                    <p className="no-margin">No Announcements</p>
                                  </div>
                                </div>
                                <div
                                  role="tabpanel"
                                  className="tab-pane "
                                  id="media_activity"
                                >
                                  <div className="activity-feed"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
