import { Router } from "express";
import { validateToken } from "../middlewares/session.js";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";
import { createTaskSchema } from "../schemas/task.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
const router = Router();
router.get("/tasks", validateToken,getTasks); //todas
router.get("/tasks/:id", validateToken,getTask); //una por id
router.post("/tasks", validateToken,validateSchema(createTaskSchema),createTask);
router.delete("/tasks/:id", validateToken,deleteTask);
router.put("/tasks/:id", validateToken,updateTask);

export default router;
