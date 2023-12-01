import axios from './axios.js';

export const registerRequest = async (user) =>{
    const res=await fetch("import.meta.env.VITE_URL_BACKEND/register" ,{
      method:POST,
      mode:"cors",
      headers: {
        'Content-Type': 'application/json',
      //   'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(user)

    }
      );

}  

export const loginRequest =  async (user) => await  axios.post(`/login`,user)


export const verifyToken = ()=>axios.get('/verify-token')
