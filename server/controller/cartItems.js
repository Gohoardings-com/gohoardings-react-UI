const db = require("../conn/conn");
const jwtToken = require('jsonwebtoken')
const catchError  = require('../middelware/catchError')

exports.addOnCart = catchError(async (req, res) => {
const cookieData = req.cookies
if (!cookieData) {
  return res.status(400).json({message:"No Cookie Found"})
} 
const token = Object.values(cookieData)[0];
return jwtToken.verify(token,  process.env.jwt_secret ,async (err,user) => {
if(!token || token == 0){
      return res.status(200).json({message:"Login First"})
    }else {
      const userid = user.id
      const { mediaid, mediatype } = req.body;
      db.changeUser({ database: "gohoardi_goh" });
      db.query("INSERT INTO goh_shopping_carts_item (userid, mediaid, campaigid, mediatype) VALUES ('" +
        userid +
        "','" +
        mediaid +
        "','" +
        userid +
        "','" +
        mediatype +
        "') LIMIT 10",
        async (err, result) => {
          if (err) {
            return res.send(err);
          } else {
            return res.send(result);
          }
        }
      )
    }
}) 
})

exports.processdCart = catchError(async (req, res) => {
    const { start_date, end_date, produts, userid, phonenumber } = req.body;
    db.changeUser({ database: "gohoardi_goh" });
    db.query(
      "SELECT DISTINCT campaigid FROM goh_shopping_carts_item WHERE userid = '" +
      userid +
      "'",
      (err, result) => {
        if (err) {
        } else {
          const campaign_name = result[0].campaigid;
          produts.map((el) => {
            db.query(
              "INSERT into goh_serach_activities (user, phone, campaign_name, start_date, end_date, city, pincode, address, campaign_city, media_type, status, payment_status) VALUES ('" +
              userid +
              "','" +
              phonenumber +
              "','campaign-" +
              campaign_name +
              "','" +
              start_date +
              "','" +
              end_date +
              "','" +
              el.city_name +
              "','" +
              el.city +
              "','" +
              el.location +
              "','" +
              el.city +
              "','" +
              el.category_name +
              "', 2,0)",
              (err, result) => {
                if (err) {
                  return res.send(err);
                } else {
                  return res.send(result);
                }
              }
            );
          });
        }
      }
    );
})

exports.deleteFromCart = catchError(async (req, res, next) => {
    const userid = req.id
    const { code } = req.body;
    db.changeUser({ database: "gohoardi_goh" });
    db.query(" UPDATE goh_shopping_carts_item SET isDelete=1 WHERE userid='" + userid + "' && mediaid='" + code + "'",
      async (err, result) => {
        if (err) {
          return res.send(err);
        } else {
          return res.send(result);
        }
      }
    );
})


exports.useritems = catchError(async (req, res, next) => {
    // const user = req.id
    const user = 5740
    db.changeUser({ database: "gohoardi_goh" });
    db.query(
      `SELECT COUNT(userid) AS item FROM goh_shopping_carts_item WHERE userid = ${user} && isDelete=0`,
      (err, result) => {
        if (err) {
        return res.send(err)
        } else {
        return res.status(200).json(result)
        }
      }
    );
})


exports.cartitems = catchError(async (req, res, next) => {
    // const user = req.id
    const user = 190
    db.changeUser({ database: "gohoardi_goh" });
    db.query(
      `SELECT * FROM goh_shopping_carts_item WHERE userid = ${user} && isDelete= 0`,
      (err, result) => {
        if (err) {
          return res.status(400).json({message:"No User Found"})
        } else {
          req.data = result;
          next();
        }
      }
    );
})

exports.cartiemfromdb = async (req, res, next) => {
  const arr = req.data;
  var table_name;
  let promises = [];
  db.changeUser({ database: "gohoardi_goh" });
  arr.map((obj) => {
    try {
      switch (obj.mediatype) {
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
      promises.push(
        new Promise(async (reject, resolve) => {
          db.query(
            "SELECT media.*,cart.isDelete FROM  "+ table_name +" AS media INNER JOIN goh_shopping_carts_item AS cart ON media.code='" + obj.mediaid + "' && cart.isDelete = 0  WHERE cart.userid = '"+obj.userid+"'",
            async (err, result) => {
              if (err) {
                reject(err);
              } else {
             resolve(result);
              }
            }
          );
        })
      );
    } catch (err) {
      res.send(err);
    }
  });
  try {
    const data = await Promise.allSettled(promises);
    let result = [];
    data.forEach(element => {
      result.push(element.reason[0])      
    });
    return res.send(result);
  } catch (err) {
    return res.send(err);
  }
};
