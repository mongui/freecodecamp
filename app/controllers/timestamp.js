'use strict';

function timestamp (db) {
   this.get = function (req, res) {
      
      if (req.query.q && req.query.q != "") {
         console.log("entra");
      } else {
         res.render(
            process.cwd() + '/public/projects/timestamp.html',
            { url: process.env.SERVER_PATH }
         );
      }
   };
}

module.exports = timestamp;