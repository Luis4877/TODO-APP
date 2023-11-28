//import 'dotenv/config'
import mongoose from 'mongoose';

export const connectDB = async()=>{
    try {
        mongoose.connect(process.env.VITE_MONGO_URL)
        console.log('Conectado Correctamente ');
    } catch (error) {
        console.log(error);
    }
}

