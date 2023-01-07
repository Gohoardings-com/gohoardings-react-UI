

import React, { useEffect, useState } from "react";
import Slider from "./slider.jsx";
import "./icons.scss"
import { iconFiltersData } from "../../action/adminAction";
import { useDispatch, useSelector } from "react-redux";
import instance from "../../apis/axios.jsx";

const IconsSlection = ({  slice }) => {
  const dispatch = useDispatch()
  const [distance, Setdistance] = useState(0);
  const [datas,setData] = useState([])

  let hording = [];

  function multichecked(e) {
    if (e.currentTarget.checked) {
      hording.push(e.target.value)
    } else {
      // for (let i = 0; i < hording.length; i++) {
      // if (e.target.value == hording[i]) {
      var index = hording.indexOf(e.target.value)
      if (index > -1) { // only splice array when item is found
        hording.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
    
    setData(cat => [...cat, hording])
  }

  function HandleDistance(Dis) {
    Setdistance(Dis)
  }

  let Icons = [
    {
      name: "education",
      value: "./assests/map-icons/education.png",
      id: "cb1"
    },
    {
      name: "bar",
      value: "./assests/map-icons/bar.png",
      id: "cb2"
    },
    {
      name: "hotel",
      value: "./assests/map-icons/hotel.png",
      id: "cb3"
    },
    {
      name: "restaurant",
      value: "./assests/map-icons/restaurant.png",
      id: "cb4"
    },
    {
      name: "hospital",
      value: "./assests/map-icons/hospital.png",
      id: "cb5"
    },
    {
      name: "spa",
      value: "./assests/map-icons/spa.png",
      id: "cb6"
    },
    {
      name: "cinema",
      value: "./assests/map-icons/cinema.png",
      id: "cb7"
    },
    {
      name: "gym",
      value: "./assests/map-icons/gym.png",
      id: "cb8"
    },
  ];

  const distanceofMedia = [
    {
      name: 1,
      value: 1,
    },
    {
      name: 2,
      value: 2,
    },
    {
      name: 3,
      value: 3,
    },
    {
      name: 4,
      value: 4,
    },

  ]

  let uniqueValues = new Set();

  slice.forEach(el => {
    uniqueValues.add(el.mp_lat);
  });
  // JSON.stringify(uniqueValues)

  const submitfilters = async () => {

    const value = [...slice];
    const table = value[0].category_name;
    const city = value[0].city_name;
    const latitudes = slice.map(item => item.latitude);
  const minLatitude = Math.min(...latitudes);
  const maxLatitude = Math.max(...latitudes);

  let array = [...uniqueValues];
  let arrayJJson = JSON.stringify(array);
  let newString = arrayJJson.replace(/\[|\]/g, '');


  dispatch(iconFiltersData(distance, datas, table, city, minLatitude, maxLatitude , newString))

  }

  return (
    <>
      <div className="poi-items accordion-collapse collapse" id="collapseT2" data-bs-parent="#accordionTest">
        <div className="row poi-item">
          {Icons.map((icon) => (
            <div className="col-4 d-inline-block text-center pb-3 shadow-sm border position-relative collapsed" data-bs-toggle="collapse" data-bs-target={`#${icon.name}`} aria-expanded="false">
              <input type="checkbox" id={icon.id} value={icon.name} onClick={(e) => multichecked(e)} />
              <label for={icon.id}>
                <img src={icon.value} alt="N/A" name={icon.name} />
                </label>
                <span className="icone-name-map pb-2">{icon.name} </span>
            </div>
          ))}
        </div>
        
        <div className="distance p-2 m-3">
          <p className="m-1 mb-4 pb-2">Distance</p>
          <Slider Distance={distance} onChange={HandleDistance} />
          <div className="row pt-3 ps-3 km-distance">
            {distanceofMedia.map((dis) => {

              <div className="col-lg-3 col-sm-2 ps-1">{dis.name}</div>
            })}
            <div className="col-lg-3 col-sm-2 ps-2">0km</div>
            <div className="col-lg-3 col-sm-2 ps-2">1km</div>
            <div className="col-lg-3 col-sm-2 ps-3">2km</div>
            <div className="col-lg-3 col-sm-2 ps-4">3km</div>
          </div>
        </div>
      
                   
        <div className="text-center map-btn-more">
          <button className=" buttonload btn-hover" onClick={() => submitfilters()}>
            Apply
          </button>
          
      </div>
  
      </div>
    </>
  )
}

export default IconsSlection
