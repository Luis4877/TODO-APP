import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTask } from "../contex/taskContex";
import { useNavigate, useParams } from "react-router-dom";
function TaskForm() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask,updateTask } = useTask();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function cargarTareas() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description",task.description);
      }
    }
    cargarTareas();
  }, []);

  const onSubmit = handleSubmit((data) => {
   if(params.id){
    updateTask(params.id,data)
   }else{
    createTask(data);
  
   }
   navigate("/tasks");
  });
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          {...register("title")}
          autoFocus
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md  my-3"
        />
        <textarea
          rows="3"
          placeholder="Descripción"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 "
        ></textarea>
        <button>Agregar</button>
      </form>
    </div>
  );
}

export default TaskForm;
