import axios from './axios.js';

export const registerRequest = async (user) =>{
    const res=await axios.post(`/register`,user);
    console.log(res)
}  

export const loginRequest =  async (user) => {
  const res = await  axios.post(`/login`,user);
    console.log(res)
}

export const verifyToken = ()=>axios.get('/verify-token')
