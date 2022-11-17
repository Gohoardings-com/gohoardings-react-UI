import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsListCheck } from 'react-icons/bs';
import { MdChecklist } from 'react-icons/md';
import { add,remove} from '../../reducer/adminReducer';
import { AccountContext } from '../../Apis/ApiContext';
import { mediawithcity } from '../../action/adminAction';
import { useDispatch, useSelector } from 'react-redux';
import "./Service.scss"
import Newbar from '../../Components/Navbar/Navbar'
import instance from '../../Apis/Axios';
import { useParams,useNavigate } from 'react-router-dom';
import CartPattern from './MultiCartItem';
import SingleCartIcon from './SingleCartIcon';
import MediaFilter from './MediaFilter';

const SearchData = () => {
  const dispatch = useDispatch()
  const { category_name, city_name } = useParams();
  const {addRemove} = useContext(AccountContext)
  const data = useSelector((state) => state.search.search)
  const [posts, setPosts] = useState([])
  const [list, setList] = useState(true)
  const navigate = useNavigate()
  const getData = async () => {
    // dispatch(mediawithcity(category_name ?? 'traditional-ooh-media', city_name ?? 'Delhi'));
    
    const {data} = await instance.post("media/searchMedia",{
      category_name : category_name,
      city_name : city_name
    })
    console.log(data);
    setPosts(data);
  }



  const addonCart = async (e) => {
    
    const {data} =  await instance.post('cart/addOnCart', {
        mediaid: e.code,
        mediatype: e.category_name,
      })
        if(data.message == 'Login First'){
          navigate('/login')
        }else{
          addRemove({type:"INCR"})
          add(e)
        }
    }

    const removefroCart = async (obj) => {
      console.log(obj);
      await instance.post('cart/deleteFromCart', {
        code: obj.code,
      })
      addRemove({type:"DECR"})
      remove(obj)
    }


    /***************************************************************** */

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
          console.log(element);
          element.isDelete = 1;
          setPosts(data);
        }
      });
    };


  /***************************************************************** */

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Newbar />
<div className='container-fluid'>
        <h1 className=' col-sm-12 text-center pt-3 text-white'>Traditional OOH</h1>
        <div className=' col-12 col-sm-12 p-5 py-xxl-5 mt-5 mb-5 bg-light h-75' > </div>
        <div className='row'>
           <MediaFilter/>
            <div className='col-12 col-sm-10 text-white-50 rounded'>
                <div className='d-flex flex-row pt-2'>
                    <h6 className='font-italic text-light text-white'>Showing all result</h6>
                    <select className='select form-select bg-dark text-white-50 rounded ms-auto'
                        aria-label='Default select example'>
                        <option selected>Selected Location</option>
                    </select>
                    {list  ? <BsListCheck className='img-fluid' style={{ height: "30px", width: "30px" }} onClick={() => setList(!list)} /> :  <MdChecklist className='img-fluid' style={{ height: "30px", width: "30px" }} onClick={() => setList(!list)} />}

                </div>
                <div className='overflow text-center'>
             {list ? <CartPattern posts={posts} dispatch={dispatch} addonCart={addonCart} removefroCart={removefroCart} add={add} remove={remove}/> :<SingleCartIcon posts={posts} dispatch={dispatch} addonCart={addonCart} removefroCart={removefroCart} add={add} remove={remove}/> }
                
            </div>
            <div className='d-flex flex-row bd-highlight mb-3 pt-3'>
                    <button className='text-center border-warning text-white-50  text-bg-dark text-warning w-25  ms-auto'>View More </button>
                    <button className='text-center border-light ms-3 text-white-50 text-bg-dark text-light w-25'>Back to Top ^</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SearchData
