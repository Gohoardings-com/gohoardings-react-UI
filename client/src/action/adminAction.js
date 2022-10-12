
import axios from "axios";
axios.defaults.withCredentials = true;

const url = 'http://localhost:8080/api/v1'



export const registerContact = (name, email, phone, password, conpass) => async (dispatch) => {
    try{
        dispatch({type: "RegisterRequest"});

        const config = { headers : { "Content-Type" : "application/json"}};

        const {data} = await axios.post(`${url}/registration/register`, {name ,email, phone, password, conpass}, config)
    
        dispatch({ type: "RegisterSuccess", payload: data});

    }catch(error){
        dispatch({type: "RegisterFail", payload: error.response.data })
    }
}


export const LoginContact = ( email, password ) => async (dispatch) => {
    try{
        dispatch({type: "LoginRequest"});
        const config = { headers : { "Content-Type" : "application/json"}};

        const {data} = await axios.post(`${url}/registration/login`, {email, password},config)
    
        dispatch({ type: "LoginSuccess", payload: data});

    }catch(error){
        
        dispatch({type: "LoginFail", payload: error.response.data })
    }
}


export const userDetails =  async (dispatch) => {
    try{
        dispatch({type: "LoginRequest"});
        const config = { headers : { "Content-Type" : "application/json"}};

        const {data} = await axios.get(`${url}/registration/user`,config)
    
        dispatch({ type: "LoginSuccess", payload: data});

    }catch(error){
        
        dispatch({type: "LoginFail", payload: error.response.data })
    }
}

export const mediawithcity  = (category_name, city_name)  => async (dispatch) =>{
    try{
        dispatch({type: "MediaWithCityRequest"});
        const config = { headers : { "Content-Type" : "application/json"}};

        const {data} = await axios.post(`${url}/media/inventory`,{category_name:"traditional-ooh-media", city_name:"Delhi"},config)
        dispatch({ type: "MediaWithCitySuccess", payload: data});

    }catch(error){
        
        dispatch({type: "MediaWithCityFail", payload: error.response.data })
    }
}

export const cartitems = () => async (dispatch) => {
    try{
        dispatch({type: "CartRequest"});
        const config = { headers : { "Content-Type" : "application/json"}};
        const {data} = await axios.get(`${url}/cart/cartitems`,config)
        console.log(data);
        dispatch({ type: "CartSuccess", payload: data});
    }catch(error){
        
        dispatch({type: "CartFail", payload: error.response.data })
    }
}


