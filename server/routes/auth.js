const express = require('express')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router()
const db = require('../conn/conn')

router.post('/login', async (req, res) => {
  
  db.changeUser({database:"gohoardi_crmapp"})
    const password = req.body.password;
    const email = req.body.email;
    db.query("SELECT * FROM tblcontacts WHERE email = ? ", [email], async (err, result) => {
      // console.log(result[0].password);
        if (err) throw err;
        if (!result.length || !(await bcrypt.compare(password, result[0].password)))
             {
            console.log("ggg");
              res.json({ success: false, message: "Wrong Email & Password" });
            } else {
              
              const email = result[0].email
              const id = result[0].id;
              const token = jwt.sign({ id }, "Login_Successfull", {
                expiresIn: 5000,
              });
              console.log("success");
              return res.send({ success: true, token: token, email: email,password, id });
             
            };
    });
});


router.put("/update", async (req, res) => {
  db.changeUser({database:"sql_login"})
  const {id, email, password:Npassword, role} = req.body;
  const password = await bcrypt.hash(Npassword,8)
  db.query(
    "UPDATE users SET  email = ?, password = ?, role = ? WHERE id = ?",
    [email, password, role, id],
    (err, result) => {
      if (err) {
        res.json({success : err, message: "update Unsucessfull"});
      };
      res.send({status : result, success:"Updated SuccessFul"})    
    }
  );
});


module.exports = router;