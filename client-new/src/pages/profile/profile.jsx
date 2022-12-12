import React, { useState } from "react";
import { useEffect } from "react";
import { profileDetails } from "../../apis/apis";
import NewNAvbar from "../../components/navbar/navbar";
import ChangePassword from "./changePassword";
import Companey from "./companey";
import "./profile.scss";
import UserProfile from "./userProfile";

const Profile = () => {
  const [profile, setProfile] = useState(false);
  const [companey, setCompaney] = useState(false);
  const [posts, setPosts] = useState([])

  const showProfile = () => {
    setProfile(!profile);
  };

  const userData = async() =>{
    const data = await(profileDetails());
    console.log(data);
    setPosts(data.message)
  }
console.log(posts);
  const showCompaney = () => {
    setCompaney(!companey);
  };
useEffect(() =>{
userData()
},[])

const [payment,setPayment]=useState(false)
const [voise,setVoise]=useState(false)

const showInvoise = () =>{
  setVoise(!voise)
}

const showPlan = () =>{

  setPayment(!payment);
}
const showPayment = ()=>{
setPayment(!payment);
}

  return (
    <>
    <NewNAvbar/>
    <div className=" container">
        <div className="row  p-5">
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
                My Dashboard
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-profile-list"
                data-bs-toggle="list"
                href="#list-profile"
                role="tab"
                aria-controls="list-profile"
              >
            Media Plan
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-messages-list"
                data-bs-toggle="list"
                href="#list-messages"
                role="tab"
                aria-controls="list-messages"
              >
                Campaigns
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-settings-list"
                data-bs-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="list-settings"
              >
               Proforma invoice
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-messages-list"
                data-bs-toggle="list"
                href="#list-messages"
                role="tab"
                aria-controls="list-messages"
              >
                Invoice & Payments
              </a>
              <a
                class="list-group-item list-group-item-action"
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
            <Companey/>
            </>
          ) : (
            <>
              <div className="col-md-6 ">
                {profile ? (
                  <>
                   <UserProfile posts={posts[0]}/>
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
                              onClick={showPlan}
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
                              onClick={showPayment}
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
                              onClick={showInvoise}
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
                              
                              {voise?(<>
                                <thead>
                                <tr>
                                  <th>SNowtrwt</th>
                                  <th>Title</th>
                                  <th>Start Date</th>
                                  <th>End Date</th>
                                </tr>
                              </thead>
                              No Invoise
                              </>):
                              (<> 
                              {payment? (<> 
                                <thead>
                                <tr>
                                  <th>SNo</th>
                                  <th>Campaign</th>
                                  <th>Payment Mode</th>
                                  <th>Date</th>
                                </tr>
                              </thead>
                            
                              <tbody>
                                {posts.map((el,i) =>(
                                 <tr key={i+1}>
                                  <td>{i}</td>
                                  <td>{el.campaign_name.slice(-4)}</td>
                                  <td>{el.payment_status}</td>
                                  <td>{el.start_date.slice(0,10)}</td>
                              </tr>
                                ))}
                            </tbody>


                              </>):
                              (<>    
                              <thead>
                                <tr>
                                  <th>SN.</th>
                                  <th>Title</th>
                                  <th>Start Date</th>
                                  <th>End Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                {posts.map((el,i) =>(
                                  <tr key={i+1}>
                                  <td>{i}</td>
                                  <td>{el.media_type}</td>
                                  <td>{el.start_date.slice(0,10)}</td>
                                  <td>{el.end_date.slice(0,10)}</td>
                              </tr>
                                ))}
                            </tbody></>)
                              }
                              </>)
                              }
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
                   <ChangePassword/>
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
