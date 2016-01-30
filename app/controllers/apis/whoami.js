'use strict';

function whoami (db) {
   this.get = function (req, res) {
      res.setHeader('content-type', 'application/json; charset=utf-8');
      
      var ip = req.headers['x-forwarded-for'] || 
               req.connection.remoteAddress || 
               req.socket.remoteAddress ||
               req.connection.socket.remoteAddress;
      
      var lang = req.headers["accept-language"].split(',')[0];
      
      var soft = req.headers["user-agent"].split('(')[1]
      soft = soft.split(')')[0]
      soft = soft.split(';')[1]
      
      var userData = {
         ipaddress: ip,
         language: lang,
         software: soft
      };
      
      var sendJSON = JSON.stringify(userData);
      res.end(sendJSON);
   };
}

module.exports = whoami;