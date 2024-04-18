// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js';
import {app} from './app.js'
import { application } from 'express';

dotenv.config({
    path:'./.env'
})

// console.log(process.env.PORT);

connectDB()
.then(()=>{
  app.listen(process.env.PORT||8000,()=>{
    console.log(`Server is listening at port
    ${process.env.PORT || 8000}`);
    // app.on(error,()=>{
    //     console.log("ERROR",error);
    //     throw error
    // })
  })
})
.catch((error)=>{
    console.log(`MongoDb error fail${error}`);
})




















/*
import  express from 'express';
const app= express()
(async()=>{
    try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",()=>{
        console.log("ERROR",error);
        throw error
    })

    app.listen(process.env.PORT,()=>{
      console.log(`App is listening at port ${process.env.PORT}`);
    })
    }
    catch(error){
        console.log("ERROR",error);
        throw error
    }
})()
*/