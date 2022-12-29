import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../store';
import { BiUserPlus } from 'react-icons/bi';
import { GoogleLogout } from 'react-google-login'
import {useNavigate} from 'react-router-dom'
import { clientId, getCurrentuser, logoutUser, refreshToken } from '../../apis/apis';
import Nav from "react-bootstrap/Nav";
import { AccountContext } from '../../apis/apiContext';
import { useContext } from 'react';
import { userDetails } from '../../action/adminAction';
import Dropdown from 'react-bootstrap/Dropdown';

const UserDetail = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { initalState } = useContext(AccountContext)
  const { isLoggedIn } = useSelector((state) => state.LoginStatus);
  const {user,loading} = useSelector((state) => state.user)
  
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
} 

// const logoutSession = async() =>{
//   const dataLocal =  sessionStorage.getItem("false") 
//       if(!dataLocal){
//         logOut()
//     }
//   }


// useEffect(() =>{
//   logoutSession()
// },[])

  const logOut = async () => {
    sessionStorage.clear()
    localStorage.clear()
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
<<<<<<< HEAD
      {loading == false ? <div className='p-0 m-0  d-flex userDetail my-2 my-lg-0 '>
        <Dropdown className='login-profile'>
          <Dropdown.Toggle variant="transparent" className=" btn-light rounded-pill ms-3 ">
            <h5 className='p-0 m-0 text-secondary'>{user[0].firstname.toUpperCase().substring(0, 1)}</h5>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={profile} >Profile</Dropdown.Item>
            <Dropdown.Item href="/" onClick={logOut}>
              <GoogleLogout
                className='border-0 bg-transparent'
                href="/"
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={logOut}
                icon={false}
              />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          <div className="cart ms-3  pb-2" onClick={cart}>
            <span>
              <img src='../../gohoarding/new-icon/cart-icon.png' className='login-icon-cart'/>
=======
      {posts ? (
        <div className="p-0 m-0  d-flex userDetail my-2 my-lg-0 ">
          <Dropdown className="login-profile ">
            <Dropdown.Toggle
              variant="transparent"
              className="  mb-2 drop-togel"
            >
                 <img
                src="https://cdn-icons-png.flaticon.com/512/1144/1144709.png"
                className="login-icon  pt-0 mb-1 "
              />
              {/* <h5 className="p-0 m-0 text-light">
                {posts.firstname.toUpperCase().substring(0, 1)}
              </h5> */}
            </Dropdown.Toggle>

            <Dropdown.Menu className=" dropdown-menu-end pt-0 pb-0">
            <Dropdown.Item className="drop-item  rounded-top  ps-2 pt-2 pb-2" >{posts.firstname.toUpperCase().substring(0, 12)}</Dropdown.Item>
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
          <div className="cart  me-2 " onClick={cart}>
            <span>
              <img
                src="../../gohoarding/new-icon/cart-icon.png"
                className="login-icon-cart "
              />
>>>>>>> 9419840d1516694db034679b0b68b24e76ca1267
            </span>
            <span>{initalState}</span>
          </div>
      </div> :
        <Nav.Link
          className="text-dark ms-3  pt-1 p-0 "
          href="/login"
        >
          <BiUserPlus className='login-icon  pt-0 mb-1 ' />

        </Nav.Link>
      }

    </>
  )
}

export default UserDetail;
