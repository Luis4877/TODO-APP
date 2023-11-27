//import 'dotenv/config'
import mongoose from 'mongoose';

export const connectDB = async()=>{
    try {
        mongoose.connect("mongodb+srv://lavn4877:04oO9i7w139JtHYG@cluster0.1iidxmh.mongodb.net/tododb?retryWrites=true&w=majority")
        console.log('Conectado Correctamente ');
    } catch (error) {
        console.log(error);
    }
}

