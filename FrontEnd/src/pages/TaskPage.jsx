import { useEffect } from "react";

import { useTask } from "../contex/taskContex.jsx";
import Card from "../components/Card.jsx";

export function TaskPage() {
  const { tasks, getTasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>No hay nada que mostrar aqui</h1>;
  //Detalle aqui causa conflicto
  return (
    <div className="grid grid-cols-4 ">
      {tasks.map((task) => (
        <Card task={task} key={task._id} />
      ))}
    </div>
  );
}

export default TaskPage;
