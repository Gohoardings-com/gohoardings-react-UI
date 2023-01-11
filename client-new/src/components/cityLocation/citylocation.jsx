import React from 'react';
import {BiCurrentLocation} from 'react-icons/bi';
import axios from 'axios';


const Citylocation = ({InputGroup, setValue}) => {

 
const data = async() => {
  await navigator.geolocation.getCurrentPosition(function(position) {
    const lat =  position.coords.latitude
  const long =  position.coords.longitude
   const options = {
    method: 'GET',
    url: 'https://geocodeapi.p.rapidapi.com/GetNearestCities',
    params: {latitude:lat, longitude:long, range: '0'},
    headers: {
      'X-RapidAPI-Key': 'f42c4a8dd6msh221d0cad4302dfap1c8219jsn7ad70aeb7432',
      'X-RapidAPI-Host': 'geocodeapi.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
    const city = response.data[0]
    setValue(city.City);
 
  }).catch(function (error) {
return false
  });
    })

}  

  return (
    <>
    <InputGroup.Text className="basic-addon">
     <BiCurrentLocation className="basic-addon-icon" onClick={data}/>
     </InputGroup.Text>
    </>
  )
}

export default Citylocation