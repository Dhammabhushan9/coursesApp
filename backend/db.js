const mongoose=require("mongoose");
const Schema= mongoose.Schema;
const ObjectId=Schema.ObjectId;
require('dotenv').config();

const mongoURI = process.env.DATABASE_URL;

if (!mongoURI) {
  console.error('MongoDB connection string is undefined. Check your .env file.');
  process.exit(1);  // Exit the process if the URI is not defined
}

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => console.error('MongoDB connection error:', error));

 
const userSchema= new Schema({
email: { type: String, required: true, unique: true },
password:String,
firstname:String,
lastname:String

});

const adminSchema=new Schema({
  email: { type: String, required: true, unique: true },
  password:String,
  firstname:String,
  lastname:String
})


const coursesSchema= new Schema({

  title:String,
  description:String,
  price:Number,
  imageUrl:String,
  creatorId:Schema.Types.ObjectId
});


const purchasesSchema= new Schema({
  coursesId:Schema.Types.ObjectId,
  userId:Schema.Types.ObjectId
})

const userModel=  mongoose.model("user",userSchema);
const adminModel= mongoose.model("admin",adminSchema);
const coursesModel=mongoose.model("courses",coursesSchema);
const purchasesModel= mongoose.model("purchases",purchasesSchema);

module.exports={
  userModel:userModel,
  adminModel:adminModel,
  coursesModel:coursesModel,
  purchasesModel:purchasesModel
}