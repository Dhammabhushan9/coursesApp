const {Router} = require("express");

const {z}= require("zod");
const  bcrypt= require("bcrypt");
const { adminModel, coursesModel } = require("../db");
const jwt= require("jsonwebtoken");
require('dotenv').config();
const SECRET_KEY = process.env.ADMIN_SECRET_KEY;
const adminAuth = require("../middleware/adminAuth");


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
  
 

adminRouter.post("/courses" , adminAuth,async(req,res)=>{
    const adminId= req.adminId;
   
    const { title ,description, price, imageUrl}=req.body;
    //zod for the verification

    const coursesSchema=z.object({
        title:z.string(),
        description:z.string(),
        price:z.number(),
        imageUrl:z.string()
    })
    const paresCourses= coursesSchema.safeParse({ 
        title,
        description,
        price,
        imageUrl

       }); 

       if(!paresCourses.success){
        console.error("Validation errors:", paresCourses.error.issues);
          return res.status(400).json({
            errors: paresCourses.error.issues
          });
       }

        // adding courses in the database
            try{
                
        const courses= await coursesModel.create({
            title:title,
            description:description,
            price:price,
            imageUrl:imageUrl,
            creatorId:adminId
        })
            res.json({
                message:"courses is added in the data base"
            })
            } catch(err){
                console.log(err);
                res.status(403).json({
                    error:err
                })
            }
    })
 
    // update in corese
adminRouter.put("/courses",adminAuth,async(req,res)=>{
    const adminId= req.adminId;
   
    const { title ,description, price, imageUrl,coursesId}=req.body;
    //zod for the verification

    const coursesSchema=z.object({
        title:z.string(),
        description:z.string(),
        price:z.number(),
        imageUrl:z.string(),
        coursesId:z.string()
    })
    const paresCourses= coursesSchema.safeParse({ 
        title,
        description,
        price,
        imageUrl,
        coursesId

       }); 

       if(!paresCourses.success){
        console.error("Validation errors:", paresCourses.error.issues);
          return res.status(400).json({
            errors: paresCourses.error.issues
          });
       }

        // adding courses in the database
            try{
                
          const courses= await coursesModel.updateOne({
            _id:coursesId,
            creatorId:adminId
          },{
            title:title,
            description:description,
            price:price,
            imageUrl:imageUrl,
            
        })
            res.json({
                message:"courses is updated in the data base"
            })
            } catch(err){
                console.log(err);
                res.status(403).json({
                    error:err
                })
            }


}); 


adminRouter.get("/courses/bulk",adminAuth,async(req,res)=>{

     const adminId=req.adminId;

     try{
        const courses= await coursesModel.find({
            creatorId:adminId
         });
         res.json({
            courses:courses
         })
     }catch(err){
        res.json({
            error:err
        })
     }
      
}); 
module.exports={
    adminRouter:adminRouter
}