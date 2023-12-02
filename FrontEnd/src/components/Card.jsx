import { useTask } from "../contex/taskContex";
import { Link } from "react-router-dom";
function Card({task}){

     const {deleteTask} = useTask();
    return(
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1> 
        <div className="flex gap-x-2 items-center bg-white space-x-2 "  >
            <button onClick={()=>{
               deleteTask(task._id)
            }}>Borrar</button>
            <Link to={`/tasks/${task._id}`}>Editar</Link>
        </div>
        </header>
      <p className="text-slate-400">{task.description}</p>
      <p>{new Date(task.date).toLocaleDateString()}</p>
      </div>
    )
}


export default Card;