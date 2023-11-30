import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js'
const app = express();
app.use(cors({
    origin:process.env.FRONTEND_URL || "35.160.120.126"||
    "44.233.151.27" ||
    "34.211.200.85" ,
    credentials:true,
}))
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api',taskRoutes);
export default app;