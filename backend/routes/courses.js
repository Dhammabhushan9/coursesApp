const {Router}=require("express");

const coursesRoute=Router();

coursesRoute.post("/",(req,res)=>{
    res.json({
        message:"courses working"
    })
})

coursesRoute.post("/purchases",(req,res)=>{
    res.json({
        message:"courses working"
    })
})

coursesRoute.post("/preview",(req,res)=>{
    res.json({
        message:"courses working"
    })
});

module.exports={
    coursesRoute:coursesRoute
}