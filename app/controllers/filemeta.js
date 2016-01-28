'use strict';

function filemeta (db) {
   this.upload = function (req, res) {
      var multer  = require('multer');
      var upload = multer({ dest: process.cwd() + '/uploads/'}).single('0');
      upload(req, res, function (err) {
         res.setHeader('content-type', 'application/json; charset=utf-8');
         var sendJSON = JSON.stringify({ fileSize: req.file.size });
         res.end(sendJSON);
      });
   };
   
   this.index = function (req, res) {
      res.render(
         process.cwd() + '/public/projects/filemeta.html',
         { url: process.env.SERVER_PATH }
      );
   };
}

module.exports = filemeta;