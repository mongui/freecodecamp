'use strict';

module.exports = function (app, db) {
    app.route('/')
    .get(function(req, res) {
        res.sendFile(process.cwd() + '/public/index.html');
    });
    
    var Timestamp = require(process.cwd() + '/app/controllers/timestamp.js');
    var timestamp = new Timestamp(db);
    app.route('/projects/timestamp').get(timestamp.get);
};
