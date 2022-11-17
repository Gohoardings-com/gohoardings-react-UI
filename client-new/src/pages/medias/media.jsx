import React, { useState, useEffect } from 'react'
import './media.scss';
import { useParams,useNavigate } from 'react-router-dom';
import instance from '../../apis/Axios'
import { MdLocationOn, MdChecklist } from 'react-icons/md'
import { MdOutlineShoppingCart } from 'react-icons/md'
import SingleCard from './singleCard';
import MultiCard from './multiCard';
import MediaFilter from './mediaFilter';
import Medialogo from '../../components/medialogo';

const Media = () => {
    const [show, setShow] = useState(false)
    const { category_name, city_name } = useParams();
    // const {addRemove} = useContext(AccountContext)
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const getData = async () => {
      // dispatch(mediawithcity(category_name ?? 'traditional-ooh-media', city_name ?? 'Delhi'));
      const {data} = await instance.post("media/searchMedia",{
        category_name : category_name,
        city_name : city_name
      })
      setPosts(data);
    }
  
  
  
    // const addonCart = async (e) => {
      
    //   const {data} =  await instance.post('cart/addOnCart', {
    //       mediaid: e.code,
    //       mediatype: e.category_name,
    //     })
    //       if(data.message == 'Login First'){
    //         navigate('/login')
    //       }else{
    //         addRemove({type:"INCR"})
    //         add(e)
    //       }
    //   }
  
    //   const removefroCart = async (obj) => {
    //     console.log(obj);
    //     await instance.post('cart/deleteFromCart', {
    //       code: obj.code,
    //     })
    //     addRemove({type:"DECR"})
    //     remove(obj)
    //   }
  
  
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
  
  console.log(posts);
    /***************************************************************** */
  
    useEffect(() => {
      getData()
    }, [])
    return (
        <>
            <div className='container-fluid pt-3  mediabackground'>
               <Medialogo category_name={category_name} posts={posts}/>
                <div className="row mt-3 rounded  ms-3 ps-3 ps-5 pe-5">
                  <MediaFilter/>
                    <div className="col-12 col-sm-10 rounded">
                        <div className='row mediaName rounded-top '>
                            <div className='col-sm-10 col-9'>
                                <h3 className='mt-2'>{category_name.toUpperCase()}</h3>
                            </div>
                            <div className='col-1'>
                                <MdLocationOn className='h-75 w-auto mt-1' />
                            </div>
                            <div className='col-1'>
                                <MdChecklist onClick={(e) => setShow(!show)} className='h-75 w-auto mt-1' />
                            </div>
                        </div>
                        <div className='overflow  rounded'>
                            <div className='container-fluid'>
                                {!show ? <>     
                                      <SingleCard MdOutlineShoppingCart={MdOutlineShoppingCart} posts={posts}/>
                                    </> : <>
                                    <MultiCard MdOutlineShoppingCart={MdOutlineShoppingCart} posts={posts}/>
                                   </>}
                            </div>
                        </div>
                    <div  class="button offset-4 row pt-3 pb-3" >
                        <button class="w-25 buttonload btn-hover"><i aria-hidden="true" class="fa fa-caret-down"></i>View More </button>
                    <button class="w-25 ms-5 buttonload btn-hover" ><i  aria-hidden="true" class="fa fa-long-arrow-up"></i> Back to Top </button>
                    </div>
                </div>
                    </div>
            </div>
        </>
    )
}

export default Media
