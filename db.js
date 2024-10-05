const mongoose=require("mongoose");
const Schema= mongoose.Schema;
const ObjectId=Schema.ObjectId;

async function mogoconnection() {

  try{
    await mongoose.connect("mongodb+srv://cob56dhammabhushanwaghmare:omtNTxv1bOtWqTmD@cluster0.jtu0y.mongodb.net/coursesApp");
  console.log("connection done ");
  }catch(err){
    console.log(err);
  }
  
}

mogoconnection();
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