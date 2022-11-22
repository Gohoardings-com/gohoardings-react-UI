import React,{useEffect, useState, useReducer} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../store';
import { useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login'
import Nav from "react-bootstrap/Nav";
import instance from "../../apis/Axios";
import { AccountContext } from '../../apis/ApiContext';
import { MdOutlineShoppingCart } from 'react-icons/md'
import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


const clientId = '993204517237-7ugkv9g11enginni1jruiidpg0ck618h.apps.googleusercontent.com';

const UserDetail = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const {person} = useContext(AccountContext)
    const { isLoggedIn } = useSelector((state) => state.LoginStatus);
    const [posts, setPosts] = useState()

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

    const logOut = async () => {
      handelLogout().then(() => dispatch(authActions.logout()))
    }

    const getUser = async () => {
      const { data } = await instance.get("registration/user", {
        withCredentials: true
      })
      setPosts(...data)
    }
    useEffect(() => {
      getUser().then(() => dispatch(authActions.login()))
      setPosts(posts)
    }, [])
    
  return (
   <>
    {posts ? <>
                <a href='/cart' className='text-decoration-none text-black mt-sm-1'>
                <MdOutlineShoppingCart className='cart ms-sm-3 navLink'/> {person}
                </a>
                <Dropdown>
      <Dropdown.Toggle variant="transparent border-0" id="dropdown-basic" className="navLink ps-3">
      {posts.firstname.toUpperCase()}
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="/">Profile</Dropdown.Item>
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
              </> : <>
                <Nav.Link
                  className="text-dark normal"
                  href="/login"
                >
                  Sign In
                </Nav.Link>
              </>}
   </>
  )
}

export default UserDetail;
