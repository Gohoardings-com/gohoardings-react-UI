import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import { AiOutlineShoppingCart } from 'react-icons/ai'

const UserDetails = ({posts, logOut}) => {
    const cartItem = useSelector((state) => state.cart)
    const items = useSelector((state) => state.user.user);
    const navigate = useNavigate();
    const onCart = async () => {
        navigate('/cart')
      }
  return (
   <>
    <Nav className="ms-auto">
              <Nav.Link
                className="text-light normal"
                href="https://odoads.com/"
                target="_blank"
              >
                Odoads
              </Nav.Link>
              <Nav.Link
                className="text-light normal"
                href="https://www.gohoardings.com/blog/"
                target="_blank"
              >
                Blog
              </Nav.Link>
              <Nav.Link
                className="text-light normal"
                href="https://gohoardings.com/contact-us"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                className="text-light normal px-lg-3 round-circle"
                href="https://gohoardings.com/map-view"
              >
                Map View
              </Nav.Link>

              {posts ? (
                <>
                                <AiOutlineShoppingCart className='ms-sm-4 mt-sm-2 text-light normal'  style={{ width: "22px", height: "22px", color: 'white' }} onClick={onCart} /> : <h6 href='/cart' className='mt-sm-2 text-light normal' style={{ width: "22px", height: "22px", color: 'white' }} onClick={onCart}  >{items == "No data Found" || cartItem.length ==0  ? items.item[0].item+cartItem.length : cartItem.length }</h6>

                  <Nav.Link className="text-light normal" href="/profile">
                    {posts.firstname.toUpperCase()}
                  </Nav.Link>
                  <Nav.Link
                    className="text-light normal"
                    href="/"
                    onClick={logOut}
                  >
                    LogOut
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link className="text-light normal" href="/Signup">
                    Register
                  </Nav.Link>
                  <Nav.Link className="text-light normal" href="/Signin">
                    Sign In
                  </Nav.Link>
                </>
              )}
            </Nav>
   </>
  )
}

export default UserDetails
