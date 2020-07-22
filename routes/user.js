const express = require('express');
const router = express.Router();
const con = require('../database/db')

router.post("/authenticate", function (req, res) { 
    const authenticate_sql ="call authenticate('"+req.body.email+"','"+req.body.password+ "')"
    con.query(authenticate_sql, function (err, result) {
        
      if (err){
          console.log('err', err);
          
        res.status(400).json({error:'Some error occured please try again later'})
      }else {
        res.json({message:result[0]})
      }
      });
});
router.get("/getUsers/:id", function (req, res) { 
  const authenticate_sql ="call getUsers("+req.params.id+")"
  con.query(authenticate_sql, function (err, result) {
      
    if (err){
        console.log('err', err);
        
      res.status(400).json({error:'Some error occured please try again later'})
    }else {
      res.json({message:result[0]})
    }
    });
});
module.exports = router;
