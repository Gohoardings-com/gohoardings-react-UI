import instance from '../apis/axios'

export const userDetails =  async (dispatch) => {
    try{
        dispatch({type: "UserRequest"});
        const config = { headers : { "Content-Type" : "application/json"}};

        const {data} = await instance.get(`cart/useritems`,config)
    
        dispatch({ type: "UserSuccess", payload: data});

    }catch(error){
        
        dispatch({type: "UserFail", payload: error.response })
    }
}



export const mediawithcity  = (category_name, city_name)  => async (dispatch) =>{
    try{
        console.log("hello");
        console.log(category_name, city_name);
        dispatch({type: "MediaWithCityRequest"});
        const config = { headers : { "Content-Type" : "application/json"}};

        const {data} = await instance.post(`media/searchMedia`,category_name,city_name)
        dispatch({ type: "MediaWithCitySuccess", payload: data});

    }catch(error){
        
        dispatch({type: "MediaWithCityFail", payload: error.response.data })
    }
}
export const priceSubIllu  = (category_name,price,illumination,table,city)  => async (dispatch) =>{
    try{
      
        dispatch({type: "MediaWithCityRequest"});
        const config = { headers : { "Content-Type" : "application/json"}};

        const {data} = await instance.post(`filter/categoryfilter`,{category_name,price,illumination,table,city},config)

        dispatch({ type: "MediaWithCitySuccess", payload: data});

    }catch(error){
        
        dispatch({type: "MediaWithCityFail", payload: error.response.data })
    }
}



export const cartitems = () => async (dispatch) => {
    try{
        dispatch({type: "CartRequest"});
        const config = { headers : { "Content-Type" : "application/json"}};
        const {data} = await instance.get(`cart/cartitems`,config)
        dispatch({ type: "CartSuccess", payload: data});
    }catch(error){
        
        dispatch({type: "CartFail", payload: error.response.data })
    }
}