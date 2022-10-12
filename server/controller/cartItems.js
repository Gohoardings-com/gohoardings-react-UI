const db = require("../conn/conn");

exports.addOnCart = async (req, res, next) => {
  try {
    console.log(req.body);
    const { userid, mediaid, mediatype } = req.body;
    db.changeUser({ database: "gohoardi_goh" });
    db.query(
      "SELECT campaigid  FROM  goh_shopping_carts_item ORDER BY campaigid DESC LIMIT 1",
      async (err, result) => {
        if (err) {
          return res.send(err);
        } else {
          const campaigid = result[0].campaigid;
          const inccampaigid = result[0].campaigid + 1;
          db.query(
            "SELECT userid  FROM  goh_shopping_carts_item ORDER BY userid DESC LIMIT 1",
            async (err, result) => {
              if (err) {
                return res.send(err);
              } else {
                const lastuserid = result[0].userid;
                if (userid !== lastuserid) {
                  db.query(
                    "INSERT INTO goh_shopping_carts_item (userid, mediaid, campaigid, mediatype) VALUES ('" +
                      userid +
                      "','" +
                      mediaid +
                      "','" +
                      inccampaigid +
                      "','" +
                      mediatype +
                      "')",
                    async (err, result) => {
                      if (err) {
                        return res.send(err);
                      } else {
                        return res.send(result);
                      }
                    }
                  );
                } else {
                  db.query(
                    "INSERT INTO goh_shopping_carts_item (userid, mediaid, campaigid, mediatype) VALUES ('" +
                      userid +
                      "','" +
                      mediaid +
                      "','" +
                      campaigid +
                      "','" +
                      mediatype +
                      "')",
                    async (err, result) => {
                      if (err) {
                        return res.send(err);
                      } else {
                        return res.send(result);
                      }
                    }
                  );
                }
              }
            }
          );
        }
      }
    );
  } catch (err) {
    res.send(err);
  }
};
exports.processdCart = async (req, res, next) => {
  try {
    const { start_date, end_date, produts, userid, phonenumber } = req.body;
    db.changeUser({ database: "gohoardi_goh" });
    db.query(
      "SELECT DISTINCT campaigid FROM goh_shopping_carts_item WHERE userid = '" +
        userid +
        "'",
      (err, result) => {
        if (err) {
          console.log(err);
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
  } catch (err) {
    res.send(err);
  }
};

exports.deleteFromCart = async (req, res, next) => {
  try {
    console.log(req.body);
    const { userid, code } = req.body;

    db.changeUser({ database: "gohoardi_goh" });
    db.query(
      "UPDATE goh_shopping_carts_item SET status=0 , isDelete=1 WHERE userid='" +
        userid +
        "' && mediaid='" +
        code +
        "'",
      async (err, result) => {
        if (err) {
          return res.send(err);
        } else {
          return res.send(result);
        }
      }
    );
  } catch (err) {
    res.send(err);
  }
};

exports.useritems = async (req, res, next) => {
  const userid = req.body.userid;
  try {
    db.changeUser({ database: "gohoardi_goh" });
    db.query(
      'SELECT mediaid FROM goh_shopping_carts_item WHERE userid = "' +
        userid +
        '"',
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          return res.send(result);
        }
      }
    );
  } catch (err) {
    res.send(err);
  }
};

exports.cartitems = async (req, res, next) => {
  try {
    db.changeUser({ database: "gohoardi_goh" });
    db.query(
      `SELECT DISTINCT * FROM goh_shopping_carts_item WHERE userid = 5717`,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          req.data = result;
          next();
        }
      }
    );
  } catch (err) {
    return res.send(err);
  }
};

exports.cartiemfromdb = async (req, res, next) => {
  const arr = req.data;
  var table_name;
  let promises = [];
  arr.forEach((obj) => {
    try {
      db.changeUser({ database: "gohoardi_goh" });
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
            "SELECT * FROM " + table_name + " WHERE code='" + obj.mediaid + "'",
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
    const result = await Promise.allSettled(promises);
    return res.send(result);
  } catch (err) {
    return res.send(err);
  }
};
