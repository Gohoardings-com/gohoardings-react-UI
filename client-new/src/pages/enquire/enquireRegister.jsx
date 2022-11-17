import React,{useState} from 'react';
import {RiUser3Fill,RiPhoneFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md';
import instance from '../../apis/Axios';

const EnquireRegister = () => {
    const [inpots, setInputs] = useState({
        fullName: "",  phone: "",  email: "",  comment: ""
    })
    const [posts,setPosts] = useState([])

    const handelChange = async (e) => {
        setInputs({ ...inpots, [e.target.name]: e.target.value})
    }

    const userData = async (e) => {
        e.preventDefault()
        const {data} = await instance.post("enquiry/message",{
            name:inpots.fullName,
            email:inpots.email,
            phone:inpots.phone,
            message:inpots.comment,
        })
        setPosts(data);
    }

  return (
    <div className='col-lg-5 col-md-7 justify-content-center mb-md-2 me-md-0  ms-2 me-0 mt-1 mb-2 ms-md-0 ms-md-0  m-lg-0  '>
<form className='text-center bg-dark rounded p-3' onSubmit={userData}>
    <h2 className='no-wrap text-light'>Request a Call Back</h2>
    <h6 className='text-light text-start pt-2'>*All fields are required</h6>
           <div className='logo mt-4 mb-3 w-auto h-100'>
           <i className='bg-light p-2  border-0 rounded-start'><RiUser3Fill /></i>
            <input
            className='messageUser border-0 rounded-end w-100'
            type="text"
            placeholder='Enter Your Full Name'
            name='fullName'
            value={inpots.fullName}
            onChange={handelChange}/>
           </div>
           <div className='logo mt-4 mb-3 w-auto h-100 rounded-pill'>
           <i className='bg-light p-2 border-0 rounded-start '><RiPhoneFill /></i>
            <input
            className='messageUser border-0 rounded-end w-100'
            type='number'

                                placeholder='Enter Your Full Name'
                                name='phone'
                                value={inpots.phone}
                                onChange={handelChange}/>
           </div>
           <div className='logo mt-4 mb-3 w-auto h-100'>
           <i className='bg-light p-2 border-0 rounded-start'><MdEmail/></i>
            <input
            className='messageUser border-0  rounded-end w-100'
            type='email'
            placeholder='Enter Your Full Name'
            name='email'
            value={inpots.email}
            onChange={handelChange}/>
           </div>
           <div className='logo mt-4 mb-3 w-auto h-100'>
           <textarea rows="4" name="comment" cols="30" form="usrform" className='messageUser border-0 w-100 h-auto rounded' defaultValue="Enter the Text" value={inpots.comment}
            onChange={handelChange} >
          </textarea>
           </div>
{posts && <h1>{posts.message}</h1>}
           <input className='submit-button border-0 rounded w-100' type="submit" value="SEND REQUEST"/>
</form>
</div>
  )
}

export default EnquireRegister