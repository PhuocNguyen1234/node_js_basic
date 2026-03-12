const express = require('express');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//Khai bao route
app.use('/', webRoutes);

//Test connect DB
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307, //Default 3306
  user: 'root',
  password: '123456',
  database: 'huuphuoc'
})

// A simple SELECT query
  connection.query(
    'Select *from Users u',
    function (err, results, fields) {
      console.log('>>Results: ',results); // results contains rows returned by server
      console.log('>>Fields: ',fields); // fields contains extra meta data about results, if available
    }
  ); 

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
})
