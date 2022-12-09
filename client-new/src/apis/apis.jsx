import instance from "./axios";
export const clientId = '993204517237-7ugkv9g11enginni1jruiidpg0ck618h.apps.googleusercontent.com';

export const getAllCity = async() =>{
    const {data } = await instance.get("media/searchMedia");
    return(data);
}
export const logoutUser = async() =>{
    const data = await instance.post("registration/logout", null, {
        withCredentials: true,
    });
    return data;    
}
export const getCurrentuser =  async() =>{
    const {data} = await instance.get("registration/user", {
        withCredentials: true
      })
      return data
}
export const refreshToken = async() => {
    const {data} = await instance.get(`registration/login`,{
        withCredentials:true
      })
      return data
}
export const googleLogin = async(res) => {
    const {data} = await  instance.post("registration/googleSingUp", {
        profile: res.profileObj
      })
      return data
}

export const loginUser = async(email, password) => {
    const {data} = await instance.post('registration/login', {
        email: email, password: password
      })
      return data
}

export const registerUser = async(name, email, phone, password) => {
    const {data} = await instance.post('registration/register',{
        name,  email,phone, password 
      })
      return data
}

export const deleteCartItem = async(obj) => {
    const data=  await instance.post("cart/deleteFromCart", {
        code: obj,
      });
      console.log(data);
 return data
}

export const profileDetails = async() =>{
    const {data} =  await instance.get("registration/login", {   
      });
 
 return data
}