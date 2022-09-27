import React,{useState} from 'react'
import DateRangeComp from '../../Components/Datepicker/DateRangeComp.jsx'
import axios from 'axios'

const SearchMedia = ({totalDays}) => {
    const [category, setCategory] = useState([])
    const [city, setCity] = useState([])
    const [getcity, setgetCity] = useState([])
    

const getCity = async()  => {
    const {data} = await axios.get("http://localhost:8080/auth/v1/media/searchMedia")
    setCity(data);
}
const getData  = async () => {
    const {data} =  await axios.post("http://localhost:8080/auth/v1/media/inventory",{
        category_name : category,
        city_name : getcity
    })  

}
 

  return (
    <div className="search">
              <img
                src="./images/Hoardings.png"
                alt=""
                srcSet=""
                className="mt-4 ps-5 mobile-hide"
              />
              <img
                src="./images/Hoardings.png"
                className="scale mt-4 mobile-hide"
                alt=""
                srcSet=""
              />
              <div className="location">
                <div className="container mt-3">
                  <div className="row">
                    <div className="col-xl-3 col-lg-5 col-md-5 col-sm-12 col-12">
                      <div className="input-group mb-3 rounded-pill overflow-hidden border">
                      <span
                          className="input-group-text border-0 pe-1"
                          id="basic-addon1"
                        >
                          <img src="./images/search.svg" alt="" />
                        </span>
                        <input
                          type="search"
                          className="form-control hide-focus border-0"
                          placeholder="Search"
                          onClick={getCity}
                          aria-label="Enter your City.."
                          aria-describedby="basic-addon1"
                        /> 
                          <select
          onChange={(e) => {
               setgetCity(e.target.value);
          }}
        >
          {city.map((obj) => (
            <option value={obj.name}>{obj.name}</option>
          ))}
        </select>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-7 col-md-7 col-sm-7 col-7">
                      <div className="input-group mb-3 rounded-pill overflow-hidden border">
                        {/* <span
                          className="input-group-text border-0 pe-1"
                          id="basic-addon1"
                        >
                          <img src="./images/search.svg" alt="" />
                        </span> 
                        <input
                          type="search"
                          className="form-control hide-focus border-0"
                          placeholder="Search"
                          
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        /> */}
                            <label  className="input-group-text border-0 pe-1">Media Category:</label>
                <select   className="form-control hide-focus border-0" onChange={e => setCategory(e.target.value)} >
                    <option value="None" >None</option>
                    <option value="traditional-ooh-media" >traditional-ooh-media</option>
                    <option value="digital-media" >digital-media</option>
                    <option value="transit-media" >transit-media</option>
                    <option value="mall-media" >mall-media</option>
                    <option value="airport-media" >airport-media</option>
                    <option value="inflight_media" >inflight_media</option>
                    <option value="office-media" >office-media</option>
                </select>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-7 col-md-7 col-sm-5 col-5">
                    <DateRangeComp />
                    </div>
                    <div className="col-xl-2 col-lg-5 col-md-5 col-sm-12 col-12">
                      <div className="input-group mb-3 rounded-pill overflow-hidden border">
                        <span
                          className="input-group-text border-0 pe-1"
                          id="basic-addon1"
                        >
                          <img src="./images/search.svg" alt="" />
                        </span>
                        <input
                          type="submit"
                          className="form-control hide-focus border-0"
                          placeholder="Search"
                          onClick={getData}
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default SearchMedia;
