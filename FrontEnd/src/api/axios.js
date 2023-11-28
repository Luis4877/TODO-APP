import  axios  from "axios";



const instanceAxios =  axios.create({
    baseURL: import.meta.env.VITE_URL_BACKEND, 
    withCredentials:true,
});


export default instanceAxios;