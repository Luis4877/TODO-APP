import { useEffect } from "react";
import { useAuth } from "../contex/auth.Contex.jsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { registerRequest } from "../api/auth.js";
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center ">
      <div className="bg-zinc-800  max-w-md w-full p-10 rounded-md">
        {RegisterErrors.map((error, i) => (
          <div className="bg-red-600 p-2 text-white font-black" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl p-1 max-w-md  font-bold text-white my-2 ">
          Registrar Usuario.
        </h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700  text-white px-4 py-2 rounded-md my-2"
            placeholder="Nombre de usuario"
          />
          {errors.username && (
            <p className="text-red-500">Nombre de usuario es requerido</p>
          )}
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700  text-white px-4 py-2 rounded-md my-2"
            placeholder="Correo Electronico"
          />
          {errors.email && <p className="text-red-500">Correo es requerido</p>}

          <input
            type="password"
            name="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700  text-white px-4 py-2 rounded-md my-2"
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className="text-red-500">Contraseña es requerida</p>
          )}
          <button
            className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
            type="submit"
          >
            Crear cuenta
          </button>
        </form>
        <p className="flex gap-x-2 justify-between text-sky-600 font-extrabold">
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/login"
            className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
          >
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
