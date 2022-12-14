const db = require("../conn/conn");
const jwtToken = require('jsonwebtoken')
const catchError = require('../middelware/catchError')

exports.city = catchError(async (req, res, next) => {
    const {value} = req.body
    let data = ''
    if (value) {
        data = " WHERE name LIKE '" + value + "%'"
    }
    db.changeUser({database: "gohoardi_goh"});
    const sql = "SELECT DISTINCT name FROM `goh_cities` " + data + "  LIMIT 8"
    db.query(sql, (err, result) => {
        if (err) {
            return res.json({message: "No Data Found On this city"})
        } else {
            return res.send(result);
        }
    });
})

exports.Invertor = catchError(async (req, res, next) => {
    db.changeUser({database: "gohoardi_goh"});
    (code = req.body.code),
        (city = req.body.city_name),
        (location = req.body.location),
        (category = req.body.category_name),
        (subcategory = req.body.subcategory),
        (illumination = req.body.illumination),
        (company = req.body.company);
    var table_name = "";
    let where = [];
    if (city) {
        where.push(' city_name = "' + city + '"');
    }
    if (location) {
        where.push(' location = "' + location + '"');
    }
    if (category) {
        switch (category) {
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
        }
    }

    if (subcategory) {
        where.push(' subcategory = "' + subcategory + '"');
    }
    if (illumination) {
        where.push(' illumination = "' + illumination + '"');
    }

    var sql = "SELECT * FROM " + table_name + "";

    if (city || location || subcategory || illumination) {
        sql += " WHERE";
    }

    const conditionstring = "" + where + "";
    var allconditions = conditionstring.replace(/,/g, " AND");

    const sqlquery = "" + sql + allconditions + "LIMIT 10";

    if (code || company) {
        if (code) {
            where.push('code = "' + code + '"');
        }
        if (company) {
            where.push('mediaownercompanyname = "' + company + '"');
        }
        let alldata =
            "code, city_name, location, subcategory, illumination, mediaownercompanyname, email, phonenumber, thumb, category_name,price";

        const newquery =
            "SELECT " +
            alldata +
            " FROM goh_media  WHERE " +
            where +
            " UNION SELECT " +
            alldata +
            " FROM goh_media_digital WHERE " +
            where +
            " UNION SELECT " +
            alldata +
            " FROM goh_media_transit WHERE " +
            where +
            "  UNION SELECT " +
            alldata +
            " FROM goh_media_mall WHERE " +
            where +
            "  UNION SELECT " +
            alldata +
            " FROM goh_media_airport WHERE " +
            where +
            " UNION SELECT " +
            alldata +
            " FROM goh_media_inflight WHERE " +
            where +
            " UNION SELECT " +
            alldata +
            " FROM goh_media_office WHERE " +
            where +
            " LIMIT 10";
        db.query(newquery, async (err, result) => {
            if (err) throw err;
            return res.json({status: "success1", res: result});
        });
    } else {
        if (
            !city == "" ||
            !location == "" ||
            !category == "" ||
            !subcategory == "" ||
            !illumination == ""
        ) {
            db.query(sqlquery, (err, result) => {
                if (err) {
                    return res.send({status: "sqlerror", error: err});
                } else if (result.length < 0) {
                    return res.send({status: "error", error: "Media Not Found"});
                } else {
                    return res.send(result);
                }
            });
        } else {
            res.json({status: "error", error: "Media Not Found"});
        }
    }
})

exports.company = catchError(async (req, res) => {
    db.changeUser({database: "odoads_tblcompanies"});
    db.query(
        "SELECT name FROM tblcompanies WHERE name IS NOT NULL",
        (err, result) => {
            if (err) throw err;
            return res.send(result);
        }
    );
})


exports.SearchData = catchError(async (req, res, next) => {
    const {category_name, city_name} = req.body
    const city = city_name ? city_name : "delhi";
    const cookieData = req.cookies
    if (!cookieData) {
        return res.status(204).json({message: "No Cookie Found"})
    }
    const promises = []
    db.changeUser({database: "gohoardi_goh"});
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
        case "inflight-media":
            table_name = "goh_media_inflight";
            break;
        case "office-media":
            table_name = "goh_media_office";
            break;
        default:
            table_name = "goh_media";
    }
    const token = Object.values(cookieData)[0];
    return jwtToken.verify(token, process.env.jwt_secret, async (err, user) => {
            if (err) {
                promises.push(new Promise((resolve, reject) => {
                    const sql = "SELECT * FROM " + table_name + " WHERE city_name='" + city + "'";
                    db.query(sql, async (err, result) => {
                        if (err) {
                     
                            return res.status(204).json({err: reject(err), message: "Wrong Data"})
                        } else if (resolve == []) {
                            return res.status(204).json({resolve: "Empty", message: "Media Not Found"})
                        } else {
                            resolve(result)
                        }
                    })
                }))
            } else {
                const userID = user.id;
                promises.push(new Promise(async (resolve, reject) => {
                    db.query("SELECT DISTINCT media.*,cart.campaigid, cart.userid, cart.isDelete FROM " + table_name + " AS media LEFT JOIN goh_shopping_carts_item AS cart ON media.code=cart.mediaid AND cart.userid = '" + userID + "' WHERE media.city_name = '" + city + "' ORDER BY `cart`.`userid` DESC ", async (err, result) => {
                        if (err) {
                        
                            return res.status(204).json({err: reject(err), message: "Wrong Data"})
                        } else if (resolve === []) {
                            return res.status(204).json({resolve: "Empty", message: "Media Not Found"})
                        } else {
                            resolve(result)
                        }
                    })
                }))
            }
            try {
                const result = await Promise.allSettled(promises)
                let test = [];
                result.forEach(element => {
                    element.value.forEach(obj => {
                        test.push(obj);
                    });
                });
                return res.send(test);
            } catch (err) {
                return (err)
            }
        }
    )
})



  