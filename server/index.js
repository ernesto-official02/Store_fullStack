// const express = require('express')
// const dotenv= require("dotenv");
import express from"express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from"cors";
import bookRoute from "./route/book.route.js"
import userRoute from"./route/user.route.js"
const app = express()
app.use(cors());
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 4000

//connect to mongo db
const URI=process.env.MongoURI;
try{
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

  });
  console.log("Connected to mongodb");

}
catch(error){
  console.log("Error: ", error);

}

//defining Routes
app.use("/book",bookRoute);
app.use("/user",userRoute);

// app.get("/",(req , res)=>{
//   res.send("Book-- app");
// });


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
