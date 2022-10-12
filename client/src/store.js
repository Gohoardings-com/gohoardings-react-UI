import { createStore, applyMiddleware, combineReducers} from 'redux'
import { createSlice} from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { registerReducer,loginReducer, UserReducer,SearchReducer, CartReducer}  from './reducer/adminReducer';
import cart from './reducer/adminReducer'


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
    register : registerReducer,
    login:loginReducer,
    user:UserReducer,
    search:SearchReducer,
    cart:cart,
    item: CartReducer,
    LoginStatus:authSlice.reducer,
})

function savetoLocal(state)  {
    try{
        const serialSate = JSON.stringify(state);
        localStorage.setItem('persistantState', serialSate)
    }catch(e){
        return e.message
    }
}
 function loadFromLocaStroge(){
    try{
        const loadSate = localStorage.getItem('persistantState')
        if(loadSate === null) return undefined;
        return JSON.parse(loadSate)
    }catch(e){
        console.log(e);
        return undefined;
    }
}

const middleware = [thunk];

export const authActions = authSlice.actions
const store = createStore(
    reducer,
    loadFromLocaStroge(),
    composeWithDevTools(applyMiddleware( ...middleware))

)

store.subscribe(() => savetoLocal(store.getState()))

export default store;