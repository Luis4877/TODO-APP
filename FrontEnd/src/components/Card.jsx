import { useTask } from "../contex/taskContex";
import { Link } from "react-router-dom";
function Card({ task }) {
  const { deleteTask } = useTask();
  return (
    <div className="container mt-4 mx-auto w-auto h-fit">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ">
        <div className="card m-2 sm:grid-cols-1  cursor-pointer border border-sky-600 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
          <div className="m-3">
            <h2 className="text-left mt-1 mb-5">
              {task.title}
              <span className="text-sm text-sky-900 font-mono ml-2 bg-sky-100 inline rounded-full px-2 align-top float-right animate-pulse">
                <Link to={`/tasks/${task._id}`}>Editar</Link>
              </span>
              <span className="text-sm text-sky-700 font-mono ml-10 bg-sky-100 inline rounded-full px-2 align-top float-right animate-pulse">
                <button
                  onClick={() => {
                    deleteTask(task._id);
                  }}
                >
                  Borrar
                </button>
              </span>
            </h2>
            <p className=" h-auto w-auto font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
              {task.description}
            </p>
            <p>{new Date(task.date).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
