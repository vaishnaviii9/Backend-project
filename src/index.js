// require('dotenv').config({path: './env'})
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})
connectDB()


/*
// import express from "express"
// const app= express()

// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }


(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    // app.on("error", (error)=>{
        // console.log(error);
        // throw error
        // })
        // app.listen(process.env.PORT, ()=>{
            // console.log(`APP is listening on port ${process.env.PORT}`);
            // })
} catch (error) {
    console.error("ERROR :", error);
    throw error;
  }
})();
 */