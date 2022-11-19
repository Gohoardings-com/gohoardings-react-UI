import React,{useEffect, useState, useReducer, createContext} from 'react'
import instance from './Axios';


export const AccountContext = createContext(null);
const reducer = (state, action) => {
    if(action.type === 'INCR'){
      state = state + 1;
    }
    if(state > 0 && action.type === 'DECR'){
      state = state - 1;
    }
    return state
  };
  var initalState;
  
const ApiContext = ({children}) => {
    const [person,setPerson] = useState();
    useEffect(() => {
        const item = async() =>{
            const {data} = await instance.get(`cart/useritems`)
         setPerson(data[0].item)
      
         initalState =  person;
        }
        item()
    },[])
    const [state, addRemove] = useReducer(reducer, initalState)
useEffect(() =>{
  setPerson(person)
},[])
  return (
    <AccountContext.Provider value={{
       person,
       addRemove
    }}>
        {children}
    </AccountContext.Provider>
  )
}

export default ApiContext
