import {useEffect} from "react";
import { useAuth } from "../contex/auth.Contex.jsx";
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";
import { registerRequest } from "../api/auth.js";
function Register(){
    const {register,handleSubmit,formState:{errors}} =  useForm();
     const { signup,isAuthenticated,errors:RegisterErrors} = useAuth();
     const navigate = useNavigate();
   
        useEffect(()=>{
            if(isAuthenticated) navigate('/tasks')
        },[isAuthenticated])
        
        const onSubmit = handleSubmit( async (values)=>{
            
            signup(values)} );
            
        return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            {
              RegisterErrors.map((error,i)=>(
                <div className="bg-red-500 p-2 text-white" key={i} >
                    {error}
                </div>
              ))  
                       }
            <form onSubmit={onSubmit}>
            <input type="text" name="username" {...register('username',{required:true})}
            className="w-full bg-zinc-700  text-white px-4 py-2 rounded-md my-2"
            placeholder="USERNAME"
            />
            {
                errors.username &&(
                    <p className="text-red-500">UserName es requerido</p>
                )
            }
            <input type="email" name="email" {...register('email',{required:true})}
             className="w-full bg-zinc-700  text-white px-4 py-2 rounded-md my-2"
            placeholder="EMAIL"
            />
               {
                errors.email &&(
                    <p className="text-red-500">Email es requerido</p>
                )
            }

            <input type="password" name="password" {...register('password',{required:true})} 
             className="w-full bg-zinc-700  text-white px-4 py-2 rounded-md my-2"
                placeholder="PASSWORD"
            />
               {
                errors.password &&(
                    <p className="text-red-500">Password es requerido</p>
                )
            }
            <button   className="text-sky-500"type="submit" >Register</button>
            </form>
            <p className="flex gap-x-2 justify-between">
        ¿Ya tienes una cuenta? <Link to="/login" className="text-sky-500">Sign Up</Link>
      </p>

        </div>
    )
}

export default Register;