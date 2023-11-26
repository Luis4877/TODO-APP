import 'dotenv/config'
import mongoose from 'mongoose';

export const connectDB = async()=>{
    try {
        mongoose.connect(process.env.MONGO_URL_CONNECTION)
        console.log('Conectado Correctamente ');
    } catch (error) {
        console.log(error);
    }
}

