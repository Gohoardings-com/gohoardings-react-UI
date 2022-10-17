import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AccountContext } from "../../context/Context";
import { authActions } from "../../store";
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import instance from '../../APIS/Axios'
import { userDetails } from "../../action/adminAction";
import UserDetail from "./UserDetail";


const NewNAvbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.LoginStatus);
  const [posts, setPosts] = useState()
  const [show, setShow] = useState(false);

  // console.log(hh.length);

  // console.log(profile);
  // Fetch user detai;ls from database

  // User LogOut Function
  // User LogOut Function
  const handelLogout = async () => {
    const data = await instance.post("registration/logout", null, {
      withCredentials: true,
    });
    if (data.status == 200) {
      localStorage.clear();
      sessionStorage.clear()
      isLoggedIn = true;
      return data
    }
    return new Error("Unable to logOut Please Try Again");
  };

 
  const onCart = async () => {
    navigate("/cart");
  };

  useEffect(() => {
    dispatch(userDetails)
  }, [])
  const logOut = async () => {
    handelLogout().then(() => dispatch(authActions.logout()))
  }
  useEffect(() => {

    const getUser = async () => {
      const { data } = await instance.get("registration/user", {
        withCredentials: true
      })
      setPosts(...data)
    }
    getUser().then(() => dispatch(authActions.login()))
  }, [])
  
  const home = async () => {
    navigate('/')
  }
  return (
    <>
      {/* <Navbar expand="lg px-md-4">
        <div className="container-fluid py-md-4 px-md-4">
          <Navbar.Brand href="#home" id="home">
            <div className="brand-logo">
              <img src="./images/logo.png" alt="" srcSet="" className="brand" />
              <div className="text-light">
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
           <UserDetails posts={posts} logOut={logOut}/>
          </Navbar.Collapse>
        </div>
      </Navbar> */}
       <Navbar expand="lg px-md-4">
        <div className="container-fluid py-md-4 px-md-4">
        <Dropdown onMouseLeave={() => setShow(false)}
      onMouseOver={() => setShow(true)}>
      <Dropdown.Toggle variant="transparent"  id="dropdown-basic" >   
          <Navbar.Brand >
            <img src="./images/logo.png" alt="" srcSet="" className="brand" onClick={home} />
          </Navbar.Brand>
          </Dropdown.Toggle>  
         
          </Dropdown> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
           <UserDetail posts={posts} logOut={logOut}/>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Dropdown.Menu show={show} className="w-100 ">
      <div className="container-fluid bg-body">
                  <div className="row">
                    <div className="col-6">
                      <h6>BROWSE MEDIA</h6>
                    </div>
                    <div className="col-3">
                      <h6>GOHOARDINGS</h6>
                    </div>
                    <div className="col-3">SUPPORT & FAQ</div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <ul className="list-none">
                        <li>Traditional OOH</li>
                        <li>Mall Media</li>
                        <li>Airport Media</li>
                        <li>Multiplex Advertising</li>
                        <li>Office Branding</li>
                        <li>Bus & Auto Branding</li>
                      </ul>
                    </div>
                    <div className="col-3">
                      <ul className="list-none">
                        <li>Digital Screen</li>
                        <li>InFlight Branding</li>
                        <li>Transit Media</li>
                      </ul>
                    </div>
                    <div className="col-3">
                      <ul className="list-none">
                        <li>About Us</li>
                        <li>Team</li>
                        <li>News & Media</li>
                        <li>Testimonials</li>
                        <li>Case Studies</li>
                      </ul>
                    </div>
                    <div className="col-3">
                      <ul className="list-none">
                        <li>Contact Us</li>
                        <li>Blogs</li>
                        <li>FAQs</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h6>Get Instant Quote</h6>
                      <h1>Call us on: +91 7777871717</h1>
                    </div>
                    <div className="col-6">
                      <button className="btn btn-primary float-end">
                        Write To Us
                      </button>
                    </div>
                  </div>
      </div>
      </Dropdown.Menu>
    </>
  );
};

export default NewNAvbar;
