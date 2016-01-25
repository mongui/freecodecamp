'use strict';

module.exports = function (app, db) {
    app.route('/')
    .get(function(req, res) {
        res.sendFile(process.cwd() + '/public/index.html');
    });
    
    // Timestamp Microservice.
    var Timestamp = require(process.cwd() + '/app/controllers/timestamp.js');
    var timestamp = new Timestamp(db);
    app.route('/projects/timestamp').get(timestamp.get);
    
    // Request Header Parser Microservice.
    var Whoami = require(process.cwd() + '/app/controllers/whoami.js');
    var whoami = new Whoami(db);
    app.route('/projects/whoami').get(whoami.get);
    
    // URL Shortener Microservice.
    var Shurli = require(process.cwd() + '/app/controllers/shurli.js');
    var shurli = new Shurli(db);
    app.route('/projects/shurli/new/*').get(shurli.new);
    app.route('/projects/shurli/:id').get(shurli.url);
    app.route('/projects/shurli').get(shurli.index);
};
