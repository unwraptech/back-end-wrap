const express = require('express');
const router = express.Router();
const con = require('../database/db')

const mobilenames_sql= "call getdevicesBrandsByDev_type(1)"

router.get("/get-mobile-brandName", function (req, res) { 
    con.query(mobilenames_sql, function (err, result) {
      if (err){
        res.status(400).json({error:'Some error occured please try again later'})
      }else {
        res.json({mobilebrands:result[0].map(data =>{return data.Brand})})
      }
      });
});

router.get("/search-mobile/:search", function (req, res) { 
  
  const searchmobile_SQL ="call search_device('"+req.params.search+"')"

  con.query(searchmobile_SQL, function (err, result) {
    if (err){
      res.status(400).json({error:'Some error occured please try again later'})
    }else {
      res.json({mobilebrands:result[0]})
    }
    });
});
router.post("/compare-mobile", function (req, res) { 
  const comparedevice ="call comparedevices("+req.body.id1+","+req.body.id2+","+req.body.id3  +  ","+req.body.id4+   ")"

  con.query(comparedevice, function (err, result) {
    if (err){
      res.status(400).json({error:'Some error occured please try again later'})
    }else {
      res.json({mobilebrands:result[0]})
    }
    });
});
router.get("/get-mobile-by-brand/:brand", function (req, res) { 
  
  const searchmobile_SQL ="call get_devices_by_brand('"+req.params.brand+"')"

  con.query(searchmobile_SQL, function (err, result) {
    console.log(result);
    
    if (err){
      console.log(err);
      
      res.status(400).json({error:'Some error occured please try again later'})
    }else {
      res.json({mobilebrands:result[0]})
    }
    });
});
router.post("/get-mobile-devices", function (req, res) { 
  console.log(req.body);
  
  const searchmobile_SQL ="call getAllDevices('"+req.body.noofrecords+"','"+req.body.page+"','"+req.body.type+"')"

  con.query(searchmobile_SQL, function (err, result) {
    console.log(result);
    
    if (err){
      console.log(err);
      
      res.status(400).json({error:'Some error occured please try again later'})
    }else {
      res.json({devices:result[0]})
    }
    });
});
module.exports = router;
