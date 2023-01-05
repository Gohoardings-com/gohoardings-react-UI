import instance from './axios'
export const clientId = '993204517237-7ugkv9g11enginni1jruiidpg0ck618h.apps.googleusercontent.com';

export const  ILLUMINATION = [
    { label: "Nonlit", value: "Nonlit" },
    {label: "Frontlit", value: "Frontlit"},
    {label: "Backlit",value: "Backlit"},
    {label: "Ambilit",value: "Ambilit"},
    {label: "LED",value: "LED"},
    {label: "Digital",value: "Digital"}
  ];

  export const CityNameImage = [    
    {
      label: "In Flight Branding",
    
      value: "inFlight-branding",
      srcImg: ".././images/airport.jpg",
    },
    {
      label: "Multiplex Advertising",
    
      value: "multiplex-advertising",
      srcImg: ".././images/tradition.jpg",
    },
    {
      label: "Tradition OOH Medai ",
      value2: "Traditional-OOH-Media",
      value: "traditional-ooh-media",
      srcImg: ".././images/tradition.jpg",
      Link:`/traditional-ooh-media/delhi`
    },
    {
      label: "Digital OOH Media",
      value: "digital-media",
      srcImg: ".././images/digit.jpg",
     Link:`/digital-media/delhi`
    },
    {
      label: "Mall Media",
      value: "mall-media",
      srcImg: ".././images/mall.jpg",
      Link:`/mall-media/delhi`
    },
    {
      label: "Airport Branding",
      value: "airport-media",
      srcImg: ".././images/airport.jpg",
      Link:`/airport-media/delhi`
    },
    {
      label: "Office Branding", 
      value: "office-media",
      value2:"office-branding",
      srcImg: ".././images/office.jpg",
      Link:`/office-branding/delhi`
    },
    {
      label: "Transit Media",
      value: "transit-media",
      srcImg: ".././images/transit.jpg",
      Link:`/transit-media/delhi`
    },
  ];

export const getAllCity = async(value) =>{
    const {data } = await instance.post("media/citys", {value});
    return(data);
};

export const logoutUser = async() =>{
    const data = await instance.post("registration/logout", null, {withCredentials: true});
    return data;    
}

export const refreshToken = async() => {
    const {data} = await instance.get(`registration/logout`,{withCredentials:true})
      return data
}

export const googleLogin = async(res) => {
    const {data} = await  instance.post("registration/googleSingUp", res)
      return data
}


export const loginUser = async(email, password) => {
    const {data} = await instance.post('registration/login',{email,password})
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
 return data
}

export const profileDetails = async() =>{
    const {data} =  await instance.get("registration/login")
 return data
}

export const updateProfile = async(formData) =>{
    const {data} =  await instance.post("registration/updateProfile",formData);
 return data
}
export const mobileOTP = async(email) =>{

    const {data} =  await instance.post("registration/forgetpassword",{email});
 return data
}
export const sendOTP = async(otp, password,confirmpasswords) =>{
    const {data} =  await instance.put("otp/check",{otp, password,confirmpasswords});
 return data
}



export const updatePassword = async(state) =>{
    const {data} =  await instance.put("registration/forgetpassword",{
      oldPassword: state.oldPassword, newPassword:state.newPassword,confirmPassword:state.confirmPassword
    });
 return data
}