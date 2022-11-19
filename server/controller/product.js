const express = require('express')
const db = require('../conn/conn')


exports.Nearproduct =  async (req,res, next) => {
  try{
    const {code, category_name} = req.body
    const promises = []
    db.changeUser({ database: "gohoardi_goh" });
    switch (category_name) {
        case "traditional-ooh-media":
          table_name = "goh_media";
          break;
        case "digital-media":
          table_name = "goh_media_digital";
          break;
        case "transit-media":
          table_name = "goh_media_transit";
          break;
        case "mall-media":
          table_name = "goh_media_mall";
          break;
        case "airport-media":
          table_name = "goh_media_airport";
          break;
        case "inflight_media":
          table_name = "goh_media_inflight";
          break;
        case "office-media":
          table_name = "goh_media_office";
          break;
          default:
          table_name = "goh_media";
      } 
      db.query("SELECT * FROM "+table_name+" WHERE code='"+code+"'",async (err,result) => {
        if (err) {
          return res.send({err: err,message :"Wrong Data"})
      } else if (result == []){
          return res.send({err: "Empty",message :"Media Not Found"})
      } else{
      const lat =result[0].latitude + 110.574
      const long =result[0].longitude + 0.015060
      db.query("SELECT * FROM "+table_name+" WHERE code='"+code+"' || latitude>='"+lat+"' || longitude>='"+long+"' LIMIT 125",async (err,result) => {
        if (err) {
            return res.send({err: reject(err),message :"Wrong Data"})
        } else if (result == []){
            return res.send({resolve: "Empty",message :"Media Not Found"})
        } else{
            return res.send(result);
        }
    })
      }
    })
} catch (err){
res.status(404).json({
  messsage:err.res
})
}
}

exports.product =  async (req,res, next) => {
    try{
const {code, category_name} = req.body
db.changeUser({ database: "gohoardi_goh" });
switch (category_name) {
    case "traditional-ooh-media":
      table_name = "goh_media";
      break;
    case "digital-media":
      table_name = "goh_media_digital";
      break;
    case "transit-media":
      table_name = "goh_media_transit";
      break;
    case "mall-media":
      table_name = "goh_media_mall";
      break;
    case "airport-media":
      table_name = "goh_media_airport";
      break;
    case "inflight_media":
      table_name = "goh_media_inflight";
      break;
    case "office-media":
      table_name = "goh_media_office";
      break;
      default:
      table_name = "goh_media";
  }

  db.query("SELECT * FROM "+table_name+" WHERE code='"+code+"'",async (err,result) => {
    if (err) {
      return res.send({err: err,message :"Wrong Data"})
  } else if (result == []){
      return res.send({err: "Empty",message :"Media Not Found"})
  } else{
  return res.send(result)
  }
})
} catch (err){
res.status(404).json({
messsage:err.res
})
}
}