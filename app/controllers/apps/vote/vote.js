'use strict';

function vote (db) {
   this.index = function (req, res) {
      res.render(
         process.cwd() + '/public/views/apps/vote/index.html',
         { url: process.env.SERVER_PATH }
      );
   };
}

module.exports = vote;
