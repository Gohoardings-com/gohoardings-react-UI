import { createSlice } from "@reduxjs/toolkit"

export const loginReducer = (state = {login:[]}, action) =>{
    switch (action.type) {
        case "LoginRequest":
            return{
                loading:true,
            }
        case "LoginSuccess":
            return{
                loading:false,
                login:action.payload
            }
        case "LoginFail": 
            return{
                loading:null,
                login:"No data Found"
            }
        default:
            return state;
    }
}
export const registerReducer = (state = {register:[]}, action) =>{
    switch (action.type) {
        case "RegisterRequest":
            return{
                loading:true,
            }
        case "RegisterSuccess":
            return{
                loading:false,
                register:action.payload
            }
        case "RegisterFail": 
            return{
                loading:null,
                register:"No data Found"
            }
        default:
            return state;
    }
}
export const UserReducer = (state = {user:[]}, action) =>{
    switch (action.type) {
        case "UserRequest":
            return{
                loading:true,
            }
        case "UserSuccess":
            return{
                loading:false,
                user:action.payload
            }
        case "UserFail": 
            return{
                loading:null,
                user:"No data Found"
            }
        default:
            return state;
    }
}

export const SearchReducer = (state = {search:{}}, action) =>{
    switch (action.type) {
        case "MediaWithCityRequest":
            return{
                loading:true,
            }
        case "MediaWithCitySuccess":
            return{
                loading:false,
                search:action.payload
            }
        case "MediaWithCityFail": 
            return{
                loading:null,
                search:"No data Found"
            }
        default:
            return state;
    }
}

const cartSlice = createSlice({
    name:'cart',
    initialState : [],
    reducers:{
        add(state, action)  {
            // Redux : 
        state.push(action.payload)
        },
        remove(state, action){
           return  state.filter(item => item.id !== action.payload.id);

        },
    },
})

export const CartReducer = (state = {items:{}}, action) =>{
    switch (action.type) {
        case "CartRequest":
            return{
                loading:true,
            }
        case "CartSuccess":
            return{
                loading:false,
                items:action.payload
            }
        case "CartFail": 
            return{
                loading:false,
                items:"No data Found"
            }
        default:
            return state;
    }
}

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer