import React,{useEffect, useState } from "react";
import Slider from "./slider.jsx";
import "./icons.scss"

const IconsSlection = () => {
  const [ Distance, Setdistance] = useState(0);
  const [images, setImages] =useState([])
    
  function HandleDistance(Dis) {
    Setdistance(Dis)
    console.log(Dis);
  }
  let Icons = [
    {
      name: "education",
      value: "./assests/map-icons/education.png",
      id:"cb1"
      },
    {
      name: "bar",
      value: "./assests/map-icons/bar.png",
      id:"cb2"
      },
    {
      name: "hotel",
      value: "./assests/map-icons/hotel.png",
      id:"cb3"
      },
    {
      name: "restaurant",
      value: "./assests/map-icons/restaurant.png",
      id:"cb4"
      },
    {
      name: "hospital",
      value: "./assests/map-icons/hospital.png",
      id:"cb5"
      },
    {
      name: "spa",
      value: "./assests/map-icons/spa.png",
      id:"cb6"
      },
    {
      name: "spa",
      value: "./assests/map-icons/cinema.png",
      id:"cb7"
      },
    {
      name: "gym",
      value: "./assests/map-icons/gym.png",
      id:"cb8"
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

const iconfilter =(e) =>{
    console.log(e);
  
}

  return (
   <>
    <div className="row poi-item">
    {Icons.map((icon) =>(
        <div className="col-4 d-inline-block text-center py-lg-4 py-sm-2 shadow-sm border position-relative collapsed" data-bs-toggle="collapse" data-bs-target={`#${icon.name}`} aria-expanded="false">
      <input type="checkbox" id={icon.id} />
      <label for={icon.id}><img src={icon.value} alt="N/A"  name={icon.name} /></label>
      </div>
    ))}
  </div>
   <div className="distance p-2 m-3">
   <p className="m-1 mb-4 pb-2">Distance</p>
   <Slider Distance={Distance} onChange={HandleDistance}/>
   <div className="row pt-3 ps-3 km-distance">
    {distanceofMedia.map((dis) =>{

     <div className="col-lg-3 col-sm-2 ps-1">{dis.name}</div>
    })}
     <div className="col-lg-3 col-sm-2 ps-2">0km</div>
     <div className="col-lg-3 col-sm-2 ps-2">1km</div>
     <div className="col-lg-3 col-sm-2 ps-3">2km</div>
     <div className="col-lg-3 col-sm-2 ps-4">3km</div>
   </div>
 </div>
   </>
  )
}

export default IconsSlection
