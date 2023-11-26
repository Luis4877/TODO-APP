import jwt from "jsonwebtoken";
import 'dotenv/config'
export const validateToken = (req,res,next)=>{
    const {token} = req.cookies;
    if(!token) return res.status(401).json({message:"Sin token"});
    jwt.verify(token,process.env.JWT_SECRET_KEY,(error,decoded)=>{
            if(error) return res.status(401).json({message:"TOKEN INVALIDO"});
           
            //validando que si este un usuario

            req.user = decoded;
            next();
    })

 
}