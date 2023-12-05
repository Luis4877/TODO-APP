import express from "express";
import morgan from "morgan";
//import 'dotenv/config'
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
//app.use(morgan('dev'));
app.use(express.json());
app.use(authRoutes);
app.use(taskRoutes);
export default app;
