const db = require("../conn/conn");
const jwtToken = require('jsonwebtoken')
const catchError = require('../middelware/catchError')


exports.test001 = catchError(async (req, res, next) => {
    // const {category_name, city_name} = req.body
    const cookieData = req.cookies
    if (!cookieData) {
        return res.status(204).json({message: "No Cookie Found"})
    }
    city_name = "Delhi";
    category_name = "traditional-ooh-media";
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
        case "inflight_media":
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
            if (!token || token == 0) {
                promises.push(new Promise((resolve, reject) => {
                    db.query("SELECT * FROM " + table_name + " WHERE city_name='delhi' LIMIT 51", async (err, result) => {
                        if (err) {
                            return res.send({err: reject(err), message: "Wrong Data"})
                        } else if (resolve == []) {
                            return res.send({resolve: "Empty", message: "Media Not Found"})
                        } else {
                            resolve(result)
                        }
                    })
                }))

            } else {
                const userID = user.id;
                promises.push(new Promise((resolve, reject) => {
                    db.query("SELECT media.*,cart.campaigid, cart.userid, cart.isDelete FROM " + table_name + " AS media LEFT JOIN goh_shopping_carts_item AS cart ON media.code=cart.mediaid AND cart.userid = '" + userID + "' WHERE media.city_name = '" + city_name + "' ORDER BY `cart`.`userid` DESC LIMIT 2", async (err, result) => {
                        if (err) {
                            return res.send({err: reject(err), message: "Wrong Data"})
                        } else if (resolve == []) {
                            return res.send({resolve: "Empty", message: "Media Not Found"})
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