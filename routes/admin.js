const {Router} = require("express");

const {z}= require("zod");
const  bcrypt= require("bcrypt");
const { adminModel } = require("../db");
const jwt= require("jsonwebtoken");
require('dotenv').config();
const SECRET_KEY=process.env.ADMIN_SECRET_KEY;
const adminAuth= require("../auth/adminAuth") ;

const adminRouter=Router();

adminRouter.post("/signup",async(req,res)=>{
    //taking body param
    const email= req.body.email;
    const password= req.body.password;
    const firstname= req.body.firstname;
    const lastname= req.body.lastname;

    // using zod validation

    const adminSchema = z.object({
        email:z.string().email("invalid email format"),
        password:z.string(),
        firstname:z.string(),
        lastname:z.string()
    });

      // Validate the data
  const parsedadmin = adminSchema.safeParse({
    email,
    password,
    firstname,
    lastname
  });

  if (!parsedadmin.success) {
    console.error("Validation errors:", parsedadmin.error.issues);
    return res.status(400).json({
      errors: parsedadmin.error.issues
    });
  }
console.log("hi");
   try{
     
    // after validation store the data in the data base
    const haspassword= await bcrypt.hash(password,5);
    // now store the hash pass
    await adminModel.create({
        email:email,
        password:haspassword,
        firstname:firstname,
        lastname:lastname
    });
    res.json({
        message:"admin signup sucessful"
    })

   }catch(err){
    res.json({
        message:err,
    })
   }
});

adminRouter.post("/signin",async(req,res)=>{

      //taking body param
      const email= req.body.email;
      const password= req.body.password;
      const firstname= req.body.firstname;
      const lastname= req.body.lastname;
        
      // using zod validation
  
      const adminSchema = z.object({
          email:z.string().email("invalid email format"),
          password:z.string(),
          firstname:z.string(),
          lastname:z.string()
      });
  
        // Validate the data
    const parsedadmin = adminSchema.safeParse({
      email,
      password,
      firstname,
      lastname
    });
  
    if (!parsedadmin.success) {
      console.error("Validation errors:", parsedadmin.error.issues);
      return res.status(400).json({
        errors: parsedadmin.error.issues
      });
    }
  
      //hasing the pass word to check
    
      try{
       
          // hasing pass for finding admin in data base
          const haspassword= await bcrypt.hash(password,5);
           
          // findinf admin in the data base
  
          const findadmin= await adminModel.findOne({email});
         
         
          // comapering password
  
          const isMatch = await bcrypt.compare(password, findadmin.password);
          
          if(isMatch){
              //if valid then creat token 
              const token = jwt.sign({
                  id:findadmin._id
              },SECRET_KEY);
              
              res.json({
                  token:token
              })
          } 
  
      }catch(err){
          res.json({
              message:err
          })
      }
});

adminRouter.post("/courses",(req,res)=>{

    res.json({
        message:"admin route check"
    })
}); 

adminRouter.put("/courses",(req,res)=>{

    res.json({
        message:"admin route check"
    })
}); 


adminRouter.get("/courses/bulk",(req,res)=>{

    res.json({
        message:"admin route check"
    })
}); 
module.exports={
    adminRouter:adminRouter
}