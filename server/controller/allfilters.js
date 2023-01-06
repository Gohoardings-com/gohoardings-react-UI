const db = require("../conn/conn");
const catchError  = require('../middelware/catchError')



exports.categorieFilter = catchError(async (req, res) => {
    db.changeUser({ database: "gohoardi_goh" });
    db.query("SELECT p_id,name FROM tblmedia_categories",async(err, result) => {
      if (err) {
        return res.status(204).json({message:"No Data Found On this city"})
      } else {
        return res.send(result);
      }
    });
    })


exports.mapFilter = catchError(async (req,res) =>{
  
    const { distance, selected, tbl, city } = req.body;
  
    db.query("SELECT  * FROM "+tbl+" WHERE illumination='"+illumna+"' || subcategory= '"+catego+"'  &&  subcategory= '"+catego+"' &&  illumination='"+illumna+"'",async (err,result) => {
      if (err) {

        return res.status(204).json({err: err,message :"Wrong Data"})
       } else if (result.length == 0 ){
        return res.status(204).json({message:"No data"})
    } else{
    return res.send(result); 
    }
  })
  
})

exports.locationFilter = catchError(async (req,res) =>{
  const {category_name,price, illumination, table, city} = req.body;
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
  
  const sql= "SELECT * FROM "+table_name+" WHERE city_name='"+city+"' &&  price BETWEEN '"+min+"' AND '"+max+"' AND illumination='"+illumination+"' && subcategory IN ('"+newSubCate+"')";
  db.query(sql, async(err,result) =>{
if(err){
  return res.status(204).json({message:err.message})
}else{
  return res.status(200).json(result)
}
  })
})

exports.iconFilter = catchError(async (req,res) =>{
  const { distance, selected, tbl, city, minLatitude, maxLatitude , uniqueValues} = req.body;
  let data = ''
if(selected){
data = selected.flat(Infinity)
}
db.changeUser({ database: "gohoardi_goh" });
// const sql = "SELECT * FROM `testing_only_restaurants` WHERE mp_lat BETWEEN "+minLatitude+" AND "+maxLatitude+""
const sql = "SELECT * FROM `testing_only_restaurants` WHERE mp_lat IN ("+uniqueValues+")"

db.query(sql, (err, result) => {
if (err) {
  return res.json({message:"No Data Found On this city"})
} else {
  return res.status(200).json(result)
}
});

})

//media filters
  exports.filterData = catchError(async(req, res, next) => {
    try{
      const {category_name, illunation, categorys,city_name} = req.body
  const SubCategory = categorys.toString()
  const newSubCate = SubCategory.replace(/,/g, "','")
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
            if(newSubCate == ![] &&  illunation == ![]) {
              const sql = "SELECT DISTINCT * FROM "+table_name+" WHERE city_name='"+city_name+"'"
              db.query(sql,async (err,result) => {
                          if (err) {
                         
                            return res.send({err: err,message :"Wrong Data"})
                        } else{
          
                          return res.status(200).json(result) 
                        }
                      }) 
            } else {
              let addsubcategoryQuery = "";
              if(newSubCate){
               addsubcategoryQuery = "&& subcategory IN ('"+newSubCate+"')"; 
              }
              const sql = "SELECT * FROM "+table_name+" WHERE illumination='"+illunation+"' "+addsubcategoryQuery+" && city_name='"+city_name+"'"
              db.query(sql,async (err,result) => {
                if (err) {
                  return res.status(204).json({err: err,message :"Wrong Data"})
                 } else{
              return res.status(200).json(result)
              }
            })
            }
    }catch (err){
    res.status(204).json({
      messsage:err.res
    })
  }
})