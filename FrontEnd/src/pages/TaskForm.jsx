import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTask } from "../contex/taskContex";
import { Input } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
function TaskForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { createTask, getTask, updateTask } = useTask();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function cargarTareas() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
      }
    }
    cargarTareas();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data);
    }
    navigate("/tasks");
  });
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center ">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {}

        <h1 className="text-2xl p-1 max-w-md  font-bold text-white my-2 ">
          Agregar Tarea
        </h1>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Titulo"
            {...register("title")}
            autoFocus
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md  my-3"
          />
          {errors.title && (
            <p className="text-red-500">El titulo es requerido</p>
          )}
          <textarea
            rows="3"
            placeholder="Descripción"
            {...register("description")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 "
          ></textarea>
          {errors.description && (
            <p className="text-red-500">El titulo es requerido</p>
          )}
          <button
            className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
            type="submit"
          >
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
