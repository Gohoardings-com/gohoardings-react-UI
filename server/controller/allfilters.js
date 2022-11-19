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

//media filters
let perpagedata = 10;
  exports.filterData = async(req, res, next) => {
    try{
      const {value, illumna, locat, catego} = req.body
      db.changeUser({ database: "gohoardi_goh" });
      switch (value) {
              case "traditional-ooh-media":
                table_name = "goh_media";
                break;
              case "digital-media":
                table_name = "goh_media_digital";
                break;
              case "transit-media":
                table_name = "goh_media_transit";
                break;
              case"mall-media":
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
            if(illumna == ![] && locat == ![] && catego == ![]) {
              db.query("SELECT  DISTINCT * FROM "+table_name+"",async (err,result) => {
                          if (err) {
                            return res.send({err: err,message :"Wrong Data"})
                        } else if (result == []){
                            return res.send({err: "Empty",message :"Media Not Found"})
                        } else{
                          const numberofresult = result.length;
                         const numberofPages = Math.ceil(numberofresult/ perpagedata)
                         let page = req.query.page ? Number(req.query.page) : 1;
                        if(page > numberofPages){
                          res.redirect('?page='+encodeURIComponent(numberofPages))
                        }else if(page < 1){
                          res.redirect('?page='+encodeURIComponent('1'))

                        }
                        const startinglimit = (page - 1) * perpagedata 
                        db.query(`SELECT  DISTINCT * FROM ${table_name} LIMIT ${startinglimit},${perpagedata}`,(err,result) => {
                          if (err) throw err;
                          let iterator = (page - 5) < 1 ? 1 : page-5;
                          let endlink = (iterator + 9) <= numberofPages ? (iterator + 9) : page + (numberofPages - page)
                          if(endlink < (page + 4)){
                            iterator -= (page + 4) -numberofPages
                          }
                          return res.send(result, page, iterator, endlink, numberofPages)
                        })
                        }
                      }) 
            } else {
   db.query("SELECT  * FROM "+table_name+" WHERE illumination='"+illumna+"' || subcategory= '"+catego+"' || city_name='"+locat+"' &&  subcategory= '"+catego+"' || city_name='"+locat+"' &&  illumination='"+illumna+"' || subcategory= '"+catego+"' && illumination='"+illumna+"' || city_name='"+locat+"' LIMIT 50",async (err,result) => {
                if (err) {
                  return res.send({err: err,message :"Wrong Data"})
                 } else if (result == []){
                  return res.send("No data")
              } else{
                const numberofresult = result.length;
              return res.send(result)  ; 
              }
            })
            }
    }catch (err){
    res.status(404).json({
      messsage:err.res
    })
  }
}