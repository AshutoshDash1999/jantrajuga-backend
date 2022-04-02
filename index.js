var express = require('express');
var app = express();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require('body-parser');
var cors = require('cors');
var ObjectID = require('mongodb').ObjectID;

var dbb = require('./configuration/collection');

//Routes
var userRoutes = require('./routes/user_routes')
var vendorRoutes = require('./routes/vendor_routes')

app.set('port', (process.env.PORT || 9000));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});

var prod = false;
var url = "mongodb+srv://biswajit:b7D7ehi28LWSQRmw@cluster0.epz3m.mongodb.net/machao_backend?retryWrites=true&w=majority";

if (prod) {
    var prod_url = require('./configuration/collection');
    url = prod_url;
}

app.get('/', function (req, res) {
    res.send("WELCOME TO MACHAO page ...");
});

// configuring routes
userRoutes.configure(app, mongo, ObjectID, url, assert, dbb)
vendorRoutes.configure(app, mongo, ObjectID, url, assert, dbb)