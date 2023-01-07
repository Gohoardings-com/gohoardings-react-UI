import React,{useEffect, useState, useReducer} from 'react'
import instance from '../../Apis/Axios';
import { AccountContext } from '../../Apis/apicontext';
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../store';
import { useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login'
import Nav from "react-bootstrap/Nav";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useContext } from 'react';

const clientId = '993204517237-7ugkv9g11enginni1jruiidpg0ck618h.apps.googleusercontent.com';

const UserDetail = () => {
  const dispatch = useDispatch();
    const {state} = useContext(AccountContext)
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
  return (
   <>
    {posts ? <>
                <AiOutlineShoppingCart className='cart ms-sm-4 mt-sm-2 text-light normal'  onClick={onCart}  /> : <h6 href='/cart' className='cart mt-sm-2 text-light normal'>{state}</h6>
                <Nav.Link
                  className="text-light normal"
                  href="/"
                >
                  {posts.firstname.toUpperCase()}
                </Nav.Link>
                <Nav.Link
            
                  href="/"
                  onClick={logOut}
                >
                 <GoogleLogout
                  className="bg-black p-0 text-light normal"
                  href="/"
  clientId={clientId}
  buttonText={"Logout"}
  onLogoutSuccess={logOut}
  icon={false}
 />
{/*gf*/}
                </Nav.Link>
              </> : <>
                <Nav.Link
                  className="text-light normal"
                  href="/register"
                >
                  Register
                </Nav.Link>
                <Nav.Link
                  className="text-light normal"
                  href="/login"
                >
                  Sign In
                </Nav.Link>
              </>}
   </>
  )
}

export default UserDetail;
