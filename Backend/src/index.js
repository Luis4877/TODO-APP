//import 'dotenv/config'
import app from './App.js'
import {connectDB} from './db.js'

connectDB();
app.listen(process.env.PORT);
console.log('Servidor puerto',process.env.PORT);