'use strict';

function shurli (db) {
   this.url = function (req, res) {
      var id = req.params.id;
      
      // Get the id from db.
      var collection = db.collection('urls');
      collection.findOne({ id: id }, { url: 1, _id: 0 }, function(err, documents) {
         if (err)
            throw err;
         
         // If exists...
         try {
            var url = documents.url;
            res.writeHead(302, { 'Location': documents.url });
            res.end();
         } catch (err) {
            // If not...
            res.setHeader('content-type', 'application/json; charset=utf-8');
            var sendJSON = JSON.stringify({ error: "No short url found for given input" });
            res.end(sendJSON);
         }
         
         res.end();
      });
   };
   
   this.new = function (req, res) {
      var uri = req.params[0];
      
      // Check if it's a valid url.
      if ( uri.match(/^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?/) ) {
         
         // Generate a string.
         var num = Math.floor(100000 + Math.random() * 900000);
         var str = num.toString().substring(0, 4);
         
         // Save it in our db.
         var collection = db.collection('urls');
         collection.insert({ url: uri, id: str }, function(err, data) {
            if (err)
               throw err;
          });
         
         // Send generated json object.
         var json = { original_url: uri, short_url: process.env.SERVER_PATH + '/projects/shurli/' + str };
         res.setHeader('content-type', 'application/json; charset=utf-8');
         var sendJSON = JSON.stringify(json);
         res.end(sendJSON);
      } else {
         // URL not valid.
         res.setHeader('content-type', 'application/json; charset=utf-8');
         var sendJSON = JSON.stringify({ error: "URL invalid" });
         res.end(sendJSON);
      }
   };
   
   this.index = function (req, res) {
      res.render(
         process.cwd() + '/public/views/apis/shurli.html',
         { url: process.env.SERVER_PATH }
      );
   };
}

module.exports = shurli;