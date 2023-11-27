//import 'dotenv/config'
import jwt from "jsonwebtoken";
export  async function createAccessToken(payload){
  
  return  new Promise((resolve,reject)=>{
        jwt.sign(
           payload,PeluzaPetra020907,{
            expiresIn:"1d",
          },(err,token)=>{
            if(err) reject(err);
           
            resolve(token)
          
          }
          )
    })
}