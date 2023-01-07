import React,{useEffect, useState, useReducer, createContext} from 'react'
import instance from './Axios';
import { useStateWithCallbackLazy } from 'use-state-with-callback';


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
  
const Apicontext = ({children}) => {
    const [person,setPerson] = useStateWithCallbackLazy();
    useEffect(() => {
        const item = async() =>{
            const {data} = await instance.get(`cart/useritems`)
         setPerson = (data[0].item)
         initalState =  person;
        }
        item()
    },[])
    const [state, addRemove] = useReducer(reducer, initalState)

  return (
    <AccountContext.Provider value={{
       state,
       addRemove
    }}>
        {children}
    </AccountContext.Provider>
  )
}

export default Apicontext
