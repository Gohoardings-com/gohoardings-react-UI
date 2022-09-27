import { CLEAR_ERRORS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_ADMIN_FAIL, LOGIN_ADMIN_REQUIEST, LOGIN_ADMIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS} from "../consents/adminConsents";

import axios from "axios";
axios.defaults.withCredentials = true;

const url = 'http://localhost:8080/api/v1'

// export const adminLogin = (user) => async(dispatch)=>{
//         try{
//             dispatch({type: LOGIN_ADMIN_REQUIEST});

//             const config = { headers : { "Content-Type" : "application/json"}};

//             const { data } = await axios.post(`${url}/admin/login`, user, config)

//             dispatch({ type: LOGIN_ADMIN_SUCCESS, payload: data.result});

//         }catch(error){
//             dispatch({type: LOGIN_ADMIN_FAIL, payload: error.response })
//         }
// } 

export const getUser = ()=> async(dispatch)=>{
    try{
        dispatch({ type: "ProfileRequest"});

        const { data } = await axios.get(`${url}/user`,{  withCredentials:true});
        dispatch({ type: "ProfileSuccess", payload:data.result});
    }catch(err){
        dispatch({ type: "ProfileFail", payload: err.response.message})
    }
};



// export const logout = () => async(dispatch)=>{
//     try{
//         await axios.get(`${url}/users/logout`);

//         dispatch({type: LOGOUT_SUCCESS});
//     }catch(err){
//         dispatch({ type: LOGOUT_FAIL, payload: err.response.message})
//     }
// };


// // Clearing Errors
// export const clearErrors = () => async (dispatch) => {
//     dispatch({ type: CLEAR_ERRORS });
//   };

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

