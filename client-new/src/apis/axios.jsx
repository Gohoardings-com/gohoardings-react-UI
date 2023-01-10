import axios from "axios";

const instance =  axios.create({baseURL:"http://80.209.238.62:8080/api/v1/"})
instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
instance.defaults.withCredentials = true;

export default instance;
