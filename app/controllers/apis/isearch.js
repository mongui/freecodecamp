'use strict';

function isearch (db) {
   this.stats = function (req, res) {
      // Get the last 20 entries from the db.
      var collection = db.collection('isearch');
      collection.find({}, {_id:0}).limit(20).toArray(function(err, results) {
         res.end(
            JSON.stringify(results)
         );
      });
   };
   
   this.search = function (req, res) {
      // Must have a search parameter.
      if ( req.params['SEARCH'] != "" ) {
         var qos = (req.query['offset'] > 0) ? req.query['offset'] : 0;
         var url = 'http://api.pixplorer.co.uk/image?word=' + req.params['SEARCH'] + '&amount=' + (10+qos) + '&size=l';
         var http = require('http');
         
         http.get(url, function(res2) {
            var body = '';
            
            res2.on('data', function(chunk) {
               body += chunk;
            });
            
            res2.on('end', function() {
               // Remove first entries and return only the array.
               var data = JSON.parse(body);
               for (var i=0; i<qos; i++) {
                  data.images.shift();
               }
               
               res.setHeader('content-type', 'application/json; charset=utf-8');
               res.end(JSON.stringify(data.images));
            });
         }).on('error', function(e) {
               res.end("Got an error: ", e);
         });
         
         // Add the current query to the db.
         var collection = db.collection('isearch');
         collection.insert({ term: req.params['SEARCH'], when: new Date().toISOString() }, function(err, data) {
            if (err)
               throw err;
         });
      }
   };
   
   this.index = function (req, res) {
      res.render(
         process.cwd() + '/public/views/apis/isearch',
         { url: process.env.SERVER_PATH }
      );
   };
}

module.exports = isearch;