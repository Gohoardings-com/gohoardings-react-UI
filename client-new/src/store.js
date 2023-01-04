import { createStore, applyMiddleware, combineReducers} from 'redux'
import { createSlice} from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import {SearchReducer, UserReducer, IconFilterReducer} from './reducer/adminReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const authSlice = createSlice({
    name:'auth',
    initialState:{isLoggedIn:false},
    reducers:{
        login(state){
            state.isLoggedIn = true
        },
        logout(state){
            state.isLoggedIn = true;
        }
    }
})

const reducer = combineReducers({
    user:UserReducer,
    search:SearchReducer,
    iconfilter:IconFilterReducer,
//     cart:cart,
//     item: CartReducer,
    LoginStatus:authSlice.reducer,
})

async function savetoLocalStorage(state) {
    try{
        const serialsedState = JSON.stringify(state);
        localStorage.setItem('persistantState',serialsedState)
    }catch(e){
        console.warn(e);
    }
}

function loasdFromLocalStorage(){
    try{
        const serialsedState = localStorage.getItem('persistantState');
        if(serialsedState === null) return undefined;
        return JSON.parse(serialsedState)
    }catch(e){
        console.log(e);
        return undefined;
    }
}

const middleware = [thunk];

export const authActions = authSlice.actions
const store = createStore(
    reducer,  
    loasdFromLocalStorage(),
    composeWithDevTools(applyMiddleware( ...middleware))
)

store.subscribe(() => savetoLocalStorage(store.getState()))

export default store;