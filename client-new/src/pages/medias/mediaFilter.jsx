import React,{useEffect, useState } from "react";
import instance from "../../apis/Axios";

const MediaFilter = () => {
    const [category, setcategory] = useState([]);
    const [query, setQuery] = useState("");
   
      let ILLUMINATION = [
        { label: "Nonlit", value: " Nonlit" },
        {
          label: "Frontlit",
          value: "Frontlit",
        },
        {
          label: "Backlit",
          value: "Backlit",
        },
        {
          label: "Ambilit",
          value: "Ambilit",
        },
        {
          label: "LED",
          value: "LED",
        },
        {
          label: "Digital",
          value: "Digital",
        }
      ];
      
      const holdingtype = async() =>{
        const {data} = await instance.get('filter/categoryfilter')
        setcategory(data);
      }
      useEffect(() =>{
        holdingtype();
      },[])

  return (
    <div className="col-sm-2 col-12">
                        <div className="col pt-4" >
                            <div className='mediaName me-1 rounded-top ms-1 mt-5 p-2'>
                                <h6 className="text-uppercase text-center">Select Media (5)</h6>
                            </div>
                            <div className='bg-light rounded-bottom rounded-1'>
                                <input type="serach" placeholder="Search.." className=' w-100 mt-2 p-2 rounded-3' />
                                <div className="rowCheck row m-1">
                                  <ul>
                                    {ILLUMINATION.map((item) =>(
                                  <li className="w-100">
                                        <input className=" ms-2 " type="checkbox"></input>
                                        <span className=" ms-3">{item.label}</span>
                                    </li>

                                    ))}
                                    
                                  </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-4" >
                            <div className='mediaName me-1 rounded-top ms-1 mt-1 p-2'>
                                <h6 className="text-uppercase text-center">Sub category(5)</h6>
                            </div>
                            <div className="rowCheck bg-light row rounded-bottom me-1 ms-1 mb-1 p-1">
                               <ul>
                               { category.filter(obj => {
                if (query == '') {
                  return obj;
                } else if (obj.name.toLowerCase().includes(query.toLowerCase())  ) {
                  return obj;
                }
              }).map((illum,i) =>(
                <>
                  <input type="checkbox" id={i} 
                  className="me-1"
                        value={illum.name}
                        />
                  <span className="text-wrap">{illum.name}</span>
                  <br />
                </>

                ))} 
                               </ul>
                            </div>
                        </div>
                        <div className="col pt-4" >
                            <div className=' mediaName mt-1 ms-1 me-1 p-2 rounded-top'>
                                <h6 className="text-uppercase text-center">Illumination(5)</h6>
                            </div>

                            <div className="rowCheck bg-light row rounded-bottom mb-1 ms-1 me-1 p-1">
                               <ul>
                               <li className="w-100">
                                    <input className=" ms-2 " type="checkbox"></input>
                                    <span className=" ms-3">UniPole</span>
                                </li>
                                <li className="w-100">
                                    <input className=" ms-2" type="checkbox"></input>
                                    <span className=" ms-3">UniPole</span>
                                </li>
                                <li className="w-100">
                                    <input className=" ms-2" type="checkbox"></input>
                                    <span className=" ms-3">UniPole</span>
                                </li>
                                <li className="w-100">
                                    <input className=" ms-2" type="checkbox"></input>
                                    <span className=" ms-3">UniPole</span>
                                </li>
                                <li className="w-100">
                                    <input className=" ms-2" type="checkbox"></input>
                                    <span className=" ms-3">UniPole</span>
                                </li>
                                <li className="w-100">
                                    <input className=" ms-2" type="checkbox"></input>
                                    <span className=" ms-3">UniPole</span>
                                </li>
                                <li className="w-100">
                                    <input className=" ms-2" type="checkbox"></input>
                                    <span className=" ms-3">UniPole</span>
                                </li>
                                <li className="w-100">
                                    <input className=" ms-2" type="checkbox"></input>
                                    <span className=" ms-3">UniPole</span>
                                </li>
                                <li className="w-100">
                                    <input className=" ms-2" type="checkbox"></input>
                                    <span className=" ms-3">UniPole</span>
                                </li>
                                <li className="w-100">
                                    <input className=" ms-2" type="checkbox"></input>
                                    <span className=" ms-3">UniPole</span>
                                </li>
                                <li className="w-100">
                                    <input className=" ms-2" type="checkbox"></input>
                                    <span className=" ms-3">UniPole</span>
                                </li>
                                <li className="w-100">
                                    <input className=" ms-2" type="checkbox"></input>
                                    <span className=" ms-3">UniPole</span>
                                </li>
                                <li className="w-100">
                                    <input className=" ms-2" type="checkbox"></input>
                                    <span className=" ms-3">UniPole</span>
                                </li>
                                <li className="w-100">
                                    <input className=" ms-2" type="checkbox"></input>
                                    <span className=" ms-3">UniPole</span>
                                </li>
                               </ul>
                            </div>
                        </div>
                    </div>
  )
}

export default MediaFilter
