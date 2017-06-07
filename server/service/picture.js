/**
 * Created by YYW on 2017/6/7.
 */
const express = require('express')
const router = express.Router()
const util = require('util')
const path = require('path')
const fs = require('fs')
const formidable = require('formidable')
router.post('/picture/headPic', (req, res) => {
  console.log('路由进入')
  var form = new formidable.IncomingForm()
  form.encoding = 'utf-8'
  form.uploadDir = '/temp'
  form.maxFieldsSize = 2 * 1024 * 1024
  form.keepExtensions = true
  form.parse(req, function(err, fields, files) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('received upload:\n\n');
    res.end(util.inspect({fields: fields, files: files}));
  });
})
module.exports = router
