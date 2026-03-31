const express = require('express');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
const { postCreateUser } = require('./controllers/homeController');
const {initAPIRoute} = require('./routes/api');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//config template engine
configViewEngine(app);

//Khai bao route
app.use('/', webRoutes);

//Khoi tao api route
initAPIRoute(app);

// A simple SELECT query
// connection.query(
//   'Select *from Users u',
//   function (err, results, fields) {
//     console.log('>>Results: ',results); // results contains rows returned by server
//   }
// ); 

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
})
