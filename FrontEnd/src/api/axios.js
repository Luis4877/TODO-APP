import  axios  from "axios";



const instanceAxios =  axios.create({
    baseURL: "http://localhost:3000", 
    withCredentials:true,
});


export default instanceAxios;