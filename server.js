const cors = require('cors');
var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
mongoose = require('mongoose'),
Task = require('./api/models/bookModel'), //created model loading here
bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bookdb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./api/routes/bookRoutes'); //importing route
routes(app); //register the route
app.use(function(req, res ,next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);   
    next();
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);
console.log('book RESTful API server started on: ' + port);