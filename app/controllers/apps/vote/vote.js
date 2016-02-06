'use strict';

function vote (db) {
   this.index = function (req, res) {
      var webData = {
         url: process.env.SERVER_PATH,
         contentUrl: process.cwd() + '/public/views/apps/vote/index'
      };
      
      res.render(
         process.cwd() + '/public/views/apps/vote/base',
         webData
      );
   };
}

module.exports = vote;
