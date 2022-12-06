const db = require("../conn/conn");
const catchError  = require('../middelware/catchError')



exports.categorieFilter = catchError(async (req, res) => {
    db.changeUser({ database: "gohoardi_goh" });
    db.query("SELECT p_id,name FROM tblmedia_categories",async(err, result) => {
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
  const {category_name,price, illumination, table, city} = req.body;
  const Illumation = illumination.toString()
  var newIllumation = Illumation.replace(/,/g, "','");
  const SubCategory = category_name.toString()
  const newSubCate = SubCategory.replace(/,/g, "','")
 const min = price.split(",")[0].slice(4);
 const max =  price.split(",")[1].slice(4);
  switch (table) {
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
    case "inflight-media":
      table_name = "goh_media_inflight";
      break;
    case "office-media":
      table_name = "goh_media_office";
      break;
      default:
      table_name = "goh_media" ;   
  }

  db.changeUser({ database: "gohoardi_goh" });
  const sql= "SELECT * FROM "+table_name+" WHERE city_name='"+city+"' &&  price BETWEEN '"+min+"' AND '"+max+"' AND illumination IN ('"+newIllumation+"') AND subcategory IN ('"+newSubCate+"')";
  db.query(sql, async(err,result) =>{
if(err){
  return res.status(400).json({message:err.message})
}else{
  return res.status(200).json(result)
}
  })
})

//media filters
  exports.filterData = async(req, res, next) => {
    try{
      const {value, illumna, catego} = req.body
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
                          return res.send(result); 
                        }
                      }) 
            } else {
              const sql = "SELECT  * FROM "+table_name+" WHERE illumination='"+illumna+"' || subcategory= '"+catego+"'  &&  subcategory= '"+catego+"' &&  illumination='"+illumna+"'"
   db.query(sql,async (err,result) => {
                if (err) {
                  return res.status(404).json({err: err,message :"Wrong Data"})
                 } else if (result.length == 0 ){
                  return res.status(400).json({message:"No data"})
              } else{
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