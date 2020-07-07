const express = require('express');
const router = express.Router();
const con = require('../database/db')

const mobilenames_sql= "call getdevicesBrandsByDev_type(2)"

router.get("/get-tabs-brandName", function (req, res) { 
    con.query(mobilenames_sql, function (err, result) {
      if (err){
        res.status(400).json({error:'Some error occured please try again later'})
      }else {
        res.json({tabsbrands:result[0].map(data =>{return data.Brand})})
      }
      });
});

module.exports = router;
