import Link from '@mui/material/Link';
import { useAuth } from "../contex/auth.Contex";
 
function Navbar() {
  const { isAuthenticated,logout,user } = useAuth();
  console.log(`Autenticado:${isAuthenticated}`)
  return (
    <nav className="bg-indigo-400  my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link href={"/"}  underline='none'>
        <h1 className=" text-2xl font-bold">Todo APP</h1>
      </Link>
      <ul className="flex gap-x-3">
        {isAuthenticated ? (
          <>
            <li>
             Bienvenido: {user.username}
            </li>
            
            <li>
              <Link  underline='none' href={"/add-task"}>
                Tarea nueva
                </Link>
            </li>
            <li>
              <Link underline='none' href={"/"} onClick={()=>{
                logout();
              }}>Salir</Link>
            </li>
            
          </>
        ) : (
          <>
            <li>
              <Link underline='none'  href={"/login"} 
              className="bg-white px-4 py-1 rounded-md"
              >Ingrear</Link>
            </li>
            <li>
              <Link underline='none' href={"/register"}  className="bg-white px-4 py-1 rounded-md">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
