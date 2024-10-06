
const jwt=require("jsonwebtoken");
require('dotenv').config();
const SECRET_KEY=process.env.USER_SECRET_KEY;

async function userAuth (req,res,next){
    const token=req.headers.token;
    // token is not given 
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    
    try{
        // decoding  token using jwt
          const decodeUser= await jwt.verify(token,SECRET_KEY);
          req.headers.email=decodeUser.email;
          next();
    }
    catch(err){
        console.error(err);
        return res.status(403).json({ message: "Invalid token" });
    }
    
    
}

module.exports = {
    userAuth
};