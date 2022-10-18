import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store";
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import instance from '../../APIS/Axios'
import { userDetails } from "../../action/adminAction";
import UserDetail from "./UserDetail";
import Drop_Down_Image from "../DropDrown/Drop_Down_Image";


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
        <Dropdown
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
      <Drop_Down_Image show={show} setShow={setShow} Dropdown={Dropdown}/>
    </>
  );
};

export default NewNAvbar;
