const {Router} = require("express");

const {z}= require("zod");
const  bcrypt= require("bcrypt");
const { userModel, purchasesModel } = require("../db");
const jwt= require("jsonwebtoken");
const userAuth = require("../middleware/userAuth");
require('dotenv').config();
const SECRET_KEY=process.env.USER_SECRET_KEY;



const userRoute=Router();
userRoute.post("/signup",async(req,res)=>{
    //taking body param
    const email= req.body.email;
    const password= req.body.password;
    const firstname= req.body.firstname;
    const lastname= req.body.lastname;

    // using zod validation

    const userSchema = z.object({
        email:z.string().email("invalid email format"),
        password:z.string(),
        firstname:z.string(),
        lastname:z.string()
    });

      // Validate the data
  const parsedUser = userSchema.safeParse({
    email,
    password,
    firstname,
    lastname
  });

  if (!parsedUser.success) {
    console.error("Validation errors:", parsedUser.error.issues);
    return res.status(400).json({
      errors: parsedUser.error.issues
    });
  }
console.log("hi");
   try{
     
    // after validation store the data in the data base
    const haspassword= await bcrypt.hash(password,5);
    // now store the hash pass
    await userModel.create({
        email:email,
        password:haspassword,
        firstname:firstname,
        lastname:lastname
    });
    res.json({
        message:"user signup sucessful"
    })

   }catch(err){
    res.json({
        message:err,
    })
   }
   
});
 

userRoute.post("/signin", async(req,res)=>{
      //taking body param
    const email= req.body.email;
    const password= req.body.password;
    const firstname= req.body.firstname;
    const lastname= req.body.lastname;
      
    // using zod validation

    const userSchema = z.object({
        email:z.string().email("invalid email format"),
        password:z.string(),
        firstname:z.string(),
        lastname:z.string()
    });

      // Validate the data
  const parsedUser = userSchema.safeParse({
    email,
    password,
    firstname,
    lastname
  });

  if (!parsedUser.success) {
    console.error("Validation errors:", parsedUser.error.issues);
    return res.status(400).json({
      errors: parsedUser.error.issues
    });
  }

    //hasing the pass word to check
  
    try{
        console.log(password)
        // hasing pass for finding user in data base
        const haspassword= await bcrypt.hash(password,5);
           
        // findinf user in the data base

        const findUser= await userModel.findOne({email,haspassword});
 
        // comapering password

        const isMatch = await bcrypt.compare(password, findUser.password);
        if(isMatch){
            //if valid then creat token 
            const token = jwt.sign({
                id:findUser._id
            },SECRET_KEY);
             
            res.json({
                token:token
            })
        } else{
            res.json({
                message:"wrong credentional"
            })
          }

    }catch(err){
        res.json({
            message:err
        })
    }
});
 
userRoute.post("/purchases",userAuth, async(req,res)=>{
  const userId= req.usereId;
  const coursesId= req.coursesId;

   await purchasesModel.create({
    userId:userId,
    coursesId:coursesId
   })


});

userRoute.get("/preview",userAuth, async(req,res)=>{
     const userId= req.usereId;

     const purchases=await purchasesModel.find({
      userId
     })


});


module.exports={
    userRoute:userRoute
}