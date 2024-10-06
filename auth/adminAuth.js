
const jwt=require("jsonwebtoken");
require('dotenv').config();
const SECRET_KEY=process.env.USER_SECRET_KEY;

async function userAuth (req,res,next){
    const token=req.body.token;
 
    // decoding  token using jwt
    const decodeUser= await jwt.verify(token,SECRET_KEY);

    if( decodeUser){
          req.body=decodeUser.email;
          next();
    }else{
        res.status(403).json({
            message:"invalid cradination"
        })
    }
}