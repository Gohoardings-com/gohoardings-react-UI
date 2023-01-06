import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../store';
import { ToastContainer, toast } from "react-toastify";
import {useGoogleOneTapLogin} from 'react-google-one-tap-login'
import { GoogleLogout } from 'react-google-login'
import {useNavigate} from 'react-router-dom'
import { clientId, googleLogin, logoutUser, refreshToken } from '../../apis/apis';
import { AccountContext } from '../../apis/apiContext';
import { useContext } from 'react';
import { userDetails } from '../../action/adminAction';
import Dropdown from 'react-bootstrap/Dropdown';
import {useCookies} from 'react-cookie'
import { useAuth0 } from "@auth0/auth0-react";

const UserDetail = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { addRemove } = useContext(AccountContext);
  const { initalState } = useContext(AccountContext)
  const { isLoggedIn } = useSelector((state) => state.LoginStatus);
  const {user,loading} = useSelector((state) => state.user)
  const { logout } = useAuth0();

  useGoogleOneTapLogin({
    onSuccess:(response) => oneTap(response),
    onError:(response) =>  toast(response.message),
    googleAccountConfigs:{
      client_id:'1021765109404-jk482fa4sld64n34uktdai3rgra9g0el.apps.googleusercontent.com'
    }
   })
 
      // Google Login Request
      const oneTap = async (response) => {
        const  data  = await googleLogin(response);
        if (data.success == true) { 
          window.location.reload();
          localStorage.setItem(true, "long").then(() => dispatch(authActions.login()));
        }
      };

  let firstRender = true;
  const handelLogout = async () => {
    const data = await logoutUser()
    if (data.status == 200){
      isLoggedIn = true;
      return data
    }
    return new Error("Unable to logOut Please Try Again");
  };

  const profile = async() =>{
    navigate('/profile')
  } 
  const cart = async() =>{
    navigate('/cart')
  }

const getUser = async () => {

    dispatch(userDetails)
    addRemove({ type: "DECR" });

} 



  const logOut = async () => {
    sessionStorage.clear()
    localStorage.removeItem("true")
    logout()
    handelLogout().then(() => dispatch(authActions.logout()))
  }


  const refreshUser = async() =>{ 
      const data = await refreshToken()
   return data;
  }


  useEffect(() => {
     if(firstRender){
  firstRender = true
  getUser().then(() => dispatch(authActions.login()))
   }else{
    let interval = setInterval(() => {
      refreshUser().then(() => dispatch(authActions.login()))
    },6 * 24 * 3600000)
   return () => clearInterval(interval)
   }
  getUser()
  }, [])


  return (
    <>
{loading == false ? <div className='p-0 m-0  d-flex userDetail2 my-2 my-lg-0 '>
        <Dropdown className='login-profile'>
          <Dropdown.Toggle variant="transparent" className=" drop-togel">
          <img
                src="../../clientslogo/user-login-round.png"
                className="login-icon  pt-0 mb-1 "
              />
          </Dropdown.Toggle>
          
          <Dropdown.Menu className=" dropdown-menu-end pt-0 pb-0">
            <Dropdown.Item className="drop-item  rounded-top  ps-2 pt-2 pb-2" >{user[0].firstname.toUpperCase().substring(0, 12)}</Dropdown.Item>
            <hr className=" m-0"/>
              <Dropdown.Item onClick={profile} className="drop-item  ps-2 pt-2 pb-2">Profile</Dropdown.Item>
              <hr className=" m-0"/>
              <Dropdown.Item href="/" onClick={logOut} className="drop-item rounded-bottom  ps-2 pt-2 pb-2">
                <GoogleLogout
                  className="border-0 bg-transparent"
                  href="/"
                  clientId={clientId}
                  buttonText={"Logout"}
                  onLogoutSuccess={logOut}
                  icon={false}
                />
              </Dropdown.Item>
            </Dropdown.Menu>  
        </Dropdown>
        <div className="cart me-2" onClick={cart}>
          <span>
            <img src='../../gohoarding/new-icon/cart-icon.png' className='login-icon-cart' />
          </span>
          <span>{initalState}</span>
        </div>
      </div> :
        <Dropdown className="border-0  ms-2  pt-1 p-0 me-md-0  user-detail-login">
        <Dropdown.Toggle variant="transparent" className="pt-0 drop-togel">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2050/2050106.png"
            className="login-icon  pt-0 mb-1 "
          />
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu-end  p-0">
          <Dropdown.Item variant="transparent" className="rounded-top ps-2 pt-2 pb-2 drop-item " href="/login">
            Sign in
          </Dropdown.Item>
<hr className="p-0 m-0"/>
          <Dropdown.Item className="rounded-bottom ps-2 pt-2 pb-2 drop-item" href="/contact">
            Help?
          </Dropdown.Item>
        </Dropdown.Menu>
        <ToastContainer />
      </Dropdown>
      }
    </>
  )
}

export default UserDetail;
