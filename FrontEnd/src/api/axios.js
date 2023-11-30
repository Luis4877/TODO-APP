import  axios  from "axios";



const instanceAxios =  axios.create({
    baseURL: "https://frontend-todo-app-bwi9.onrender.com", 
    withCredentials:true,
});


export default instanceAxios;