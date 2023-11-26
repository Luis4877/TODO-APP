import { Link } from "react-router-dom";
import { useAuth } from "../contex/auth.Contex";

function Navbar() {
  const { isAuthenticated,logout,user } = useAuth();
  console.log(`Autenticado:${isAuthenticated}`)
  return (
    <nav className="bg-zinc-400 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold">Todo APP</h1>
      </Link>
      <ul className="flex gap-x-3">
        {isAuthenticated ? (
          <>
            <li>
              Bienvenido: {user.username}
            </li>
            
            <li>
              <Link to="/add-task">Tarea nueva</Link>
            </li>
            <li>
              <Link to="/" onClick={()=>{
                logout();
              }}>Salir</Link>
            </li>
            
          </>
        ) : (
          <>
            <li>
              <Link to="/login" 
              className="bg-indigo-500 px-4 py-1 rounded-md"
              >Login</Link>
            </li>
            <li>
              <Link to="/register"  className="bg-indigo-500 px-4 py-1 rounded-md">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
