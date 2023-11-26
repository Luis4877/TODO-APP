import React from "react";
import { useAuth } from "./contex/auth.Contex.jsx";
import { Navigate,Outlet } from "react-router-dom";


function ProtectedRoutes(){
    const {loading,isAuthenticated} = useAuth()
    console.log(loading ,isAuthenticated)
    if(loading) return <h1>Cargando...</h1>
    if(!loading && !isAuthenticated) return <Navigate to='/login' replace />
    return <Outlet/>
      
    
}

export default ProtectedRoutes;