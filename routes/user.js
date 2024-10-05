const {Router} = require("express");
const userRoute=Router();


userRoute.post("/signup",(req,res)=>{
    res.json({
        message:"user working"
    })
});


userRoute.post("/login",(req,res)=>{
    res.json({
        message:"user working"
    })
});


userRoute.post("/purchases",(req,res)=>{
    res.json({
        message:"user working"
    })
});


module.exports={
    userRoute:userRoute
}