const db = require("../conn/conn");
const catchError = require("../middelware/catchError");

exports.companyStaff = catchError(async(req,res) => {
db.changeUser({database:"gohoardi_crmapp"})
db.query("SELECT * FROM tblstaff",(err,result) =>{
    if(err){
        return res.status(500).json({message:"Sonething Wrong"})
    }
    else{
        return res.status(200).json(result)
    }
})
})

exports.goh_quick_links = catchError(async(req,res) => {
db.changeUser({database:"gohoardi_goh"})
db.query("SELECT * FROM goh_quick_links",(err,result) =>{
    if(err){
        return res.status(500).json({message:"Sonething Wrong"})
    }
    else{
        return res.status(200).json(result)
    }
})
})


exports.goh_faqs = catchError(async(req,res) => {
db.changeUser({database:"gohoardi_goh"})
db.query("SELECT * FROM goh_faqs",(err,result) =>{
    if(err){
        return res.status(500).json({message:"Sonething Wrong"})
    }
    else{
        return res.status(200).json(result)
    }
})
})


exports.goh_media_and_news = catchError(async(req,res) => {
db.changeUser({database:"gohoardi_goh"})
db.query("SELECT * FROM goh_media_and_news",(err,result) =>{
    if(err){
        return res.status(500).json({message:"Sonething Wrong"})
    }
    else{
        return res.status(200).json(result)
    }
})
})



exports.goh_testimonials = catchError(async(req,res) => {
db.changeUser({database:"gohoardi_goh"})
db.query("SELECT * FROM goh_testimonials",(err,result) =>{
    if(err){
        return res.status(500).json({message:"Sonething Wrong"})
    }
    else{
        return res.status(200).json(result)
    }
})
})


