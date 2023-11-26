import  axios  from "axios";

const URL_BACKEND = import.meta.env.VITE_BASE_URL;

const instanceAxios =  axios.create({
    baseURL: URL_BACKEND , 
    withCredentials:true,
});


export default instanceAxios;