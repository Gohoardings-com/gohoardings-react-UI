import React,{ useEffect,useState } from 'react'
import axios from 'axios';
const City = () => {
    const [city,setCity] = useState([])
    const getCity = async () => {
        const { data } = await axios.get(
          "http://localhost:8080/api/v1/media/searchMedia"
        );
        setCity(data);
      };
      useEffect(() =>{
        getCity()
      })
  return (
    <>
    {!city ? <h1>Loading</h1> : <>
    {city.length >> 0 && city.map((el) => (
        <h1 className='text-white'> Hoardings in {el.name}</h1>
    ))}
    </>}
    </>
  )
}

export default City
