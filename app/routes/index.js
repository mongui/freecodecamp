'use strict';

module.exports = function (app, db) {
    app.route('/').get(function(req, res) {
        res.sendFile(process.cwd() + '/public/index.html');
    });
    
    
    /***************************
     * API Projects (150 hours)
     ***************************/
    
    // Timestamp Microservice.
    var Timestamp = require(process.cwd() + '/app/controllers/apis/timestamp.js');
    var timestamp = new Timestamp(db);
    app.route('/projects/timestamp')                .get(timestamp.get);
    
    // Request Header Parser Microservice.
    var Whoami = require(process.cwd() + '/app/controllers/apis/whoami.js');
    var whoami = new Whoami(db);
    app.route('/projects/whoami')                   .get(whoami.get);
    
    // URL Shortener Microservice.
    var Shurli = require(process.cwd() + '/app/controllers/apis/shurli.js');
    var shurli = new Shurli(db);
    app.route('/projects/shurli/new/*')             .get(shurli.new);
    app.route('/projects/shurli/:id')               .get(shurli.url);
    app.route('/projects/shurli')                   .get(shurli.index);
    
    // Image Search Abstraction Layer.
    var Isearch = require(process.cwd() + '/app/controllers/apis/isearch.js');
    var isearch = new Isearch(db);
    app.route('/projects/isearch/stats')            .get(isearch.stats);
    app.route('/projects/isearch/:SEARCH')          .get(isearch.search);
    app.route('/projects/isearch')                  .get(isearch.index);
    
    // File Metadata Microservice.
    var Filemeta = require(process.cwd() + '/app/controllers/apis/filemeta.js');
    var filemeta = new Filemeta(db);
    app.route('/projects/filemeta')                 .get(filemeta.index)
                                                    .post(filemeta.upload);
    
    
    /***********************************************
     * Dynamic Web Application Projects (250 hours)
     ***********************************************/
    // Voting app.
    var Vote = require(process.cwd() + '/app/controllers/apps/vote/vote.js');
    var vote = new Vote(db);
    app.route('/projects/vote')                     .get(vote.index);
    
    
};
