const express= require("express");
const app= express();
const {Router}=require("express");
const {userRoute}=require("./routes/user");
const {coursesRoute}=require( "./routes/courses");
const mongoose=require("mongoose")


//database connection
async function mogoconnection() {

  try{
    await mongoose.connect("mongodb+srv://cob56dhammabhushanwaghmare:omtNTxv1bOtWqTmD@cluster0.jtu0y.mongodb.net/coursesApp");
  console.log("connection done ");
  }catch(err){
    console.log(err);
  }
  
}

mogoconnection();

app.use("/user",userRoute);
app.use("/courses",coursesRoute);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(3030,(req,res)=>{
  console.log("port is working");
});

 