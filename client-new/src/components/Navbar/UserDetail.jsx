import React,{useEffect, useState, useReducer} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../store';
import { useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login'
import Nav from "react-bootstrap/Nav";
import instance from "../../apis/Axios";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


const clientId = '993204517237-7ugkv9g11enginni1jruiidpg0ck618h.apps.googleusercontent.com';

const UserDetail = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
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
    useEffect(() => {
  
      const getUser = async () => {
        const { data } = await instance.get("registration/user", {
          withCredentials: true
        })
        setPosts(...data)
      }
      getUser().then(() => dispatch(authActions.login()))
    }, [])
    
    const onCart = async () => {
        navigate('/cart')
      }

      console.log(posts);
  return (
   <>
   
    {posts ? <>
                <AiOutlineShoppingCart className='cart ms-sm-4 mt-sm-2 text-light normal navLink '  onClick={onCart}  /> 
                <Dropdown>
      <Dropdown.Toggle variant="transparent border-0" id="dropdown-basic" className="navLink ps-3">
      {posts.firstname.toUpperCase()}
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2"   onClick={logOut}>

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
