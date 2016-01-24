'use strict';

require('dotenv').load();
var express = require('express');
var mongo = require('mongodb');
var ejs = require('ejs');
var routes = require('./app/routes/index.js');

var app = express();

mongo.connect('mongodb://'+process.env.MONGO_PATH+':'+process.env.MONGO_PORT+'/'+process.env.MONGO_DB, function (err, db) {
   if (err) {
      throw new Error('Database failed to connect!');
   } else {
      console.log('Successfully connected to MongoDB on port '+process.env.MONGO_PORT+'.');
   }
   
   app.engine('html', ejs.__express);
   app.use('/public', express.static(process.cwd() + '/public'));
   app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

   routes(app, db);

   app.listen(process.env.SERVER_PORT,  function () {
      console.log('Node.js listening on port '+process.env.SERVER_PORT+'...');
   });
});
