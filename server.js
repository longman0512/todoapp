const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 4001;
const router = require('./router/router');

app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
      res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
      return res.status(200).json({});
  }
  next();
});
app.use(router);
// Ididn't use it now why I don't knwo how to use it I don't know too haha  but you must use multer to upload files to express
//setup server Then Can I send string to express using formdata? yes, you can send form data and recieve it on node.js backend.
// one second
const server = app.listen(PORT, function() {
  console.log("server running: "+PORT);
});
