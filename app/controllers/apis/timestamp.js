'use strict';

function timestamp (db) {
   this.get = function (req, res) {
      
      if (req.query.q && req.query.q != "") {
         res.setHeader('content-type', 'application/json; charset=utf-8');
         
         // Check if it's a natural date or unixtime.
         if ( isNaN(Number(req.query.q)) ) {
            var date = new Date(req.query.q);
         } else {
            var date = new Date(req.query.q*1000);
         }
         
         var dates = {
            unix: null,
            natural: null
         };
         
         // If it's a valid date...
         if (date != "Invalid Date") {
            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            
            var dates = {
               unix: date/1000,
               natural: months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
            };
         }
         
         var sendJSON = JSON.stringify(dates);
         res.end(sendJSON);
      } else {
         // If a parameter wasn't received, return the instructions page.
         res.render(
            process.cwd() + '/public/views/apis/timestamp',
            { url: process.env.SERVER_PATH }
         );
      }
   };
}

module.exports = timestamp;