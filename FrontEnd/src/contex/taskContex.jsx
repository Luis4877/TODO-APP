import { createContext, useContext, useState, useEffect } from "react";
import {
  createTasksRequest,
  deleteTaskRequest,
  getTasksRequest,
  getTaskRequest,
  updateTasksRequest,
} from "../api/tasks.js";
const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("Use TASK MUST BE USED BY TASKPROVIDER");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [errors, setErrrors] = useState([]);
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      if (Array.isArray(error.res.data)) {
        return setErrrors(error.res.data);
      }
      setErrrors([error.response.data.message]);
    }
  };
  const createTask = async (task) => {
    try {
      const res = await createTasksRequest(task);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      if (res.status === 204) {
        setTasks(tasks.filter((task) => task._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
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

  const updateTask = async (id, task) => {
    try {
      await updateTasksRequest(id, task);
    } catch (error) {
      console.log(error.response.data);
      if (Array.isArray(error.res.data)) {
        return setErrrors(error.res.data);
      }
      setErrrors([error.response.data.message]);
    }
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        deleteTask,
        getTask,
        updateTask,
        errors,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
