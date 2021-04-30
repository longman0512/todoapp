const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs")
const fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// mysql connection
const path = require('path');
const saltRounds = 10

router.post("/uploadData",  async (req, res) => {
  console.log(req.body);
  fs.writeFile('todo.txt', JSON.stringify(req.body.data), (err) => {
    if(err) {
        throw err;
    }
    res.json({
      flag: true,
      data: [],
      msg: "Get Data of Noti"
    })
    res.send();
});
});

router.post("/readData",  async (req, res) => {
  console.log("read data", req.body);
  fs.readFile('todo.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(typeof data.toString());
    res.json({
      flag: false,
      data: data?JSON.parse(data.toString()):[],
      msg: "Get Data of Noti"
    })
    res.send();
  });
  
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/../client/build/index.html'));
});


module.exports = router;