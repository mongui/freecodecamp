'use strict';

function whoami (db) {
   this.get = function (req, res) {
      res.setHeader('content-type', 'application/json; charset=utf-8');
      res.end();
   };
}

module.exports = whoami;