import React from 'react'
import {MdOutlineMail} from 'react-icons/md'
import {TbPhone,TbBrandWhatsapp} from 'react-icons/tb'
import "bootstrap/dist/css/bootstrap.min.css";
import './header.scss'
const Header = () => {
  return (
    <div className='header d-flex flex-row justify-content-center p-0 m-0'>
<div className='icon-div ps-3 pe-3'>
   <MdOutlineMail className='mb-1 text-white'/> <a className='heading-text' id='test' href="mailto:info@gohoardings.com"> info@gohoardings.com</a>

</div>
<div className='icon-div ps-3 pe-3 '>
<TbPhone className='mb-1 text-white'/> <a className='heading-text' href="tel:+917777871717">+91 7777 871717</a>

</div>
<div className= "icon-div ps-3 pe-3">
   <TbBrandWhatsapp className='mb-1 text-white'/><a className='heading-text'  href="https://web.whatsapp.com/">WhatsApp</a>

</div>
    </div>
  )
}

export default Header
