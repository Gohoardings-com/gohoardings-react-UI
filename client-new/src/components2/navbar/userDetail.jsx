import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../store';
import { BiUserPlus } from 'react-icons/bi';
import { GoogleLogout } from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { clientId, getCurrentuser, logoutUser, refreshToken } from '../../apis/apis';
import Nav from "react-bootstrap/Nav";
import { AccountContext } from '../../apis/apiContext';
import { useContext } from 'react';
import { userDetails } from '../../action/adminAction';
import Dropdown from 'react-bootstrap/Dropdown';
import { useCookies } from 'react-cookie';


const UserDetail = () => {
  // const navigate = useNavigate()
  // const dispatch = useDispatch();
  // const { initalState } = useContext(AccountContext)
  // const { isLoggedIn } = useSelector((state) => state.LoginStatus);
  // const { user, loading } = useSelector((state) => state.user)

  // const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);


  // let firstRender = true;
  // const handelLogout = async () => {
  //   const data = await logoutUser()
  //   if (data.status == 200) {
  //     isLoggedIn = true;
  //     return data
  //   }
  //   return new Error("Unable to logOut Please Try Again");
  // };

  // const profile = async () => {
  //   navigate('/profile')
  // }
  // const cart = async () => {
  //   navigate('/cart')
  // }
  // // console.log();
  // const getUser = async () => {
  //   dispatch(userDetails)
  // }
  // const dataLocal = localStorage.getItem("false")

  // const logoutSession = async () => {
  //   window.onload = async () => {
  //     if (dataLocal === "short") {
  //       localStorage.clear()
  //       handelLogout().then(() => dispatch(authActions.logout()))
  //      // window.location.reload();

  //     }
  //   }
  // }

  // logoutSession()

  // // useEffect(() => {
    
  // // }, [])

  // const logOut = async () => {
  //   localStorage.clear()
  //   handelLogout().then(() => dispatch(authActions.logout()))
  // }


  // const refreshUser = async () => {
  //   const data = await refreshToken()
  //   return data;
  // }


  // useEffect(() => {
  //   if (firstRender) {
  //     firstRender = true
  //     getUser().then(() => dispatch(authActions.login()))
  //   } else {
  //     let interval = setInterval(() => {
  //       refreshUser().then(() => dispatch(authActions.login()))
  //     }, 6 * 24 * 3600000)
  //     return () => clearInterval(interval)
  //   }
  //   getUser()
  // }, [])


  return (
    <>
<<<<<<< HEAD
      <div className='p-0 m-0  d-flex userDetail2 my-2 my-lg-0 '>
=======
    <div className='p-0 m-0  d-flex userDetail2 my-2 my-lg-0 '>
>>>>>>> e5ba1e3c83f28141d6a22400cf25042065b118ef
        <Dropdown className='login-profile'>
          <Dropdown.Toggle variant="transparent" className=" btn-light rounded-pill ms-3 ">
            <h5 className='p-0 m-0 text-secondary'>A</h5>
          </Dropdown.Toggle>
          <Dropdown.Menu>
<<<<<<< HEAD
            <Dropdown.Item  >Profile</Dropdown.Item>
=======
            <Dropdown.Item >Profile</Dropdown.Item>
>>>>>>> e5ba1e3c83f28141d6a22400cf25042065b118ef
            <Dropdown.Item >
              <GoogleLogout
                className='border-0 bg-transparent'
                // href="/"
                clientId={clientId}
                buttonText={"Logout"}
                // onLogoutSuccess={logOut}
                icon={false}
              />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="cart ms-3  pb-2" >
          <span>
            <img src='../../gohoarding/new-icon/cart-icon.png' className='login-icon-cart' />
          </span>
          <span>0</span>
        </div>
      </div> :
        <Nav.Link
          className="text-dark ms-3  pt-1 p-0 "
          // href="/login"
        >
          <img
                src="https://cdn-icons-png.flaticon.com/512/1144/1144709.png"
                className="login-icon  pt-0 mb-1 "
              />
<<<<<<< HEAD
        </Nav.Link>

=======
        </Nav.Link>   
>>>>>>> e5ba1e3c83f28141d6a22400cf25042065b118ef
    </>
  )
}

export default UserDetail;
