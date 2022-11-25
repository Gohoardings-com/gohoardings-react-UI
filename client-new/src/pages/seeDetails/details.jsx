import React,{useState, useEffect, useContext} from 'react'
import {RiUser3Fill} from 'react-icons/ri'
import { AccountContext } from '../../apis/ApiContext';
import { useParams, } from 'react-router-dom';
import {IoIosSettings,IoMdLocate} from 'react-icons/io';
import { GrMapLocation } from 'react-icons/gr';
import {useNavigate } from 'react-router-dom';
import './details.scss'
import { MdOutlineShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md'
import instance from '../../apis/Axios';

const Details = () => {
    const priceState = window.localStorage.getItem("user")
    const {category_name,meta_title} = useParams();
    const {addRemove} = useContext(AccountContext)
    const navigate = useNavigate()
    const [posts,setPosts] = useState([])

    const getMedia = async() =>{
        const {data} =await instance.post('product/product',{
            meta_title :meta_title,
            category_name:category_name
        })
        console.log(data);
        setPosts(data);
    }
    const locatetologin = async() =>{
        window.localStorage.setItem("locate",`/${meta_title}/${category_name}`)
        navigate('/login')
    }
    const addonCart = async (e) => {
        const {data} =  await instance.post('cart/addOnCart', {
            mediaid: e.code,
            mediatype: e.category_name,
          })
          if(data.message == 'Login First'){
            window.localStorage.setItem("locate",`/${meta_title}/${category_name}`)
            navigate('/login')
          }else{
            addRemove({type:"INCR"})
            add(e)}
        }
        const removefroCart = async (obj) => {
            console.log(obj);
            await instance.post('cart/deleteFromCart', {
              code: obj.code,
            })
            addRemove({type:"DECR"})
            remove(obj)
          }
      
          const add = (event) => {
            let data = [...posts];
            data.forEach((element) => {
              if (element.code == event.code) {
                console.log(element);
                element.isDelete = 0;
                setPosts(data);
              }
            });
          };
      
          const remove = (event) => {
            let data = [...posts];
            data.forEach((element) => {
              if (element.code == event.code) {
                element.isDelete = 1;
                setPosts(data);
              }
            });
          };
useEffect(() => {
    getMedia()
}, []);
  return (
   <>
<div className='detailsHeader d-flex flex-row justify-content-center w-100 p-0'>
<div className='icon-left-border ps-3 pe-3'>
   <RiUser3Fill className='mb-1 text-dark'/> <a className='heading-text text-dark' id='test' href="#media">About Media</a>

</div>
<div className='icon-left-border ps-3 pe-3 '>
<IoIosSettings className='mb-1 text-dark'/> <a className='heading-text text-dark' href="#highlights">Highlights</a>

</div>
<div className= "icon-left-border ps-3 pe-3">
<IoMdLocate className='mb-1 text-dark'/> <a className='heading-text text-dark' href="#location">Location</a>
</div>
    </div>
  <div className='container-fluid'>
  </div>
{!posts? <>
<h1>Loading... Please wait</h1>
</>:<>
{posts.map((item,i) =>(
    <div className='conatiner-fluid'>
    <div className='row mt-sm-5  ms-sm-5 ps-sm-5 me-sm-5 pe-sm-5'>
        <div className='col '>
        <div className='maindivbordermediadetails rounded-3 p-2'>
        <img src={item.thumb.startsWith("https") ? item.thumb :`https://${(item.mediaownercompanyname.trim().split(' ').slice(0,2).join('_')).toLowerCase()}.odoads.com/media/${(item.mediaownercompanyname.trim().split(' ').slice(0,2).join('_')).toLowerCase()}/media/images/new${item.thumb}`} alt='About media' className='w-100 h-auto rounded-3 img-fluid ' />
        </div>
    
       {/* Map Section */}
       <div className='mt-3'>
            <div className='bg-primary p-2' id='location'>
            <h4 className='text-light'>Media Location</h4>
            </div>
            <h6 className='mt-3 text-muted'>Address  : <span className='text-dark'>{item.areadescription}</span></h6>
            <map></map>
            </div>
        </div>
        <div className='col ms-5 me-5 maindivbordermediadetails p-2 mb-2 rounded-2' id='media'>
          <div>
         <div className='d-flex'>
         < h5 className='text-center pt-3 fw-bolder'>{item.page_title}</ h5>
         {item.userid == null || item.isDelete == null || item.userid != null && item.isDelete == 1 ?
                                                        <MdOutlineShoppingCart onClick={() => addonCart(item)} className='m-4' /> : <> <MdOutlineRemoveShoppingCart onClick={() => removefroCart(item)} className='m-4' /></>}
         </div>
          <div className='row'>
          <div className='col pt-4'>
          <h6 className=' text-muted'>Code :<span className='text-dark'> {item.code}</span></h6>
          <h6 className='fw-bold overflow-wrap'>Price: {!priceState ? <a onClick={locatetologin} className='text-decoration-none'>Please Login first</a> : item.price}</h6>
          </div>
          <div className='col pt-4'>
         <a href='/map' className=' text-decoration-none'>
         <GrMapLocation className='ms-5'/>
         <h6 className=' text-primary fw-bold text-nowrap text-center pe-3 pt-1' id='highlights'>See at Map</h6>
         </a>
          </div>
          </div>
          <div className='mt-5 singlemediashow' >
            <div className='bg-primary p-2' >
            <h4 className='text-light'>Highlights</h4>
            </div>
            <div className='d-flex flex-row mt-4 pb-2 mediaAllDetails'>
                < h6 className='fw-bold'>Media Type</ h6>
                <span className="ms-auto input-group-text bg-success mediatype">{item.subcategory}</span>
            </div>
            <div className='d-flex flex-row mt-4 pb-2 mediaAllDetails'>
                < h6 className='fw-bold'>Height X Width</ h6>
                <span className="ms-auto input-group-text" >{item.size}</span>
            </div>
            <div className='d-flex flex-row mt-4 pb-2 mediaAllDetails'>
                < h6 className='fw-bold'>Illumination</ h6>
                <span className="ms-auto input-group-text">{item.illumination}</span>
            </div>
            <div className='d-flex flex-row mt-4 pb-2 mediaAllDetails'>
                < h6 className='fw-bold'>FTF</ h6>
                <span className="ms-auto input-group-text" >{item.ftf}</span>
            </div>
            <div className='d-flex flex-row mt-4 pb-2 mediaAllDetails'>
                < h6 className='fw-bold'>Total Area</ h6>
                <span className="ms-auto input-group-text" >{item.area}</span>
            </div>
            <div className='d-flex flex-row mt-4 pb-2 mediaAllDetails'>
                < h6 className='fw-bold'>Additional information</ h6>
            </div>
               < h6 className='pt-3'>{item.companyaddress}</ h6>
          </div>
          </div>
         
            {/* Foam for enquiry */}
            <div className='mt-5'>
        <h4 className='text-muted'>Get A Free <span className='text-dark'>Consulation</span></h4>
        <div className=''>
            <form>
                <input placeholder='Full Name' className='p-3 rounded-3 w-auto mb-2'/>
                <input placeholder='Mobile' className='p-3 rounded-3 w-auto ms-sm-4 ms-lg-0 ms-md-0 ms-xl-4 mb-2 '/>
                <input placeholder='Email Id' className='p-3 rounded-3 w-auto  mb-2'/>
                <input placeholder='City' className='p-3 rounded-3 w-auto ms-sm-4  ms-lg-0 ms-md-0 ms-xl-4 mb-2'/>
                <input placeholder='Write Review' className=' w-100 h-auto pt-3 pb-3 mt-2 rounded-3 mb-2'/>
                <input className='w-100 fw-bold  mt-3 detailsSumbitButton border-0 p-3 rounded-5' type="submit" value="Send request"/>
            </form>
        </div>
        </div>
        </div>
    </div>
</div>
))}
</>}
   </>
  )
}

export default Details
