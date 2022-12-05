import React,{useEffect, useState, useReducer, createContext} from 'react'
import instance from './axios';


export const AccountContext = createContext(null);

const ApiContext = ({children}) => {

  var [initalState, setInitalState] = useState(0)

  const item = async() =>{
    const {data} = await instance.get(`cart/useritems`)
    setInitalState(data[0].item);
   return initalState;
}

  useEffect(() => {    
      item()
    },[])

  const reducer = (state, action) => {
    if(action.type === 'INCR'){
      state = state + 1;
    }
    if(state > 0 && action.type === 'DECR'){
      state = state - 1;
    }
    return state
  };

   const [state, addRemove] = useReducer(reducer, (item()))

  return (
    <AccountContext.Provider value={{
      initalState,
       addRemove,
    }}>
        {children}
    </AccountContext.Provider>
  )
}



export default ApiContext
