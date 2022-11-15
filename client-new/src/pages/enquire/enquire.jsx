import React from 'react'
import './enquire.scss'
import {RiUser3Fill,RiPhoneFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'
const Enquire = () => {
  return (
    <>
    <div className='enquire ps-lg-5 pe-lg-5 pt-lg-5 ps-md-2 pe-md-0 pt-md-0 '>
      <div className='row p-lg-5 p-md-0 w-100 p-0'>
<div className='col-lg-7 col-md-5 details'>
<h2 className='ps-lg-5 ps-md-2 text-wrap'>What can Gohoardings help you with?</h2>
 

<div className='d-flex flex-row p-xxl-0 m-lg-5 m-xxl-5 m-md-0'> <img src="./gohoarding/requirement.png" alt="" className='p-auto m-auto'/>
<div className='row ps-5'>
    <div className='col'><h6 className='fs-bold'>Have a requirement ?</h6>
</div>
<h6 className='text-muted'>Tell us your requirements and we will reach you with the brainstormed, creative and most effective solutions instantly.</h6>
</div>
</div>
<div className='d-flex flex-row p-xxl-0 m-lg-5 m-xxl-5 m-md-0'> <img src="./gohoarding/query.png" alt="" className='m-auto'/>
<div className='row ps-5'>
    <div className='col'><h6 className='fs-bold'>Have a query ?</h6></div>
    <h6 className='text-muted'>Feel free to write to us. Our reps are right there to answer them all. </h6>
</div>
</div>
<div className='d-flex flex-row p-xxl-0 m-lg-5 m-xxl-5 m-md-0'> <img src="./gohoarding/suggestion.png" alt="" className='m-auto'/>
<div className='row ps-5 '>
    <div className='col'>
    <h6 className='fs-bold'>Have a suggestion?</h6>
    </div>
     <h6 className='text-muted'>Your feedback and suggestions are always welcome. We are constantly striving to be better than what we were yesterday. </h6>
</div>
</div>
</div>
<div className='col-lg-5 col-md-7 justify-content-center mb-md-2 me-md-0  ms-2 me-0 mt-1 mb-2 ms-md-0 ms-md-0  m-lg-0  '>
<form className='text-center bg-dark rounded p-3  '>
    <h2 className='no-wrap text-light'>Request a Call Back</h2>
    <h6 className='text-light text-start pt-2'>*All fields are required</h6>
           <div className='logo mt-4 mb-3 w-auto h-100'>
           <i className='bg-light p-2  border-0 rounded-start'><RiUser3Fill /></i>
            <input
            className='messageUser border-0 rounded-end w-100'
            type='text'
            />
           </div>
           <div className='logo mt-4 mb-3 w-auto h-100 rounded-pill'>
           <i className='bg-light p-2 border-0 rounded-start '><RiPhoneFill /></i>
            <input
            className='messageUser border-0 rounded-end w-100'
            type='number'
            />
           </div>
           <div className='logo mt-4 mb-3 w-auto h-100'>
           <i className='bg-light p-2 border-0 rounded-start'><MdEmail/></i>
            <input
            className='messageUser border-0  rounded-end w-100'
            type='email'

            />
           </div>
           <div className='logo mt-4 mb-3 w-auto h-100'>
           <textarea rows="4" name="comment" cols="30" form="usrform" className='messageUser border-0 w-100 h-auto rounded' defaultValue="Enter the Text">
          </textarea>
           </div>

           <input className='submit-button border-0 rounded w-100' type="submit" value="SEND REQUEST"/>
</form>
</div>
      </div>
    </div>
    </>
  )
}

export default Enquire
