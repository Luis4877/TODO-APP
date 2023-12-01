import express from 'express';
import morgan from 'morgan';

import cors from 'cors'
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js'
const app = express();
app.use(cors({
   origin:process.env.VITE_URL_FRONTEND,
    credentials:true,
}))
app.use(morgan('dev'));
app.use(express.json());
app.use('/api',authRoutes);
app.use('/api',taskRoutes);
export default app;