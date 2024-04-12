require ('dotenv').config()
const express = require ('express');
const cors = require ('cors');
const cookieParser = require ('cookie-parser')
const PORT = process.env.PORT;
const app  = express();
const baseURL = process.env.LOCAL_CLIENT_URL;
app.use (express.json());
app.use (cookieParser);
app.use(cors({credentials:true, origin: baseURL}));
const mongoose = require ('mongoose');
const options = {
    dbName: 'bookworm'
}
const router = require('./router/index')

const start = async () => {
    try{
        await mongoose.connect(process.env.DB_URL, options)
        app.listen(PORT, ()=> console.log(`Server started on PORT ${PORT}`))
        mongoose.connection.on('error', err=> {console.log.error(`MongoDB connection error: ${err}`)})
    }
    catch(error){
        console.log(error)

    }
}
start();