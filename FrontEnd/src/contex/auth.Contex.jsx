import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyToken } from "../api/auth";
import Cookies from "js-cookie";
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("UseAuth deberia estar dentro del AuthProvider");
  }
  return context;
};


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrrors] = useState([]);
  //implementacion de estado con token


  const [loading, setLoading] = useState(true);
  

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
     const token = res.data.Authorization;
      window.localStorage.setItem("token",token)
     
      setUser(res.data);
      setIsAuthenticated(true);
    
    } catch (error) {
      setErrrors(error.response);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
     
      setIsAuthenticated(true);
      setUser(res.data);
      const token = res.data.Authorization;
      window.localStorage.setItem("token",token)
    } catch (error) {
      if (Array.isArray(error.res.data)) {
        return setErrrors(error.res.data);
      }
      setErrrors([error.response.data.message]);
    }
  };
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrrors([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);
  
const logout= ()=>{
 window.localStorage.removeItem("token")
  setIsAuthenticated(false);
  setUser(null);
   
}


  useEffect(() => {
    async function checkCredencials() {
      const token =   window.localStorage.getItem("token")
      if (!token) {
        setIsAuthenticated(false);

        setLoading(false);
        return;
      }

      
        try {
          const res = await verifyToken(token);
         
          
          if (!res.data) return setIsAuthenticated(false);
          
          
          setIsAuthenticated(true);
          setUser(res.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setIsAuthenticated(false);
      
          setLoading(false);
        
      }
    }
    checkCredencials();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        logout,
        user,
        isAuthenticated,
        errors,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
