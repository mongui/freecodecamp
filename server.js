'use strict';

require('dotenv').load();
var express = require('express');
var mongo = require('mongodb');
var ejs = require('ejs');
var routes = require('./app/routes/index.js');

var app = express();

mongo.connect('mongodb://localhost:27017/freecodecamp', function (err, db) {
   if (err) {
      throw new Error('Database failed to connect!');
   } else {
      console.log('Successfully connected to MongoDB on port 27017.');
   }
   
   app.engine('html', ejs.__express);
   app.use('/public', express.static(process.cwd() + '/public'));
   app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

   routes(app, db);

   app.listen(process.env.SERVER_PORT,  function () {
      console.log('Node.js listening on port '+process.env.SERVER_PORT+'...');
   });
});