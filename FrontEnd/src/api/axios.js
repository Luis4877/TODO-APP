import  axios  from "axios";



const instanceAxios =  axios.create({
    baseURL: process.env.URL_BACKEND, 
    withCredentials:true,
});


export default instanceAxios;