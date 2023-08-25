import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import { adminlogin } from "./Controller/Login.js"
import { deletemp, empreg, updatemp, viewemp } from "./Controller/Empreg.js";

const app = express()

app.use(express.json({limit:"50mb"}))

const PORT = 4001
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})

const DB = 'mongodb://127.0.0.1:27017/empdetails'
mongoose.connect(DB,{useNewUrlParser: true,
    useUnifiedTopology: true}).then(() =>{
    console.log('Database connected..')
})

app.use(cors());


app.post('/adminlogin',adminlogin);
app.post('/empreg',empreg);

app.get('/viewemp',viewemp);

app.patch('/updatemp/:id',updatemp);

app.delete('/deletemp/:id',deletemp)