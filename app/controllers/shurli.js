'use strict';

function shurli (db) {
   this.get = function (req, res) {
      
      if (1 == 0) {
         
      } else {
         // If a parameter wasn't received, return the instructions page.
         res.render(
            process.cwd() + '/public/projects/shurli.html',
            { url: process.env.SERVER_PATH }
         );
      }
   };
}

module.exports = shurli;