import React,{useEffect, useState, useReducer} from 'react'
import instance from '../../apis/Axios';
import { AccountContext } from '../../apis/ApiContext';
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../store';
import './navbar.css'
import { useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login'
import Nav from "react-bootstrap/Nav";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useContext } from 'react';

const clientId = '993204517237-7ugkv9g11enginni1jruiidpg0ck618h.apps.googleusercontent.com';

const UserDetail = () => {
  // const dispatch = useDispatch();
  //   const {state} = useContext(AccountContext)
  //   const navigate = useNavigate();
  //   const { isLoggedIn } = useSelector((state) => state.LoginStatus);
  //   const [posts, setPosts] = useState()


  //   const handelLogout = async () => {
  //     const data = await instance.post("registration/logout", null, {
  //       withCredentials: true,
  //     });
  //     if (data.status == 200) {
  //       localStorage.clear();
  //       sessionStorage.clear()
  //       isLoggedIn = true;
  //       return data
  //     }
  //     return new Error("Unable to logOut Please Try Again");
  //   };

 

  //   const logOut = async () => {
  //     handelLogout().then(() => dispatch(authActions.logout()))
  //   }
  //   useEffect(() => {
  
  //     const getUser = async () => {
  //       const { data } = await instance.get("registration/user", {
  //         withCredentials: true
  //       })
  //       setPosts(...data)
  //     }
  //     getUser().then(() => dispatch(authActions.login()))
  //   }, [])
    
  //   const onCart = async () => {
  //       navigate('/cart')
  //     }
  return (
   <>
   
                <Nav.Link
                  className="navLink ps-31"
                  href="/register"
                >
                  Register
                </Nav.Link>
                <Nav.Link
                  className="navLink ps-3"
                  href="/login"
                >
                  Sign In
                </Nav.Link>
              
   </>
  )
}

export default UserDetail;
