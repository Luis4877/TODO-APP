//import 'dotenv/config'
import app from './App.js'
import {connectDB} from './db.js'

connectDB(process.env.VITE_MONGO_URL);
app.listen(process.env.PORT ||   3000 );
console.log('Servidor puerto',process.env.PORT);