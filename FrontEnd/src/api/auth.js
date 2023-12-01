import axios from './axios.js';

export const registerRequest = async (user) =>{
    const res=await fetch("http://localhost:3000",{
      method:POST,
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(user)

    }
      );

}  

export const loginRequest =  async (user) => {
  const res = await  axios.post(`/login`,user);
    console.log(res)
}

export const verifyToken = ()=>axios.get('/verify-token')
