'use strict';

function login (db) {
   this.index = function (req, res) {
      res.render(
         process.cwd() + '/public/views/apps/vote/login.html',
         { url: process.env.SERVER_PATH }
      );
   };
}

module.exports = login;
