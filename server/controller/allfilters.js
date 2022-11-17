const db = require("../conn/conn");
const jwtToken = require('jsonwebtoken')
const catchError  = require('../middelware/catchError')



exports.categorieFilter = catchError(async (req, res) => {
    db.changeUser({ database: "gohoardi_goh" });
    db.query("SELECT p_id,name FROM tblmedia_categories", (err, result) => {
      if (err) {
        return res.json({message:"No Data Found On this city"})
      } else {
        return res.send(result);
      }
    });
    })


exports.mapFilter = catchError(async (req,res) =>{
  console.log(req.body);

})
exports.locationFilter = catchError(async (req,res) =>{
  console.log(req.body);

})