const express= require("express");
const app= express();
const {Router}=require("express");
const {userRoute}=require("./routes/user");
const {coursesRoute}=require( "./routes/courses");
const mongoose=require("mongoose");
const { adminRouter } = require("./routes/admin");
const mongoURI = process.env.DATABASE_URL;
// parsing body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connection

require('dotenv').config();



if (!mongoURI) {
  console.error('MongoDB connection string is undefined. Check your .env file.');
  process.exit(1);  // Exit the process if the URI is not defined
}

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => console.error('MongoDB connection error:', error));

 
//importing route
app.use("/user",userRoute);
app.use("/courses",coursesRoute);
app.use("/admin",adminRouter)







app.listen(3030,(req,res)=>{
  console.log("port is working");
});

 